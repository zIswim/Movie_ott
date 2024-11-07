import React from 'react';
import Header from "./react/Header";
import Home from "./views/Home";

import {Routes, Route} from "react-router-dom";
import Popular from "./views/Popular";
import Search from "./views/Search";
import Wishlist from "./views/Wishlist";


// // 인증 여부 확인
// const isAuthenticated = () => localStorage.getItem("isAuthenticated");
//
// // PrivateRoute 컴포넌트 생성
// const PrivateRoute = ({children}) => {
//     return isAuthenticated() ? children : <Navigate to ="/signin" replace />;
// }

function App() {
    return (
        <>
            <Header />
            <Routes>
                {/*// 메뉴 라우팅*/}
                <Route path = "/" element={<Home/>}></Route>
                <Route path = "/popular" element={<Popular/>}></Route>
                <Route path = "/search" element={<Search/>}></Route>
                <Route path = "/wishlist" element={<Wishlist/>}></Route>
                {/*로그인 라우팅*/}
                {/*<Routes path = "/signin"*/}
                {/*    element={isAuthenticated() ? <Navigate to="/" replace/> : <SignIn/>} />*/}
            </Routes>
        </>
    )
}

export default App;