import * as ActionType from './../Constants/constant'

let initialState = {
    listMovie: [],
    movie: {},
    loading: true
}


const filmReducer = (state = initialState, action) =>{
    switch (action.type) {
      case ActionType.GET_LIST_MOVIES:
        state.listMovie = action.listMovie;
        return { ...state };
      
      case ActionType.GET_DETAIL_MOVIE:
      state.movie = action.movie;
      state.loading = action.loading;
      return { ...state };

      case ActionType.RESET_STATE_LOAD_MOVIE: 
      state.loading = action.loading
      return { ...state };

      default:
        return { ...state };
    }
}

export default filmReducer