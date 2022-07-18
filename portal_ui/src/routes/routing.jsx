import React, {useEffect} from "react";
import {Route, Routes, Link, useLocation, useNavigate} from "react-router-dom";
import Home from "../pages/default/home";
import Exhib from "../pages/exhibitions/exhibition";
import Current from "../pages/exhibitions/current";
import Upcoming from "../pages/exhibitions/upcoming";
import Archives from "../pages/exhibitions/archives";
import Artist from "../pages/artists/artist";
import ArtistDetail from "../pages/artists/artistDetails";
import ArtistList from "../pages/artists/artistList";
import AboutUs from "../pages/about/aboutUs";
import Search from "../pages/Search/search";
import HeroImage from "../sharedcomponents/heroimage";

function Routing() {
    return (
        <div>
            <Routes>
                <Route 
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <HeroImage />
                        </React.Suspense>
                    }
                >
                    <Route path="/current" element={<Home />} />
                    <Route path="/upcoming" element={<Home />} />
                </Route>
                <Route 
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <Exhib />
                        </React.Suspense>
                    }
                >
                    <Route path="exhibition/current" element={<Current />} />
                    <Route path="exhibition/upcoming" element={<Upcoming />} />
                    <Route path="exhibition/archive" element={<Archives />} />
                </Route>
                <Route 
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <Artist />
                        </React.Suspense>
                    }
                >
                    <Route path="artist/:id" element={<ArtistDetail />} />
                    <Route path="artists" element={<ArtistList />} />
                </Route>
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/search/:id" element={<Search />} />
            </Routes>
        </div>
    )
}

export default Routing
