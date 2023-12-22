import Axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const movieApiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2RlODZmMTgxOTI0ZTA5MWY2ZTY2NjU3ZjY0OTk2MCIsInN1YiI6IjY1NGFlYWQyMjg2NmZhMDBjNDI1ZjA1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qJFQuWIlTxcUoi_5A8fSBG78oZ4qSXaIte7PUMEp1TE';

const getNowPlayingMovies = async() => {
    const movie = await Axios.get(movieBaseUrl+`/movie/now_playing`, { //process error ref. https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
        headers: { Authorization: `Bearer `+movieApiToken }
    });

    return movie.data.results;
}

const getTrendingMovies = async() => {
    const movie = await Axios.get(movieBaseUrl+`/trending/all/week`, { //process error ref. https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
        headers: { Authorization: `Bearer `+movieApiToken }
    });

    return movie.data.results;
}

const getUpcominggMovies = async() => {
    const movie = await Axios.get(movieBaseUrl+`/movie/upcoming`, { //process error ref. https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
        headers: { Authorization: `Bearer `+movieApiToken }
    });

    return movie.data.results;
}

const getMovieByGenreId = async(id) => {
    const movie = await Axios.get(movieBaseUrl+`/discover/movie?with_genres=`+id, { //process error ref. https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
        headers: { Authorization: `Bearer `+movieApiToken }
    });

    return movie.data.results;
}

export default {
    getTrendingMovies,
    getNowPlayingMovies,
    getUpcominggMovies,
    getMovieByGenreId
}