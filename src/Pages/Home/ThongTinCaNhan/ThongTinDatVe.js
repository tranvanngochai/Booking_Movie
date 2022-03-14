import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as action from '../../../Redux/Actions/userAction'
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 300px;
  margin-bottom: 332px;
  z-index: 9900;
`;

class ThongTinDatVe extends Component {
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    let taiKhoan = { taiKhoan: user.taiKhoan };
    this.props.getInfoUser(taiKhoan);
  }

  componentWillUnmount() {
    this.props.resetInfoLoad(true);
  }

  renderHTML = () => {
    let { infoUser } = this.props;
    console.log(infoUser);
    
    return infoUser.thongTinDatVe.map((thongTinDatVe, index) => {
      return thongTinDatVe.danhSachGhe.map((item,index) => {
        return (
          <div className="p-4" key = {index}>
            <div className="row">
              <div className="col-3">
                <img
                  className="w-100"
                  src={require("../../../Assets/img/rapPhim.jpg")}
                  alt="play"
                />
              </div>
              <div className="col-9">
                <p>
                  <span className="font-weight-bold">Rạp:</span> {item.tenHeThongRap}
                </p>
                <p>
                  <span className="font-weight-bold">Phim:</span>{" "}
                  {thongTinDatVe.tenPhim}
                </p>
                <p>
                  <span className="font-weight-bold">Ngày đặt:</span>{" "}
                  {new Date(thongTinDatVe.ngayDat).toLocaleDateString("en-GB")}{" "}
                  -{" "}
                  {new Date(thongTinDatVe.ngayDat).toLocaleTimeString("en-GB")}
                </p>
                <p>
                   {item.tenRap} - Ghế {item.tenGhe}
                </p>
              </div>
            </div>
          </div>
        );
      })
    })
  }

  render() {
    if(this.props.loadingInfo){
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
    }else{
        return (
          <>
            {this.renderHTML()}
          </>
        );
    }
  }
}


const mapStateToProps = state => {
    return {
        infoUser: state.userReducer.infoUser,
        loadingInfo: state.userReducer.loadingInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfoUser: taiKhoan => {
            dispatch(action.actGetInfoUser(taiKhoan))
        }, 
        resetInfoLoad: stateLoad => {
            dispatch(action.actResetInfoLoad(stateLoad))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatVe);

