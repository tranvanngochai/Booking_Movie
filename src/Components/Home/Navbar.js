import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Link } from "react-scroll";
import Login from "../../Pages/Home/User/Login";
import Register from "../../Pages/Home/User/Register"


// import redux
import { connect } from "react-redux";

// import action
import * as action from "../../Redux/Actions/userAction";

import Swal from "sweetalert2";
import shortid from "shortid";

class Navbar extends Component {
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.props.setUserLogin(user);
    }
  }

  getId = () => {
    const id = shortid.generate();
    console.log(id);
    return id;
  };

  handleOnClick = (event) => {
    console.log(this.props);
    let { history } = this.props;
    if (event.target.name === "logout") {
      localStorage.removeItem("user");
      this.props.setUserLogin({});
      const url = this.props.match;

      if (url.path === "/" || url.path === "/detail-muave/:id") {
        Swal.fire({
          icon: "success",
          title: "Đã đăng xuất",
          text: "",
        });
      } else {
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "Đã đăng xuất",
          text: "",
          timer: 2000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {}, 100);
          },

          onClose: () => {
            history.push(`/`);
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            history.push(`/`);
          }
        });
      }
    }
  };

  renderLogin = () => {
    if (this.props.user.taiKhoan) {
      return (
        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item dropdown pr-5">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                alt="avatar"
                src={require("../../Assets/img/avartarHuman.jpg")}
              />
              <span>{this.props.user.hoTen}</span>
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
              style={{ minWidth: "7rem", padding: 0 }}
            >
              <NavLink
                className="btn btn-sm dropdown-item"
                to="/thong-tin-ca-nhan"
              >
                Thông tin tài khoản
              </NavLink>
              <a
                className="btn btn-sm btn-outline-secondary dropdown-item"
                name="logout"
                onClick={this.handleOnClick}
              >
                Đăng xuất
              </a>
            </div>
          </li>
        </ul>
      );
    } else {
      return (
        <>
          <ul className="navbar-nav mr-auto accountLogin">
            <li className="nav-item  ">
              <a
                className="nav-link"
                href=""
                data-toggle="modal"
                data-target="#modal-login"
              >
                <img
                  alt="avatar"
                  src={require("../../Assets/img/avatar.png")}
                />
                Đăng Nhập
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto accountSignup">
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="modal"
                data-target="#modal-register"
              >
                <img
                  src={require("../../Assets/img/avatar.png")}
                  alt="avatar"
                />
                Đăng Ký
              </a>
            </li>
          </ul>
        </>
      );
    }
  };

  render() {
    return (
      <header className="header">
        <nav className=" mynav1 navbar navbar-expand-lg ">
          <NavLink className="navbar-brand" to="/">
            <img src={require("../../Assets/img/web-logo.png")} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              alt="menu"
              src={require("../../Assets/img/menu-options.png")}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="products"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                 | Lịch Chiếu |
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="footer"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                 | Liên Hệ |
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="footer"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                 | Ứng Dụng |
                </Link>
              </li>
            </ul>
          </div>
          <div
            key={this.getId()}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            {this.renderLogin()}
          </div>
        </nav>

        <div
          className="modal fade "
          id="modal-login"
          role="dialog"
          tabIndex="-1"
          aria-labelledby="myLargeModalLabel"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <Login />
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="modal-register"
          role="dialog"
          tabIndex="-1"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <Register />
            </div>
          </div>
        </div>
      </header>
    );
  }
}


const mapStateToProps = state => {
  return { 
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserLogin: user => {
      dispatch(action.actSetUserLogin(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))