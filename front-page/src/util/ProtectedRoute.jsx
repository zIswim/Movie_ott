import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // 로그인 상태가 아니라면 로그인 페이지로 리다이렉트
    if (!isLoggedIn) {
        return <Navigate to="/signin" replace />;
    }

    // 로그인 상태라면 자식 컴포넌트 렌더링
    return children;
};

export default ProtectedRoute;
