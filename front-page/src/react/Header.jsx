// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 임포트
import '../App.css';

function Header() {
    return (
        <header className="Header">
            <Link to="/">홈</Link>
            &nbsp;&nbsp;
            <Link to="/popular">대체 콘텐츠</Link>
            &nbsp;&nbsp;
            <Link to="/search">찾아보기</Link>
            &nbsp;&nbsp;
            <Link to="/wishlist">내가 찜한 리스트</Link>
            &nbsp;&nbsp;
            <hr />
        </header>
    );
}

export default Header;
