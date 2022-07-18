import React, {useEffect, useState} from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import Icon from '../assets/Icon.png'
import IconWhite from '../assets/IconWhite.png'

function SideNav() {
    const navigate = useNavigate()
    const params = useLocation()
    const[nav, setNav] = useState(<div></div>)

    useEffect(() => {
        if (params.pathname.toLowerCase() === "/current" || params.pathname.toLowerCase() === "/upcoming") {
            setNav(<div>
                <div className="float-left">
                <Link to="/current" style={{ padding: 5 }}>
                    <div className="icon">
                        <img src={IconWhite} alt="Home Icon"></img>
                    </div>
                </Link>
            </div>
            <div>
                <div className="navtext">
                <button className="btn bg-transparent shadow-none hov" onClick={() => navigate("/current")}>
                    <div className="navtext white">
                        Current
                    </div>
                </button>
                <button className="btn bg-transparent shadow-none hov" onClick={() => navigate("/upcoming")}>
                    <div className="navtext white">
                        Upcoming
                    </div>
                </button>
                </div>
            </div></div>)
        } else {
            setNav(<div>
                <div className="float-left">
                <Link to="/current" style={{ padding: 5 }}>
                    <div className="icon">
                        <img src={Icon} alt="Home Icon"></img>
                    </div>
                </Link>
            </div>
                <div>
                <div className="navtext">
                <button className="btn bg-transparent shadow-none hov" onClick={() => navigate("/exhibition/current")}>
                    <div className="navtext">
                        Current
                    </div>
                </button>
                <button className="btn bg-transparent shadow-none hov" onClick={() => navigate("/exhibition/upcoming")}>
                    <div className="navtext ">
                        Upcoming
                    </div>
                </button>
                <button className="btn bg-transparent shadow-none hov" onClick={() => navigate("/exhibition/archive")}>
                    <div className="navtext ">
                        Archive
                    </div>
                </button>
                </div>
            </div></div>)
        }
    }, [params.pathname])

    return(nav)
}

export default SideNav