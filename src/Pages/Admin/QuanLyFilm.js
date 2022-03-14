import React, { Component } from 'react'
import MaterialTable from "material-table";
import Axios from "axios";
import Swal from "sweetalert2";
import * as action from "./../../Redux/Actions/filmAction";
import { connect } from "react-redux";


class QuanLyFilm extends Component {
    constructor(props) {
    super(props);
    this.state = {
      columns: [
        // { title: "Mã phim", field: "maPhim", editable: "never" },
        {
          title: "Tên phim",
          field: "tenPhim",
        },
        {
          title: "Bí danh",
          field: "biDanh",
        },
        {
          title: "Trailer",
          field: "trailer",
        //   cellStyle: {
        //     maxWidth: 300,
        //     overflow: "hidden",
        //     whiteSpace: "nowrap",
        //     textOverflow: "ellipsis",
        //   },
        },
        {
          title: "Hình ảnh",
          field: "hinhAnh",
          render: (rowData) => (
            <img src={rowData.hinhAnh} style={{ width: 150 }} />
          ),
        },
        {
          title: "Mô tả",
          field: "moTa",
          cellStyle: {
            width: "calc((200% - 0px) / 8)",
          },
        },
        // {
        //   title: "Mã nhóm",
        //   field: "maNhom",
        //     lookup: {
        //       GP01: "GP01",
        //       GP02: "GP02",
        //       GP03: "GP03",
        //       GP04: "GP04",
        //       GP05: "GP05",
        //       GP06: "GP06",
        //       GP07: "GP07",
        //       GP08: "GP08",
        //       GP09: "GP09",
        //     },
        // },
        {
          title: "Ngày khởi chiếu",
          field: "ngayKhoiChieu",
          render: (rowData) => (
            <>{new Date(rowData.ngayKhoiChieu).toLocaleDateString("en-GB")}</>
          ),
            type: "date",
          //   cellStyle: {
          //     width: "calc((120% - 0px) / 9)",
          //   },
        },
        // {
        //   title: "Giờ khởi chiếu",
        //   field: "gioKhoiChieu",
        //   render: (rowData) => (
        //     <>{new Date(rowData.ngayKhoiChieu).toLocaleTimeString("en-GB")}</>
        //   ),
        //   type: "date",
        //   cellStyle: {
        //     width: "calc((110% - 0px) / 10)",
        //   },
        // },
        {
          title: "Đánh giá",
          field: "danhGia",
        },
      ],
      // data: [],
    };
  }

  // getListFilm = () => {
  //     return Axios({
  //       method: "GET",
  //       url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05",
  //     }).then(result => {
  //       this.setState({
  //           data: [...result.data]
  //       })
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }

  componentDidMount(){
      this.props.getListMovie()
  }

    render() {
    return (
      <MaterialTable
        title="Danh Sách Phim"
        columns={this.state.columns}
        data={this.props.listMovie}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
        detailPanel={(rowData) => {
            // console.log(rowData)
          return (
            <iframe
              width="100%"
              height="550"
              src={rowData.trailer}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          );
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
                let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
                let date = new Date(newData.ngayKhoiChieu).toLocaleDateString(
                  "en-GB"
                );
                let movie = {
                  maPhim: "0",
                  tenPhim: newData.tenPhim,
                  biDanh: newData.biDanh,
                  trailer: newData.trailer,
                  hinhAnh: newData.hinhAnh,
                  moTa: newData.moTa,
                  maNhom: "GP05",
                  ngayKhoiChieu: date,
                  danhGia: newData.danhGia,
                };    
              setTimeout(() => {
                resolve();
                // console.log(newData);
                return Axios({
                  method: "POST",
                  url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
                  data: movie,
                  headers: { Authorization: "Bearer " + userAD.accessToken },
                }).then(result => {
                    Swal.fire({
                      icon: "success",
                      title: "Thêm thành công!",
                      text: "",
                      timer: 2000,
                    });
                    this.props.getListMovie();
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
                let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
                let date = new Date(newData.ngayKhoiChieu).toLocaleDateString(
                  "en-GB"
                );
                let movie = {
                  maPhim: newData.maPhim,
                  tenPhim: newData.tenPhim,
                  biDanh: newData.biDanh,
                  trailer: newData.trailer,
                  hinhAnh: newData.hinhAnh,
                  moTa: newData.moTa,
                  maNhom: "GP05",
                  ngayKhoiChieu: date,
                  danhGia: newData.danhGia,
                };
              setTimeout(() => {
                resolve();
                return Axios({
                  method: "POST",
                  url:
                    "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
                  data: movie,
                  headers: { Authorization: "Bearer " + userAD.accessToken },
                }).then(result => {
                    Swal.fire({
                        icon: "success",
                        title: "Cập nhật thành công!",
                        text: "",
                        timer: 2000,
                    });
                    this.props.getListMovie();
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
                let userAD = JSON.parse(localStorage.getItem("UserAdmin"));
              setTimeout(() => {
                resolve();
                return Axios({
                  method: "DELETE",
                  url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${oldData.maPhim}`,
                  headers: { Authorization: "Bearer " + userAD.accessToken },
                }).then((result) => {
                    Swal.fire({
                      icon: "success",
                      title: "Xóa thành công!",
                      text: "",
                      timer: 2000,
                    });
                    this.props.getListMovie();
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
    listMovie: state.filmReducer.listMovie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyFilm)