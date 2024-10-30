// Header.jsx
import React, {useState} from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 임포트
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons'; // 필요한 아이콘 import


function Header() {
    const [hover, setHover] = useState(false);

    return (
        <header className="Header">
            <nav className = "HeaderNav">
                <div className = "logo">
                    <Link to = "/"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                        <FontAwesomeIcon icon={faFilm} color={hover ? "#8B0000": "red"} size = "2x"/>
                    </Link>
                </div>
                <div className = "menu">
                    <ul className="HeaderNav-list">
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/popular">대체 콘텐츠</Link></li>
                        <li><Link to="/search">찾아보기</Link></li>
                        <li><Link to="/wishlist">내가 찜한 리스트</Link></li>
                    </ul>
                </div>

            </nav>
        </header>
    );
}

export default Header;
