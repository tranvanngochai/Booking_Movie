import React, { Component } from "react";
import {connect} from "react-redux"
import * as actionCinema from "../../Redux/Actions/cinemaAction";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";


class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: "",
      tenPhim: "",
      chonPhim: false,
      maRap: "",
      tenRap: "",
      chonRap: false,
      ngayXem: "",
      chonNgay: false,
      maLichChieu: "",
      gioChieu: "",
      chonXuatChieu: false
    };
  }

  handleOnClick = event => {
    switch (event.target.name) {
      case "phim":
        if (!this.state.chonPhim) {
          this.props.getThongTinLichChieuPhim(event.target.value);
          this.setState({
            maPhim: event.target.value,
            chonPhim: true,
            tenPhim: event.target.innerHTML
          });
        }

        if (this.state.chonPhim) {
          this.props.getThongTinLichChieuPhim(event.target.value);
          this.setState({
            maPhim: event.target.value,
            chonPhim: true,
            tenPhim: event.target.innerHTML,
            maRap: "",
            tenRap: "",
            chonRap: false,
            ngayXem: "",
            chonNgay: false,
            xuatChieu: {
              maLichChieu: "",
              gioChieu: ""
            },
            chonXuatChieu: false
          });
        }
        break;

      case "rap":
        if (this.state.chonPhim && !this.state.chonRap) {
          this.setState({
            tenRap: event.target.innerHTML,
            maRap: event.target.value,
            chonRap: true
          });
        }

        if (this.state.chonPhim && this.state.chonRap) {
          this.setState({
            tenRap: event.target.innerHTML,
            maRap: event.target.value,
            chonRap: true,
            ngayXem: "",
            chonNgay: false,
            xuatChieu: {
              maLichChieu: "",
              gioChieu: ""
            },
            chonXuatChieu: false
          });
        }
        break;

      case "ngayChieu":
        if (this.state.chonRap && !this.state.chonNgay) {
          this.setState({
            ngayXem: event.target.value,
            chonNgay: true
          });
        }

        if (this.state.chonRap && this.state.chonNgay) {
          this.setState({
            ngayXem: event.target.value,
            chonNgay: true,
            xuatChieu: {
              maLichChieu: "",
              gioChieu: ""
            },
            chonXuatChieu: false
          });
        }
        break;

      case "gioChieu":
        if (this.state.chonNgay) {
          this.setState({
            maLichChieu: event.target.value,
            gioChieu: event.target.innerHTML,
            chonXuatChieu: true
          });
        }
        break;

        case "datVe": 
          if(localStorage.getItem("user")){
          const {history} = this.props;
          console.log(history);
          if (history) 
          {
            history.push(`/booking/${this.state.maLichChieu}`);
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Vui lòng đăng nhập trước",
          });
        }
        break;


      default:
        break;
    }
  };

  renderMovie = () => {
    return this.props.listMovie.map((movie, index) => {
      return (
        <button
          key={index}
          value={movie.maPhim}
          className="dropdown-item"
          name="phim"
          onClick={this.handleOnClick}
        >
          {movie.tenPhim}
        </button>
      );
    });
  };

  renderTheater = () => {
    let { lichChieuPhim } = this.props;
    if (this.state.chonPhim && lichChieuPhim.heThongRapChieu) {
      return lichChieuPhim.heThongRapChieu.map((heThongRapChieu, index) => {
        return heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          return (
            <button
              key={index}
              value={cumRapChieu.maCumRap}
              className="dropdown-item"
              onClick={this.handleOnClick}
              name="rap"
            >
              {cumRapChieu.tenCumRap}
            </button>
          );
        });
      });
    } else {
      return (
        <button value="" className="dropdown-item" disabled>
          Vui lòng chọn phim
        </button>
      );
    }
  };

  renderNgayChieu = () => {
    let {lichChieuPhim} = this.props;
    let mangNgayChieu = [];
    if (
      this.state.chonRap &&
      this.state.chonPhim &&
      lichChieuPhim.heThongRapChieu
    ) {
      lichChieuPhim.heThongRapChieu.map((heThongRapChieu, index) => {
        heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          cumRapChieu.lichChieuPhim.map((lichChieuPhim, index) => {
            let day = new Date(
              lichChieuPhim.ngayChieuGioChieu
            ).toLocaleDateString();
            const found = mangNgayChieu.find(ngay => ngay === day);
            if (found) {
            } else {
              mangNgayChieu.push(day);
            }
          });
        });
      });
      return mangNgayChieu.map((ngay, index) => {
        return (
          <button
            key={index}
            value={ngay}
            className="dropdown-item"
            onClick={this.handleOnClick}
            name="ngayChieu"
          >
            {ngay}
          </button>
        );
      });
    } else {
      return (
        <button value="" className="dropdown-item" disabled>
          Vui lòng chọn phim và rạp
        </button>
      );
    }
  }

  renderTime = () => {
    let { lichChieuPhim } = this.props;
    let mangGioChieu = [];
    if (this.state.chonPhim && this.state.chonRap && this.state.chonNgay) {
      lichChieuPhim.heThongRapChieu.map((heThongRapChieu, index) => {
        heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          if (cumRapChieu.maCumRap === this.state.maRap) {
            cumRapChieu.lichChieuPhim.map((lichChieuPhim, index) => {
              let day = new Date(
                lichChieuPhim.ngayChieuGioChieu
              ).toLocaleDateString();
              let time = new Date(
                lichChieuPhim.ngayChieuGioChieu
              ).toLocaleTimeString();

              if (this.state.ngayXem === day) {
                mangGioChieu.push({
                  maLichChieu: lichChieuPhim.maLichChieu,
                  gioChieu: time
                });
              } else {
              }
            });
          }
        });
      });

      if (mangGioChieu.length > 0) {
        return mangGioChieu.map((item, index) => {
          return (
            <button
              key={index}
              value={item.maLichChieu}
              className="dropdown-item"
              onClick={this.handleOnClick}
              name="gioChieu"
            >
              {item.gioChieu}
            </button>
          );
        });
      } else {
        return (
          <button value="" className="dropdown-item" name="gioChieu" disabled>
            Không có xuất chiếu
          </button>
        );
      }
    } else {
      return (
        <button value="" className="dropdown-item" disabled>
          Vui lòng chọn phim, rạp và ngày xem
        </button>
      );
    }
  }



  render() {
    return (
      <section className="order row d-flex container justify-content-center align-items-center">
        <div className="w30p dropdown widthByPercent ">
          <button
            className="rounded-0 selectMenu btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.tenPhim === "" ? `Phim` : this.state.tenPhim}
          </button>
          <div className="dropdown-menu" aria-labelledby>
            {this.renderMovie()}
          </div>
        </div>
        <div className="dropdown smallBlock widthByPercent ">
          <button
            className="rounded-0 selectMenu btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.tenRap === "" ? `Rạp` : this.state.tenRap}
          </button>
          <div className="dropdown-menu" aria-labelledby>
            {this.renderTheater()}
          </div>
        </div>
        <div className="dropdown smallBlock widthByPercent ">
          <button
            className="rounded-0 selectMenu btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.ngayXem === "" ? `Ngày xem` : this.state.ngayXem}
          </button>
          <div className="dropdown-menu" aria-labelledby>
            {this.renderNgayChieu()}
          </div>
        </div>
        <div className="dropdown smallBlock widthByPercent ">
          <button
            className="rounded-0 selectMenu btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.gioChieu === "" ? `Xuất chiếu` : this.state.gioChieu}
          </button>
          <div className="dropdown-menu" aria-labelledby>
            {this.renderTime()}
          </div>
        </div>
        <div className="smallBlock">
          {this.state.chonPhim &&
          this.state.chonRap &&
          this.state.chonNgay &&
          this.state.chonXuatChieu ? (
            <button
              className="btn btn-success rounded-0"
              id="btnBuy"
              type="button"
              name="datVe"
              onClick={this.handleOnClick}
            >
              Mua vé ngay
            </button>
          ) : (
            <button
              className="btn btn-success rounded-0"
              id="btnBuy"
              type="button"
              disabled
            >
              Mua vé ngay
            </button>
          )}
        </div>
      </section>
    );
  }
}


const mapStateToProps = state => {
  return {
    listMovie: state.filmReducer.listMovie,
    lichChieuPhim: state.cinemaReducer.lichChieuPhim
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // getThongTinCumRapTheoHeThong: id => {
    //   dispatch(actionCinema.actGetThongTinCumRapTheoHeThong(id))
    // },
    getThongTinLichChieuPhim: id =>{
      dispatch(actionCinema.actGetThongTinLichChieuPhim(id))
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Order));
