import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div className="carouselfilm">
        <div
          id="carouselExampleControls"
          className="carousel slide my-carousel"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../../Assets//img/carousel1.jpg")}
                className="d-block w-100"
                alt="..."
              />
              <div className="backgroundLinear" />
              <button
                type="button"
                data-toggle="modal"
                data-target=".bd-example-modal-xl1"
              >
                <img
                  src={require("../../Assets/img/play-video.png")}
                  alt="play"
                />
              </button>

              <div
                className="modal fade bd-example-modal-xl1"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content embed-responsive embed-responsive-16by9">
                    <iframe
                      title="carouselFrame"
                      src="https://www.youtube.com/embed/3TI0M4wnVSg"
                      frameBorder={0}
                      className="embed-responsive-item"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../../Assets/img/carousel2.jpg")}
                className="d-block w-100"
                alt=""
              />
              <div className="backgroundLinear" />
              <button
                type="button"
                data-toggle="modal"
                data-target=".bd-example-modal-xl2"
              >
                <img
                  src={require("../../Assets/img/play-video.png")}
                  alt="play"
                />
              </button>

              <div
                className="modal fade bd-example-modal-xl2"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content embed-responsive embed-responsive-16by9">
                    <iframe
                      title="carouselFrame"
                      src="https://www.youtube.com/embed/r-SR6-b4OQo"
                      frameBorder={0}
                      className="embed-responsive-item"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../../Assets/img/carousel3.jpg")}
                className="d-block w-100"
                alt=""
              />
              <div className="backgroundLinear" />
              <button
                type="button"
                data-toggle="modal"
                data-target=".bd-example-modal-xl3"
              >
                <img
                  src={require("../../Assets/img/play-video.png")}
                  alt="play"
                />
              </button>

              <div
                className="modal fade bd-example-modal-xl3"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      title="carouselFrame"
                      src="https://www.youtube.com/embed/DymKqNH_m8w"
                      frameBorder={0}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../../Assets/img/carousel4.jpg")}
                className="d-block w-100"
                alt=""
              />
              <div className="backgroundLinear">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target=".bd-example-modal-xl4"
                >
                  <img
                    src={require("../../Assets/img/play-video.png")}
                    alt="play"
                  />
                </button>
                <div
                  className="modal fade bd-example-modal-xl4"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content  embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        title="carouselFrame"
                        src="https://www.youtube.com/embed/TxhE92DBdKg"
                        frameBorder={0}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../../Assets/img/carousel5.jpg")}
                className="d-block w-100"
                alt=""
              />
              <div className="backgroundLinear" />

              <button
                type="button"
                data-toggle="modal"
                data-target=".bd-example-modal-xl5"
              >
                <img
                  src={require("../../Assets/img/play-video.png")}
                  alt="play"
                />
              </button>

              <div
                className="modal fade bd-example-modal-xl5"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      title="carouselFrame"
                      src="https://www.youtube.com/embed/M4Zn8gumnr8"
                      frameBorder={0}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
