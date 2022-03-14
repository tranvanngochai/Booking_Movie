import * as ActionType from "./../Constants/constant";
import Axios from "axios";

export const actGetDanhSachPhongVe = maLichChieu => {
    return dispatch => {
        return Axios({
          method: "GET",
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        }).then(result =>{
            dispatch({
              type: ActionType.GET_DANH_SACH_PHONG_VE,
              danhSachPhongVe: result.data,
              loadingPhongVe: false,
            });
        }).catch(err => {
            console.log(err);
        })
    }
}

export const actResetLoadDanhSach = (stateLoad) => {
    return dispatch => {
        dispatch({
          type: ActionType.RESET_LOAD_DANH_SACH_PHONG_VE,
          loadingPhongVe: stateLoad,
        });
    }
}

export const actChonGhe = (seat) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.GHE_DANG_CHON,
      value: seat,
    });
  };
};

export const actResetListSeat = () => {
  return (dispatch) => {
    dispatch({
      type: ActionType.RESET_DANH_SACH_GHE,
      value: [],
    });
  };
};