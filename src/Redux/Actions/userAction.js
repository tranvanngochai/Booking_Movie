import axios from "axios";
import * as ActionType from "./../Constants/constant";
import Swal from "sweetalert2";

export const actLoginNguoiDung = (user) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    }).then((result) => {
        dispatch({
          type: ActionType.LOGIN_NGUOI_DUNG,
          user: result.data,
        });
        localStorage.setItem("user", JSON.stringify(result.data));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
          text: "",
          timer: 2000,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        Swal.fire({
          icon: "error",
          title: "Đăng nhập thất bại",
          text: error.response.data,
          timer: 3000,
        });
      });
  };
};

export const actSetUserLogin = (user) => {
  return dispatch => {
    dispatch({
      type: ActionType.SET_USER_LOGIN,
      user: user
    })
  }
}

export const actLoginAdmin = (user, history) => {
  axios({
    method: "POST",
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    data: user,
  })
  .then(result => {
    if(result.data.maLoaiNguoiDung === "QuanTri"){
      localStorage.setItem("UserAdmin", JSON.stringify(result.data));
      history.push("/dashboard");
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công",
        text: "",
        timer: 2000,
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Tài khoản không có quyền truy cập!",
        timer: 4000,
      });
    }
  }).catch(err => {
    Swal.fire({
      icon: "error",
      title: "Đăng nhập thất bại",
      text: err.response.data,
      timer: 3000,
    });
  })
}


export const actGetListUser = () => {
  return dispatch => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05",
    }).then(result => {
      dispatch({
        type: ActionType.GET_LIST_USER,
        listUser: result.data,
      });
    }).catch(err => {
      console.log(err);
    })
  }
}

export const actGetInfoUser = taiKhoan => {
  return dispatch => {
    axios({
      method: "POST",
      url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: taiKhoan,
    })
    .then(result => {
        dispatch({
          type: ActionType.GET_INFO_USER,
          infoUser: result.data,
          loadingInfo: false,
        });
        // console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export const actResetInfoLoad = (stateLoad) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.RESET_LOAD_INFO_USER,
      loadingInfo: stateLoad,
    });
  };
};