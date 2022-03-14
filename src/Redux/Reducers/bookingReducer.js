import * as ActionType from "./../Constants/constant";

let initialState = {
  listSeat: [],
  danhSachPhongVe: {},
  loadingPhongVe: true,
};


const bookingReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GET_DANH_SACH_PHONG_VE:
        state.danhSachPhongVe = action.danhSachPhongVe
        state.loadingPhongVe  = action.loadingPhongVe
        return { ...state };

    case ActionType.RESET_LOAD_DANH_SACH_PHONG_VE:
        state.loadingPhongVe = action.loadingPhongVe
        return { ...state };

    case ActionType.GHE_DANG_CHON:
        if(state.listSeat.length > 0){
          let viTri = state.listSeat.findIndex(item => item.maGhe === action.value)
          if(viTri === -1){
            state.listSeat = [...state.listSeat,action.value];
          }else {
            state.listSeat.splice(viTri, 1);
            state.listSeat = [...state.listSeat];
          }
        }else {
        state.listSeat = [...state.listSeat, action.value];
      }
      return {...state}

    case ActionType.RESET_DANH_SACH_GHE:
      state.listSeat = []
      return {...state}

    default:
      return { ...state };
  }
};

export default bookingReducer;
