import * as ActionType from "./../Constants/constant";
import Axios from "axios";

export const actGetListMovieAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05"
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_MOVIES,
          listMovie: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};


export const actGetDetailMovieAPI = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    }).then(result => {
      dispatch({
        type: ActionType.GET_DETAIL_MOVIE,
        movie: result.data,
        loading: false
      });
    })
    .catch(err => {
      console.log(err);
    })
  };
}

export const actResetStateLoad = (stateLoad) => {
  return dispatch => {
    dispatch({
      type: ActionType.RESET_STATE_LOAD_MOVIE,
      loading: stateLoad
    })
  }
}