import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class DatVeDetail extends Component {
    constructor(props) {
    super(props);

    this.state = {
      maHeThongRap: "",
      tenHeThongRap: "",
      chonHeThongRap: false,
      maCumRap: "",
      tenCumRap: "",
      chonCumRap: false,
      ngayXem: "",
      chonNgayXem: false,
      maLichChieu: "",
      gioChieu: "",
      chonXuatChieu: false
    };
  }

  handleOnClick = event => {
    console.log(event.target.name);

    switch (event.target.name) {
      case "heThongRap":
        if (!this.state.chonHeThongRap) {
          this.setState({
            maHeThongRap: event.target.value,
            tenHeThongRap: event.target.innerHTML,
            chonHeThongRap: true
          });
        }
        if (this.state.chonHeThongRap) {
          this.setState({
            maHeThongRap: event.target.value,
            tenHeThongRap: event.target.innerHTML,
            chonHeThongRap: true,
            maCumRap: "",
            tenCumRap: "",
            chonCumRap: false,
            ngayXem: "",
            chonNgayXem: false,
            maLichChieu: "",
            gioChieu: "",
            chonXuatChieu: false
          });
        }
        break;
      case "cumRap":
        
        if (this.state.chonHeThongRap && !this.state.chonCumRap) {
          this.setState(
            {
              maCumRap: event.target.value,
              tenCumRap: event.target.innerHTML,
              chonCumRap: true
            },
            () => {
              console.log(this.state);
            }
          );
        }

        if (this.state.chonHeThongRap && this.state.chonCumRap) {
          this.setState(
            {
              maCumRap: event.target.value,
              tenCumRap: event.target.innerHTML,
              chonCumRap: true,
              ngayXem: "",
              chonNgayXem: false,
              maLichChieu: "",
              gioChieu: "",
              chonXuatChieu: false
            },
            () => {
              console.log(this.state);
            }
          );
        }
        break;

      case "ngayChieu":
        if (this.state.chonCumRap && !this.state.chonNgayXem) {
          this.setState(
            {
              ngayXem: event.target.innerHTML,
              chonNgayXem: true
            },
            () => {
              console.log(this.state);
            }
          );
        }
        if (this.state.chonCumRap && this.state.chonNgayXem) {
          this.setState(
            {
              ngayXem: event.target.innerHTML,
              chonNgayXem: true,
              maLichChieu: "",
              gioChieu: "",
              chonXuatChieu: false
            },
            () => {
              console.log(this.state);
            }
          );
        }
        break;
      case "gioChieu":
        if (this.state.chonNgayXem) {
          this.setState(
            {
              maLichChieu: event.target.value,
              gioChieu: event.target.innerHTML,
              chonXuatChieu: true
            },
            () => {
              console.log(this.state);
            }
          );
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
        break

      default:
        break;
    }
  };

  renderHeThongRap() {
    let { lichChieuPhim } = this.props;
    if (lichChieuPhim) {
      return lichChieuPhim.heThongRapChieu.map((item, index) => {
        return (
          <button
            key={index}
            value={item.maHeThongRap}
            className="dropdown-item"
            name="heThongRap"
            onClick={this.handleOnClick}
          >
            {item.tenHeThongRap}
          </button>
        );
      });
    }
  }

  renderCumRap() {
    let { lichChieuPhim } = this.props;
    if (lichChieuPhim && this.state.chonHeThongRap) {
      return lichChieuPhim.heThongRapChieu.map((heThongRap, index) => {
        if (this.state.maHeThongRap === heThongRap.maHeThongRap) {
          return heThongRap.cumRapChieu.map((item, index) => {
            return (
              <button
                key={index}
                value={item.maCumRap}
                className="dropdown-item"
                onClick={this.handleOnClick}
                name="cumRap"
              >
                {item.tenCumRap}
              </button>
            );
          });
        }
      });
    } else {
      return (
        <button
          value=""
          className="dropdown-item"
          //   onClick={this.handleOnClick}
          name="cumRap"
          disabled
        >
          Vui lòng chọn hệ thống rạp
        </button>
      );
    }
  }

  renderDay = () => {
    let { lichChieuPhim } = this.props;
    let mangNgayChieu = [];
    if (this.state.chonHeThongRap && this.state.chonCumRap && lichChieuPhim) {
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
  };

  renderXuatChieu = () => {
    let { lichChieuPhim } = this.props;
    let mangGioChieu = [];

    if (
      this.state.chonHeThongRap &&
      this.state.chonCumRap &&
      this.state.chonNgayXem
    ) {

      lichChieuPhim.heThongRapChieu.map((heThongRapChieu, index) => {
        heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          if (cumRapChieu.maCumRap === this.state.maCumRap) {
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
  };
  render() {
    return (
      <section className="muave__lichchieu">
        <div className="row justify-content-center align-items-center h-100 container">
          {/* He Thong Rap */}
          <div className="w30p">
            <div className="dropdown">
              <button
                className="rounded-0 selectMenu btn"
                type="button"
                id="dtHeThongRap"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {this.state.tenHeThongRap === ""
                  ? `Hệ thống rạp`
                  : this.state.tenHeThongRap}
              </button>
              <div className="dropdown-menu" aria-labelledby="">
                {this.renderHeThongRap()}
              </div>
            </div>
          </div>

          {/* Danh sach rap */}
          <div className="w30p">
            <div className="dropdown">
              <button
                className="rounded-0 selectMenu btn"
                type="button"
                id="dtCumRapChieu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {this.state.tenCumRap === "" ? `Rạp` : this.state.tenCumRap}
              </button>
              <div className="dropdown-menu" aria-labelledby="">
                {this.renderCumRap()}
              </div>
            </div>
          </div>

          {/*Ngay xem*/}
          <div className="smallBlock">
            <div className="dropdown">
              <button
                className="rounded-0 selectMenu btn"
                type="button"
                id="dtNgayXem"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {this.state.ngayXem === "" ? `Ngày Xem` : this.state.ngayXem}
              </button>
              <div className="dropdown-menu" aria-labelledby="">
                {this.renderDay()}
              </div>
            </div>
          </div>

          {/* Gio xem */}
          <div className="smallBlock">
            <div className="dropdown">
              <button
                className="rounded-0 selectMenu btn"
                type="button"
                id="dtXuatChieu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {this.state.gioChieu === ""
                  ? `Xuất chiếu`
                  : this.state.gioChieu}
              </button>
              <div className="dropdown-menu" aria-labelledby="">
                {this.renderXuatChieu()}
              </div>
            </div>
          </div>
          <div className="smallBlock p-3">
            {this.state.chonHeThongRap &&
            this.state.chonCumRap &&
            this.state.chonNgayXem &&
            this.state.chonXuatChieu ? (
              <button
                className="btn btn-success w-100"
                name="datVe"
                onClick={this.handleOnClick}
              >
                Đặt vé
              </button>
            ) : (
              <button className="btn btn-success w-100 disabled">Đặt vé</button>
            )}
          </div>
        </div>
      </section>
    );
  }
}


export default withRouter(DatVeDetail)