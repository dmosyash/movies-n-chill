// API_KEY from themoviedb site.
const API_KEY = "2ad3bd185c74b055ce8740e15c06d03c";

//Base url of APIs of themoviedb.
const baseUrl = "https://api.themoviedb.org/3/";

//Base url of images of themoviedb.
export const imageBaseUrl = "http://image.tmdb.org/t/p/";

//function to call any 'get' API 
const getAPIcall = (apiUrl, params) => {
    params.api_key = API_KEY;
    Object.keys(params).forEach(key => apiUrl.searchParams.append(key, params[key]))
    return fetch(apiUrl)
        .then(res => res.json());
}

export const getPopularMovies = (params = {}) => {
    let apiUrl = new URL(`${baseUrl}movie/popular`);
    return getAPIcall(apiUrl, params);
}

export const getSearchResults = (params = {}) => {
    let apiUrl = new URL(`${baseUrl}search/movie`);
    return getAPIcall(apiUrl, params);
}

export const getMovieDetails = (id, params = {}) => {
    let apiUrl = new URL(`${baseUrl}movie/${id}`);
    return getAPIcall(apiUrl, params);
}

export const getMovieCast = (id, params = {}) => {
    let apiUrl = new URL(`${baseUrl}movie/${id}/credits`);
    return getAPIcall(apiUrl, params);
}

export const getCastDetails = (id, params = {}) => {
    let apiUrl = new URL(`${baseUrl}person/${id}`);
    return getAPIcall(apiUrl, params);
}

export const getCastMovies = (id, params = {}) => {
    let apiUrl = new URL(`${baseUrl}person/${id}/movie_credits`);
    return getAPIcall(apiUrl, params);
}

export const getSimilarMovies = (id, params = {}) => {
    let apiUrl = new URL(`${baseUrl}movie/${id}/similar`);
    return getAPIcall(apiUrl, params);
}