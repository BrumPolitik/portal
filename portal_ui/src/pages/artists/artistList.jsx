import React, {useState, useEffect} from "react";
import axios from "axios";
import ArtistCard from "../../sharedcomponents/artistcard";

function ArtistList() {
    const [responseState, setResponseState] = useState('')
    const [artistList, setArtistList] = useState(<div></div>)

    useEffect(() => {
        getArtists()
    }, [])

    useEffect(() => {
        if (responseState != '') {
            setArtistList(responseState.map((artist, k) => <ArtistCard artist={artist} key={k} />))
        }
    },[responseState])

    async function getArtists() {
        var response = await axios({
            url: 'http://localhost:5000/API/artists/get-artists',
            method: 'GET',
            responseType: 'stream'
        });
        setResponseState(response.data)
    }

    return (
        <div>
            <h1>Artist List</h1>
            <div className="list">
                {artistList}
            </div>
        </div>
    )
}

export default ArtistList