import React from "react";
import PropTypes from 'prop-types';
import './bannercomponent.css';

const BannerComponent = ({movie}) => {
    if (!movie) {
        return null;
    }

    const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    return (
        <div className="banner" style={{ backgroundImage: `url(${backdropUrl})` }}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <button className="play-btn title-btn">재생</button>
            <button className="info-btn title-btn">상세 정보</button>
        </div>
    )
}// PropTypes를 사용하여 props의 타입 검사를 수행
BannerComponent.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
    }).isRequired,
};


export default BannerComponent;