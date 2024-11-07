import React, { useEffect, useState } from 'react';
import BannerComponent from '../component/Home/BannerComponent'
import MovieRow from '../component/Home/MovieRow'
import {
    fetchFeaturedMovie,
    getURL4GenreMovies,
    getURL4PopularMovies,
    getURL4ReleaseMovies } from "../util/URL"; // 경로에 맞게 수정

const Home = () => {
    const [apiKey] = useState( process.env.REACT_APP_API_KEY || '');
    const [featuredMovie, setFeaturedMovie] = useState(null);
    const [popularMoviesUrl, setPopularMoviesUrl] = useState('');
    const [newReleasesUrl, setNewReleasesUrl] = useState('');
    const [actionMoviesUrl, setActionMoviesUrl] = useState('');

    useEffect(() => {
        setPopularMoviesUrl(getURL4PopularMovies(apiKey));
        setNewReleasesUrl(getURL4ReleaseMovies(apiKey));
        setActionMoviesUrl(getURL4GenreMovies(apiKey, '28'));

        const fetchData = async () => {
            const movie = await fetchFeaturedMovie(apiKey);
            setFeaturedMovie(movie);
        };
        fetchData();
    }, [apiKey]);

    return (
        <div>
            <BannerComponent movie = {featuredMovie}/>

            <MovieRow title = "인기 영화" fetchUrl = {popularMoviesUrl}/>
            <MovieRow title = "최신 영화" fetchUrl = {newReleasesUrl}/>
            <MovieRow title = "액션 영화" fetchUrl = {actionMoviesUrl}/>
        </div>
    )
}

export default Home;
