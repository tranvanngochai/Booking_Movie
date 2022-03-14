import React, { Component } from 'react'
import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/bookingAction";

class Seat extends Component {
  constructor() {
    super();

    this.state = {
      click: false,
    };
  }

  changeColor() {
    this.setState({ click: !this.state.click });
  }

  handleOnClick = (event) => {
    this.changeColor();
    this.props.selectSeat({
      tenGhe: event.target.innerHTML,
      maGhe: this.props.seat.maGhe,
      giaVe: this.props.seat.giaVe,
    });
  };

  render() {
    let btn_class = this.state.click ? "seat-click" : "";
    if (this.props.seat.loaiGhe === "Vip" && !this.props.seat.daDat) {
      return (
        <span
          className={`seat seat-vip mr-1 mb-1 text-center text-white ${btn_class}`}
          onClick={this.handleOnClick}
        >{`${this.props.tenDayGhe}${this.props.stt + 1}`}</span>
      );
    } else if (this.props.seat.loaiGhe === "Thuong" && !this.props.seat.daDat) {
      return (
        <span
          className={`seat mr-1 mb-1 text-center text-white ${btn_class}`}
          onClick={this.handleOnClick}
        >{`${this.props.tenDayGhe}${this.props.stt + 1}`}</span>
      );
    }
    return (
      <span
        className={`seat seat-disable mr-1 mb-1 text-center text-white ${btn_class}`}
        disable={"true"}
      >{`${this.props.tenDayGhe}${this.props.stt + 1}`}</span>
    );
  }

  componentWillUnmount() {
    this.props.resetListSeat();
  }
}


const mapDispatchToProps = dispatch => {
    return {
        selectSeat: seat => {
            dispatch(action.actChonGhe(seat));
        }, 
        resetListSeat: seat => {
            dispatch(action.actResetListSeat(seat))
        }
    }
}

export default connect(null, mapDispatchToProps)(Seat);