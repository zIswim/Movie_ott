import React from 'react';
import Header from "./react/Header";
import Home from "./routes/Home";

import {Routes, Route} from "react-router-dom";
import Popular from "./routes/Popular";
import Search from "./routes/Search";
import Wishlist from "./routes/Wishlist";

function App() {
    return (
        <>
            {/*// 메뉴 라우팅*/}
            <Header />
            <Routes>
                <Route path = "/" element={<Home/>}></Route>
                <Route path = "/popular" element={<Popular/>}></Route>
                <Route path = "/search" element={<Search/>}></Route>
                <Route path = "/wishlist" element={<Wishlist/>}></Route>
            </Routes>
        </>
    )
}

export default App;