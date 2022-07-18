import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import SideNav from "../../sharedcomponents/sidenav";
import Heading from "../../sharedcomponents/header";

function Exhib() {

    return (
      <div>
        <Heading />
        <div className='float-left sidenav'>
				  <SideNav />
        </div>
        <div>
            <h1>Welcome to the exhibitions</h1>
            <Outlet />
        </div>
      </div>
    )
}

export default Exhib    