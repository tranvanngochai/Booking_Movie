import React, { Component } from 'react'
import * as actionMovie from '../../../Redux/Actions/filmAction';
import * as actionCinema from '../../../Redux/Actions/cinemaAction'
import { connect } from "react-redux";
import {PulseLoader} from "react-spinners";
import { css } from "@emotion/core";
import DatVeDetail from './DatVeDetail';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 300px;
  margin-bottom: 332px;
  z-index: 9900;
`;


class ThongTinFilm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props.resetStateLoad(true);
  // }

  // componentWillMount(){
  //   this.props.resetStateLoad(true);
  // }

  componentWillUnmount() {
    this.props.resetStateLoad(true);
  }

  componentDidMount() {
    // console.log(this.props);
    const id = this.props.match.params.id;
    this.props.getDetailMovie(id);
    this.props.getThongTinLichChieuPhim(id);
  }

  createStar = () => {
    let table = [];
    for (let i = 0; i < this.props.movie.danhGia; i++) {
      table.push(<i key={i} className="fa fa-star ml-1"></i>);
    }
    return table;
  };

  render() {
    // console.log(this.props.lichChieuPhim);
    // console.log(this.props.movie);
    // console.log(this.props.loading);
    let { movie } = this.props;

    if (this.props.loading) {
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
    } else {
      return (
        <>
          <section className="muave mb-0 container">
            <div className=" muave__thongtinfilm ">
              <div className="row">
                <div className="col-5">
                  <div className="thongtinfilm_background">
                    <div className="thongtinfilm_anh">
                      <img
                        className=" w-100  d-block p-2 h-100"
                        src={movie.hinhAnh}
                        alt="anhFilm"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-7 pl-0">
                  <div className="thongtinfilm_text">
                    <h3 className="font-weight-bold">{movie.tenPhim}</h3>
                    <p className="py-3">{movie.moTa}</p>
                    <p className="font-weight-bold">
                      Đánh giá:
                      {this.createStar()}
                    </p>
                    <p className="font-weight-bold">
                      Ngày khởi chiếu:{" "}
                      {new Date(movie.ngayKhoiChieu).toLocaleDateString(
                        "en-GB"
                      )}
                    </p>
                    <div className="row my-5 ">
                      {/* Modal */}
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-success mx-3"
                        data-toggle="modal"
                        data-target="#trailer1"
                      >
                        XEM TRAILER
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="trailer1"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-xl" role="document">
                          <div className="modal-content embed-responsive embed-responsive-16by9">
                            <iframe
                              title="TrailerFrame"
                              src={movie.trailer}
                              frameBorder="{0}"
                              className="embed-responsive-item"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Modal */}
                      <a className="btn btn-success" href="#muave_lichchieu">
                        MUA VÉ NGAY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <DatVeDetail lichChieuPhim={this.props.lichChieuPhim} />
        </>
      );
    }
  }
}

const mapStateToProps = state => {

  return {
    movie: state.filmReducer.movie,
    loading: state.filmReducer.loading,
    lichChieuPhim: state.cinemaReducer.lichChieuPhim
  };
}

const mapDispatchToProps = dispatch => {
  return { 
    getDetailMovie: id => {
      dispatch(actionMovie.actGetDetailMovieAPI(id));
    },
    resetStateLoad: stateLoad => {
      dispatch(actionMovie.actResetStateLoad(stateLoad));
    },
    getThongTinLichChieuPhim: id => {
      dispatch(actionCinema.actGetThongTinLichChieuPhim(id))
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinFilm)