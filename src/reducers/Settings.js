export default (state = {}, action) => {
    switch (action.type) {
     case 'GET_SEARCH':
      return {
       search: action.payload,
       query: action.query
      }
     default:
      return state
    }
};