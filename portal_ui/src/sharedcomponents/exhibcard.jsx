import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ExhibCard() {

    const [image, setImage] = useState('')
    const [responseState, setResponseState] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const params = useLocation()

    useEffect(() => {
        console.log(params.pathname)

        if (params.pathname.toLowerCase() === "/exhibition/current") {
            setImageUrl(`http://localhost:5000/API/exhibitions/get-current`)
            console.log(imageUrl)
        } else {
            setImageUrl(`http://localhost:5000/API/exhibitions/get-upcoming`)
        }
    }, [])

    useEffect(() => {
        if (imageUrl != '') {
            getImage()
        }
    },[imageUrl])

    useEffect(() => {
        console.log(responseState)
        if (responseState != '') {
            setImage(Buffer.from(responseState.img.data, 'base64').toString('base64'))
        }
    },[responseState])

    async function getImage() {
        console.log(imageUrl)
        var response = await axios({
            url: imageUrl,
            method: 'GET',
            responseType: 'stream'
        });
        setResponseState(response.data[0])
    }

    return (
        <div>
            <div className="float-left">
                <img className="" src={`data:image/png;base64,${image}`}></img>
            </div>
            <div className="exhibtext">
                <h4>Exhibition</h4>
                <h3>{responseState.artist}</h3>
                <h3>{responseState.name}</h3>
            </div>
        </div>
    )
}

export default ExhibCard