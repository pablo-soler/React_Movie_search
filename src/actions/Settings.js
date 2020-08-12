import axios from 'axios';

export const getSearch = (query) => dispatch => {  
    query && axios.get('https://api.themoviedb.org/3/search/movie?api_key=21fcdb69beae2a4453d5afc194fb0c6f&query=' + query)
    .then(res => {
        dispatch({
            type: 'GET_SEARCH',
            payload: res.data,
            query: query
        })
    })
};