import React, { Component } from 'react'
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";
import * as actionBooking from "../../../Redux/Actions/bookingAction"
import { connect } from "react-redux";
import ListSeat from './ListSeat';
import BookingInfo from './BookingInfo';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 300px;
  margin-bottom: 332px;
  z-index: 9900;
`;


const SO_LUONG_GHE_MOT_HANG = 16;
class Booking extends Component {

  componentWillUnmount() {
    this.props.resetLoadDanhSach(true);
  }

  componentDidMount(){
    //   console.log(this.props.match.params.id);
      const maLichChieu = this.props.match.params.id;
      this.props.getDanhSachPhongVe(maLichChieu)
  }

  chiaHangGhe(mangHangGhe, soLuong){
    let tempArray = [];
    for (let i = 0; i< mangHangGhe.length; i+=soLuong){
      let ghe = mangHangGhe.slice(i,i+soLuong)
      tempArray.push(ghe);
    }
    return tempArray
  }

  renderListSeat = () => {
    let mangHangGhe = this.chiaHangGhe(this.props.danhSachPhongVe.danhSachGhe,SO_LUONG_GHE_MOT_HANG);

    return mangHangGhe.map((listSeat, stt) => {
      return <ListSeat key={stt} stt={stt} listSeat = {listSeat}/>;
    })
  }

  render() {

    let {danhSachPhongVe} = this.props
    // console.log(danhSachPhongVe);
    
    if(this.props.loadingPhongVe){
         return (
        <div className="sweet-loading d-flex justify-content-center">
          <PulseLoader
            css={override}
            size={30}
            color={"#36D7B7"}
            loading={this.props.loading}
          />
        </div>
      );
    }
    else{
    return (
      <section className="booking">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-8 booking-seat">
              <div className="row">
                <div className="col-9">
                  <p
                    className="font-weight-bold pt-2"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {danhSachPhongVe.thongTinPhim.tenCumRap}
                  </p>
                  <p>
                    {`${danhSachPhongVe.thongTinPhim.ngayChieu} - ${danhSachPhongVe.thongTinPhim.gioChieu} -
                      ${danhSachPhongVe.thongTinPhim.tenRap}`}
                  </p>
                </div>
                <div className="col-12 screen">
                  <img
                    className="img-fluid w-100"
                    src={require("../../../Assets/img/screenRap.png")}
                    alt=""
                  />
                </div>
                <div className="col-12 pb-5">
                  {this.renderListSeat()}
                  <div className="row list-seat py-5">
                    <div className="d-contents col-6 col-sm-6 col-lg-3">
                      <span className="seat mr-1 mb-1 seat-info"></span>
                      <span className="pr-4">Ghế thường</span>
                    </div>
                    <div className="d-contents col-6 col-sm-6 col-lg-3">
                      <span className="seat seat-vip mr-1 mb-1 seat-info" />{" "}
                      <span className="pr-4">Ghế VIP</span>
                    </div>
                    <div className="d-contents col-6 col-sm-6 col-lg-3">
                      <span
                        className="seat seat-disable mr-1 mb-1 seat-info"
                        disable="true"
                      />
                      <span className="pr-4">Ghế đã mua</span>
                    </div>
                    <div className="d-contents col-6 col-sm-6 col-lg-3">
                      <span
                        className="seat seat-click mr-1 mb-1 seat-info"
                        disable="true"
                      />
                      <span className="pr-4">Ghế đang chọn</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-4 booking-info">
              <BookingInfo danhSachPhongVe = {danhSachPhongVe}/>
            </div>
          </div>
        </div>
      </section>
    );
    }
  }
}

const mapStateToProps = state =>{
    return {
        danhSachPhongVe: state.bookingReducer.danhSachPhongVe,
        loadingPhongVe: state.bookingReducer.loadingPhongVe
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getDanhSachPhongVe: maLichChieu => {
            dispatch(actionBooking.actGetDanhSachPhongVe(maLichChieu));
        }, 
        resetLoadDanhSach: stateLoad => {
            dispatch(actionBooking.actResetLoadDanhSach(stateLoad));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)