import React, {useState, useEffect} from "react";

const ArchiveCard = (props) => {
    const [exhibit, setExhibit] =  useState(props.exhibit) 

    return(
        <div className="archive-container">
            <div className="exhibtext">
                <h5>{exhibit.name}</h5>
                <h5>{exhibit.desc}</h5>
            </div>
        </div>
    )
}

export default ArchiveCard