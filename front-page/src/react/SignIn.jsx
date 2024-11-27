import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
    const [isLoginMode, setIsLoginMode] = useState(true); // 로그인/회원가입 모드 상태
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false); // Remember Me 상태

    const navigate = useNavigate();

    // 페이지 로드 시 localStorage에서 값 불러오기
    useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    // 로그인/회원가입 모드 전환
    const toggleMode = () => {
        setIsLoginMode((prev) => !prev);
    };

    // 로그인 처리
    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        if (rememberMe) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
        }

        // 로그인 성공 시 상태 저장
        localStorage.setItem("isLoggedIn", "true");
        alert("Logged in successfully");
        navigate("/"); // 홈 화면으로 이동
    };


    // 회원가입 처리
    const handleRegister = (e) => {
        e.preventDefault();
        if (!email || !password || password !== confirmPassword) {
            alert("Please check your inputs");
            return;
        }

        alert("Registered successfully");
        toggleMode(); // 회원가입 후 로그인 화면으로 전환
    };

    return (
        <div className="signin-container">
            <div className={`form-container ${isLoginMode ? "login" : "register"}`}>
                {isLoginMode ? (
                    // 로그인 폼
                    <form onSubmit={handleLogin} className="form">
                        <h2>Sign In</h2>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <button type="submit">Login</button>
                        <p className="toggle-text">
                            Don't have an account?{" "}
                            <span onClick={toggleMode}>Sign up</span>
                        </p>
                    </form>
                ) : (
                    // 회원가입 폼
                    <form onSubmit={handleRegister} className="form">
                        <h2>Sign Up</h2>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Register</button>
                        <p className="toggle-text">
                            Already have an account?{" "}
                            <span onClick={toggleMode}>Sign in</span>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignIn;
