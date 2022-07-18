import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ArtistCard = (props) => {
    const [image, setImage] = useState('')
    const [responseState, setResponseState] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [artist, setArtist] = useState(props.artist)
    const navigate = useNavigate()

    useEffect(() => {
        getImage()
    },[artist])

    useEffect(() => {
        if (responseState != '') {
            setImage(Buffer.from(responseState.img.data, 'base64').toString('base64'))
        }
    },[responseState])
    async function getImage() {
        var response = await axios({
            url: `http://localhost:5000/API/exhibitions/get-image/${encodeURI(artist.name)}`,
            method: 'GET',
            responseType: 'stream'
        });
        setResponseState(response.data[0])
    }

    return (
        <div className="artist-container">
            <img className="" src={`data:image/png;base64,${image}`} onClick={() => navigate(`/artist/${artist.name}`)}></img>
            <div className="desc">
                <h3 onClick={() => navigate(`/artist/${artist.name}`)}>{artist.name}</h3>
                <p onClick={() => navigate(`/artist/${artist.name}`)}>{artist.location}</p>
            </div>
        </div>
    )
}

export default ArtistCard