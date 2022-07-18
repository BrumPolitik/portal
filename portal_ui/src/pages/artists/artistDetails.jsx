import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function ArtistDetail() {
    const [responseState, setResponseState] = useState('')
    const [images, setImages] = useState([])
    const [artist, setArtist] = useState('')
    const [imageData, setImageData] = useState('')
    const [image, setImage] = useState('')
    const params = useParams()
    const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    useEffect(() => {
        getArtist()
        getImage()
    }, [])

    useEffect(() => {
        getArtist()
        getImage()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (images.length != 0) {
                var num = randomIntegerInRange(0, (images.length - 1))
                console.log(num)
                setImageData(images[num])
            }
        }, 5000);
        return () => clearInterval(interval);
      }, [])

    useEffect(() => {
        if (imageData != '') {
            setImage(Buffer.from(imageData.img.data, 'base64').toString('base64'))
        }
    },[imageData])

    useEffect(() => {
        console.log("here")
        if (responseState.length != 0) {
            setImageData(responseState[0])
            setImages(responseState)
            console.log(images)
        }
    }, [responseState])

    async function getImage() {
        var response = await axios({
            url: `http://localhost:5000/API/exhibitions/get-image/${encodeURI(params.id)}`,
            method: 'GET',
            responseType: 'stream'
        });
        setResponseState(response.data)
    }

    async function getArtist() {
        var response = await axios({
            url: `http://localhost:5000/API/artists/get-artist/${encodeURI(params.id)}`,
            method: 'GET',
            responseType: 'stream'
        });
        setArtist(response.data[0])
    }

    return (
        <div className="body">
            <h1>{artist.name}</h1>
            <div className="float-left">
                <img className="switch-image" src={`data:image/png;base64,${image}`}></img>
            </div>
            <div className="">
                <p>{artist.desc}</p>
            </div>
        </div>
    )
}

export default ArtistDetail