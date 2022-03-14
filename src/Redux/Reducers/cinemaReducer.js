import * as ActionType from "./../Constants/constant";

let initialState = {
  lichChieuPhim: {},
  listCumRap: []
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_THONG_TIN_LICH_CHIEU_PHIM:
        state.lichChieuPhim = action.lichChieuPhim;
        return { ...state}
    case ActionType.GET_THONG_TIN_CUM_RAP_THEO_HE_THONG:
      state.listCumRap = [...state.listCumRap, action.listCumRap];
      return { ...state}

    default:
      return { ...state };
  }
};

export default cinemaReducer;