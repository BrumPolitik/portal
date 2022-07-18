import React, {useState, useEffect} from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import SideNav from "../../sharedcomponents/sidenav";
import Heading from "../../sharedcomponents/header"

global.Buffer = global.Buffer || require('buffer').Buffer

function Home() {

    return (
        <div>
            <Heading />
            <div className='float-left sidenav-home'>
                <SideNav />
            </div>
        </div>
    );
};

export default Home;