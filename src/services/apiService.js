const API_KEY = "2ad3bd185c74b055ce8740e15c06d03c";
const baseUrl = "https://api.themoviedb.org/3/";

export const imageBaseUrl = "http://image.tmdb.org/t/p/"

export const getPopularMovies = (params = {}) => {
    let apiUrl = new URL(`${baseUrl}movie/popular`);
    params.api_key = API_KEY;
    Object.keys(params).forEach(key => apiUrl.searchParams.append(key, params[key]))
    return fetch(apiUrl)
        .then(res => res.json());
}

export const getSearchResults = (params = {}) => {
    let apiUrl = new URL(`${baseUrl}search/movie`);
    params.api_key = API_KEY;
    Object.keys(params).forEach(key => apiUrl.searchParams.append(key, params[key]))
    return fetch(apiUrl)
        .then(res => res.json());
}