import React, {useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Heading = () => {
    const [artists, setArtists] = useState('')
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const navigate = useNavigate();
    let params = useLocation();

    useEffect(() => {
        getSearches()
    }, [])

    useEffect(() => {
        if (artists.length != 0){
            {artists.map((artist, k) => (<li key={k}>{artist.name}</li>))}
        }
    }, [artists])

    const filterPosts = (artists, query) => {
        if (!query) {
            return artists;
        }
    
        return artists.filter((artist) => {
            const artistName = artist.name.toLowerCase();
            return artistName.includes(query);
        });
    };

    async function getSearches() {
        var response = await axios({
            url: 'http://localhost:5000/API/artists/get-artists',
            method: 'GET',
            responseType: 'stream'
        });
        console.log(response)
        setArtists(response.data)
    }

    const searchBar = () => {
        document.getElementById('search').outerHTML = `<input type="search" onInput="{e => setSearchQuery(e.target.value)}" id="query" name="q" placeholder="Search..." aria-label="Search through site content">`
        document.getElementById('query').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                navigate(`/search/${document.getElementById('query').value}`)
            }
        })
    }  

    const[nav, setNav] = useState(<div></div>)

    function homeNav() {
        if (params.pathname.toLowerCase() === "/current") {
            navigate('/exhibition/current')
        } else {
            navigate('/exhibition/upcoming')
        }
    }

    useEffect(() => {
        if (params.pathname.toLowerCase() === "/current" || params.pathname.toLowerCase() === "/upcoming") {
            setNav(<nav style={{ margin: 10 }}>
            <button id="btn" className="btn bg-transparent shadow-none t-shadow large hov text-white" onClick={homeNav}>
                Exhibitions
            </button>
            <button id="btn" className="btn bg-transparent shadow-none t-shadow large hov text-white" onClick={() => navigate("/artists")}>
                Artists
            </button>
            <button id="btn" className="btn bg-transparent shadow-none t-shadow large hov text-white" onClick={() => navigate("/about-us")}>
                About Us
            </button>
            <button id='search' className="btn float-none bg-transparent shadow-none t-shadow large hov" onClick={searchBar}><i className="fa fa-search white" ></i></button>
        </nav>)
        } else {
            setNav(<nav style={{ margin: 10 }}>
            <button id="btn" className="btn bg-transparent shadow-none large hov" onClick={() => navigate("/exhibition/current")}>
                Exhibitions
            </button>
            <button id="btn" className="btn bg-transparent shadow-none large hov" onClick={() => navigate("/artists")}>
                Artists
            </button>
            <button id="btn" className="btn bg-transparent shadow-none large hov" onClick={() => navigate("/about-us")}>
                About Us
            </button>
            <button id='search' className="btn float-none bg-transparent large shadow-none hov" onClick={searchBar}><i className="fa fa-search" ></i></button>
        </nav>)
        }
        
    }, [params.pathname])  

    return(
        <div>
            <div className="float-right">
                {nav}
            </div>
        </div>
    )
}

export default Heading