import React, { Component } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
import Swal from "sweetalert2";
import * as action from "./../../Redux/Actions/userAction";
import { connect } from "react-redux";

class QuanLyUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Tài khoản", field: "taiKhoan" },
        {
          title: "Họ tên",
          field: "hoTen",
        },
        {
          title: "Email",
          field: "email",
        },
        {
          title: "Điện thoại",
          field: "soDt",
        },
        {
          title: "Mật khẩu",
          field: "matKhau",
        },
        {
          title: "Loại người dùng",
          field: "maLoaiNguoiDung",
          lookup: { KhachHang: "Khách hàng", QuanTri: "Quản trị" },
        },
      ],
      // data: [],
    };
  }

  // getListUser = () => {
  //   return Axios({
  //     method: "GET",
  //     url:
  //       "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05",
  //   }).then(result => {
  //       // console.log(result.data);
  //       this.setState({ 
  //           data: [...result.data]
  //       })
  //   }).catch(err => {
  //       console.log(err);
  //   })
  // }

  componentDidMount(){
    this.props.getListUser();
  }

  render() {
    return (
      <MaterialTable
        title="Danh Sách Người Dùng"
        columns={this.state.columns}
        data={this.props.listUser}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise(resolve => {
                let user = {
                    taiKhoan: newData.taiKhoan,
                    hoTen: newData.hoTen,
                    email: newData.email,
                    soDt: newData.soDt,
                    matKhau: newData.matKhau,
                    maLoaiNguoiDung: newData.maLoaiNguoiDung,
                    maNhom: "GP05"
            };
                let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
              setTimeout(() => {
                resolve();
                return Axios({
                  method: "POST",
                  url:
                    "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
                  data: user,
                  headers: { Authorization: "Bearer " + userAD.accessToken },
                }).then(result => {
                    Swal.fire({
                        icon: "success",
                        title: "Thêm thành công!",
                        text: "",
                        timer: 2000,
                    });
                    this.props.getListUser();
                }).catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: "Thêm thất bại!",
                        text: err.response.data,
                        timer: 3000,
                    });
                })
              }, 1000);
            }),

          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                let user = {
                    taiKhoan: newData.taiKhoan,
                    hoTen: newData.hoTen,
                    email: newData.email,
                    soDt: newData.soDt,
                    matKhau: newData.matKhau,
                    maLoaiNguoiDung: newData.maLoaiNguoiDung,
                    maNhom: "GP05",
                };
                let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
              setTimeout(() => {
                resolve();

                return Axios({
                  method: "PUT",
                  url:
                    "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                  data: user,
                  headers: { Authorization: "Bearer " + userAD.accessToken },
                }).then(result => {
                    Swal.fire({
                        icon: "success",
                        title: "Cập nhật thành công!",
                        text: "",
                        timer: 2000,
                    });
                    this.props.getListUser();
                }).catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: "Cập nhật thất bại!",
                        text: err.response.data,
                        timer: 3000,
                    });
                })
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
                resolve();
                return Axios({
                  method: "DELETE",
                  url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${oldData.taiKhoan}`,
                  headers: { Authorization: "Bearer " + userAD.accessToken },
                }).then((result) => {
                    Swal.fire({
                      icon: "success",
                      title: "Xóa thành công!",
                      text: "",
                      timer: 2000,
                    });
                    this.props.getListUser();
                  })
                  .catch((err) => {
                    Swal.fire({
                      icon: "error",
                      title: "Xóa thất bại!",
                      text: err.response.data,
                      timer: 3000,
                    });
                  });
              }, 1000);
            }),
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    listUser: state.userReducer.listUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListUser: () => {
      dispatch(action.actGetListUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyUser)