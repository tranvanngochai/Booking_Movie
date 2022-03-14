import * as ActionType from "./../Constants/constant";

const initialState = {
  user: {},
  listUser: [],
  infoUser: {},
  loadingInfo: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_NGUOI_DUNG:
      state.user = action.user;
      return { ...state };

    case ActionType.SET_USER_LOGIN:
      state.user = action.user;
      return { ...state };

    case ActionType.GET_LIST_USER:
      state.listUser = action.listUser;
      return { ...state };

    case ActionType.GET_INFO_USER:
      state.infoUser = action.infoUser;
      state.loadingInfo = action.loadingInfo
      return { ...state };
    
    // case ActionType.RESET_LOAD_INFO_USER:
    //   state.loadingInfo = action.loadingInfo
    //   return { ...state };
    
    default:
      return { ...state };
  }
};

export default userReducer;