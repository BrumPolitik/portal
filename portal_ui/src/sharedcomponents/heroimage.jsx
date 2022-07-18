import React, {useState, useEffect} from "react";
import axios from "axios";
import { Outlet, useLocation } from "react-router-dom";

global.Buffer = global.Buffer || require('buffer').Buffer

function HeroImage() {

    const [heroImage, setHeroImage] = useState('')
    const [responseState, setResponseState] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const params = useLocation()

    useEffect(() => {

        if (params.pathname.toLowerCase() === "/current") {
            setImageUrl(`http://localhost:5000/API/exhibitions/get-current`)
        } else {
            setImageUrl(`http://localhost:5000/API/exhibitions/get-upcoming`)
        }
    }, [params.pathname])

    useEffect(() => {
        if (imageUrl != '') {
            getImage()
        }
    },[imageUrl])

    useEffect(() => {
        console.log(responseState)
        if (responseState != '') {
            setHeroImage(Buffer.from(responseState.img.data, 'base64').toString('base64'))
        }
    },[responseState])

    useEffect(() => {
        document.getElementById('back').style.backgroundImage = `url("data:image/png;base64,${heroImage}")`
    }, [heroImage])
    
    const getUrl = () => {
        setImageUrl('http://localhost:5000/API/exhibitions/get-current')
    }

    async function getImage() {
        var response = await axios({
            url: imageUrl,
            method: 'GET',
            responseType: 'stream'
        });
        setResponseState(response.data[0])
    }

    return (
        <div id='back' style={{
            backgroundImage: <img src={`data:image/png;base64,${heroImage}`}></img>,
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
            backgroundPosition: "center",
            minHeight: "100%",
        }} className="heroimage">
            <div className="body">
                <Outlet />
            </div>
        </div>
    )
}
export default HeroImage