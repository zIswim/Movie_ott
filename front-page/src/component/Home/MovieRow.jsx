import React, {useEffect, useState, useRef} from "react";
import axios from "axios";
import './movierow.css';

const MovieRow = ({title, fetchUrl}) => {
    const [movies, setMovie] = useState([]);
    const scrollRef = useRef(null); // 가로 스크롤 드래그 이벤트, 스크롤 영역의 document에 접근할 수 있도록 선언
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await axios.get(fetchUrl,{
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`}
        });
        setMovie(response.data.results);
    };

    // 위시리스트에 영화 추가
    const handleAddToFavorites = (movie) => {
        if(!favoriteMovies.includes(movie)){
            setFavoriteMovies([...favoriteMovies, movie]);
        }
    };

    const scroll = (direction) => {
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        const currentScroll = scrollRef.current.scrollLeft;

        if(direction === "left"){
            scrollRef.current.scrollLeft = Math.max(0, currentScroll - clientWidth);
        } else if (direction === "right"){
            scrollRef.current.scrollLeft = Math.min(maxScroll, currentScroll + clientWidth);
        }
    }

    useEffect(() => {
        fetchMovies(); // 함수 호출
    }, [fetchMovies, fetchUrl]); // fetchUrl 변경될 때마다 호출

    return (
        // 영화 카테고리
        <div className="movie-category">
            <div className="movie-row">
                <button className="button-left" onClick={() => scroll("left")}>{"<"}</button>
                <div className="movie-container">
                    <div className="movie-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="movie-info" ref={scrollRef}>
                        {movies && movies.map(movie => (
                            <div key={movie.id} className="movie-item">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
                                onClick={() => handleAddToFavorites(movie)} />
                                {/*<h3>{movie.title}</h3>*/}
                            </div>
                        ))}
                    </div>
                </div>
                <button className="button-right" onClick={() => scroll("right")}>{">"}</button>
            </div>
        </div>
    )
}

export default MovieRow;