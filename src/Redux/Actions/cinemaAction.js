import * as ActionType from "./../Constants/constant";
import Axios from "axios";

export const actGetThongTinLichChieuPhim = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_THONG_TIN_LICH_CHIEU_PHIM,
          lichChieuPhim: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};


export const actGetThongTinCumRapTheoHeThong = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
    }).then(result => {
      dispatch({
        type: ActionType.GET_THONG_TIN_CUM_RAP_THEO_HE_THONG,
        listCumRap: result.data
      }).catch(err => {
        console.log(err);
      });
    });
  }
}