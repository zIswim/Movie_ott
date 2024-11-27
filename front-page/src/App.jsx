import React from 'react';
import Header from "./react/Header";
import Home from "./views/Home";

import {Routes, Route} from "react-router-dom";
import Popular from "./views/Popular";
import Search from "./views/Search";
import Wishlist from "./views/Wishlist";
import SignIn from "./react/SignIn";
import ProtectedRoute   from "./util/ProtectedRoute";


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
                {/*로그인 라우팅*/}
                <Route path = "/signin" element={<SignIn/>}></Route>

                {/* 보호된 경로 */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/popular"
                    element={
                        <ProtectedRoute>
                            <Popular />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <ProtectedRoute>
                            <Search />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/wishlist"
                    element={
                        <ProtectedRoute>
                            <Wishlist />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </>
    )
}

export default App;