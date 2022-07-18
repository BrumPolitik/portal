import React from "react";
import { Outlet } from "react-router-dom";
import Heading from "../../sharedcomponents/header";

function Artist() {

    return (
        <div>
            <Heading />
            <h1>Our Wonderful Artists</h1>
            <Outlet />
        </div>
    )
}

export default Artist
