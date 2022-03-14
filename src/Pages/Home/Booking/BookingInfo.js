import React, { Component, Fragment } from 'react'
import Swal from "sweetalert2";
import shortid from "shortid";
import { connect } from "react-redux";
import Axios from "axios";

class BookingInfo extends Component {
  renderTenGhe = () => {
    return this.props.listSeat.map((item, index) => {
      return (
        <span className="pr-1 color-ghe" key={index}>
          {item.tenGhe}
        </span>
      );
    });
  };

  renderGia = () => {
    let thanhTien = 0;
    this.props.listSeat.map((item, index) => {
      thanhTien += item.giaVe;
    });
    return thanhTien;
  };

  getId = () => {
    const id = shortid.generate();
    console.log(id);
    return id;
  };

  handleOnClick = () => {
      if(localStorage.getItem("user")){
        let user = JSON.parse(localStorage.getItem("user"));
        const {history} = this.props;
        let danhSachVe = [];
        this.props.listSeat.map((item,index) => {
            danhSachVe.push({
              maGhe: item.maGhe,
              giaVe: item.giaVe,
            });
        })
        let danhSachGheDat = {
          maLichChieu: this.props.danhSachPhongVe.thongTinPhim.maLichChieu,
          danhSachVe: danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        };
        return Axios({
          method: "POST",
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
          data: danhSachGheDat,
          headers: { Authorization: "Bearer " + user.accessToken },
        }).then(result => {
            Swal.fire({
                icon: "success",
                title: "Đặt vé thành công!",
                timer: 2000
            })
        }).catch(err => {
            console.log(err);
        })
      }else{
        Swal.fire({
            icon: "error",
            title: "Vui lòng đăng nhập trước",
        });
      }
  }

  render() {
    let {danhSachPhongVe} = this.props;
    // console.log(this.props.listSeat);
    
    return (
      <Fragment key={this.getId()}>
        <div className="text-center py-4">
          <h1 className="money">{this.renderGia()} VND</h1>
        </div>
        <hr />
        <div className="booking-tiket-detail">
          <p className="movie-name ">
            <span className="age px-3 py-1 mr-2">P</span>
            {danhSachPhongVe.thongTinPhim.tenPhim}
          </p>
          <p> {danhSachPhongVe.thongTinPhim.tenCumRap}</p>
          <p>
            <span>
              {`${danhSachPhongVe.thongTinPhim.ngayChieu} - ${danhSachPhongVe.thongTinPhim.gioChieu} -
                      ${danhSachPhongVe.thongTinPhim.tenRap}`}
            </span>
          </p>
          <hr />
          <p className="color-ghe py-3">Ghế: {this.renderTenGhe()}</p>
          <hr />
        </div>
        {this.props.listSeat.length > 0 ? (
          <button
            className="booking-btn-buy btn btn-success py-3"
            onClick={this.handleOnClick}
          >
            ĐẶT VÉ
          </button>
        ) : (
          <button className="booking-btn-buy btn btn-success py-3" disabled>
            ĐẶT VÉ
          </button>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
    return {
        listSeat: state.bookingReducer.listSeat
    }
}

export default connect(mapStateToProps, null)(BookingInfo);