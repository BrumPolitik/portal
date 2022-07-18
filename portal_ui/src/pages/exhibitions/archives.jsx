import React, { useEffect, useState } from "react";
import axios from "axios";
import ArchiveCard from "../../sharedcomponents/archivecard";
import ExhibCard from "../../sharedcomponents/exhibcard";

function Archives() {
    const [responseState, setResponseState] = useState('')
    const [archiveList, setArchiveList] = useState(<div></div>)
    const [currentDetails, setCurrentDetails] = useState('')
    const [currentImg, setCurrentImg] = useState('')

    useEffect(() => {
        getImages()
    }, [])

    useEffect(() => {
        console.log(responseState)
        if (responseState != '') {
            setArchiveList(responseState.map((exhibit, k) => <ArchiveCard onClick={test(exhibit)} exhibit={exhibit} key={k} />))
            setCurrentDetails(responseState[0])
        }
    },[responseState])

    function test(exhibit) {
        console.log("here")
        setCurrentDetails(exhibit)
    }

    useEffect(() => {
        if (currentDetails != '') {
            setCurrentImg(Buffer.from(currentDetails.img.data, 'base64').toString('base64'))
        }
    },[currentDetails])

    const changeSelected = (value) => {
        console.log(value)
    }

    async function getImages() {
        var response = await axios({
            url: 'http://localhost:5000/API/exhibitions/get-images',
            method: 'GET',
            responseType: 'stream'
        });
        setResponseState(response.data)
    }

    return (
        <div>
            <h1>Archives</h1>
            {archiveList}
            <div className="float-right">
                <img className="" src={`data:image/png;base64,${currentImg}`}></img>
                <h5>{currentDetails.name}</h5>
            </div>
        </div>
    )
}

export default Archives