import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
          <footer className="footer" name="footer">
            <div className="col-xs-12 block" id="footer">
              <div className="mainMaxWidth container">
                <div className="row">
                  <div className="col-sm-4 col-xs-12">
                    <p className="title hideOnMobile">TIX</p>
                    <div className="row ml-0">
                      <div className="col-sm-6 col-xs-6 noPaddingLeft fontSizeP hideOnMobile">
                        <a href="http://localhost:3000/">FAQ</a>
                        <a href="http://localhost:3000/">Brand Guidelines</a>
                      </div>
                      <div className="col-sm-6 col-xs-12 noPaddingLeft fontSizeP">
                        <a href="http://localhost:3000/">Thỏa thuận sử dụng</a>
                        <a href="http://localhost:3000/">Chính sách bảo mật</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-12 hideOnMobile">
                    <p className="title">ĐỐI TÁC</p>
                    <div className="row col-sm-12 col-xs-12 linePartner">
                      <a
                        target="_blank"
                        href="https://www.cgv.vn/"
                        title="CGV"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/cgv.png")}
                          style={{ backgroundColor: "#fff" }}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://bhdstar.vn"
                        title="BHD"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/bhd.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://galaxycine.vn"
                        title="Galaxy"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/galaxycine.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://cinestar.com.vn"
                        title="Cinestar"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/cinestar.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://lottecinemavn.com"
                        title="Lotte Cinema"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/lottecinema.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="row col-sm-12 col-xs-12 linePartner">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.megagscinemas.vn"
                        title="MegaGS"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/megags.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.betacineplex.vn/"
                        title="Beta"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/bt.jpg")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://ddcinema.vn"
                        title="DDC"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/dongdacinema.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://touchcinema.com/"
                        title="Touch Cinema"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/TOUCH.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://cinemaxvn.com/"
                        title="Cinemax"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/cnx.jpg")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="row col-sm-12 col-xs-12 linePartner">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://starlight.vn/"
                        title="Starlight"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/STARLIGHT.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.dcine.vn/"
                        title="Dcine"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/dcine.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://zalopay.vn/"
                        title="ZaloPay"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/zalopay_icon.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.payoo.vn/"
                        title="Payoo"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/payoo.jpg")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.vietcombank.com.vn/"
                        title="Vietcombank"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/VCB.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="row col-sm-12 col-xs-12 linePartner">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.agribank.com.vn/"
                        title="Agribank"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/AGRIBANK.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.vietinbank.vn/"
                        title="Vietinbank"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/VIETTINBANK.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.indovinabank.com.vn/"
                        title="IVB"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/IVB.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://123go.vn"
                        title="123Go"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/123go.png")}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://laban.vn"
                        title="La Bàn"
                      >
                        <img
                          className="iconConnect"
                          src={require("../../Assets/img/laban.png")}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <div className="row">
                      <div className="col-6 hideOnMobile textCenter">
                        <p className="title">MOBILE APP</p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                          title="Apple App"
                        >
                          <img
                            className="iconApp"
                            src={require("../../Assets/img/apple-logo.png")}
                            alt=""
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                          title="Android App"
                        >
                          <img
                            className="iconApp"
                            src={require("../../Assets/img/android-logo.png")}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col-6 textCenter">
                        <p className="title hideOnMobile">SOCIAL</p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/tix.vn/"
                          title="Facebook social"
                        >
                          <img
                            className="iconApp"
                            src={require("../../Assets/img/facebook-logo.png")}
                            alt=""
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://zalo.me/tixdatve"
                          title="Zalo social"
                        >
                          <img
                            className="iconApp"
                            src={require("../../Assets/img/zalo-logo.png")}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="hrFooter" />
                <div className="row">
                  <div className="col-sm-1 col-xs-12 imgFooter">
                    <img
                      className="vngIcon"
                      src={require("../../Assets/img/zion-logo.jpg")}
                      style={{ borderRadius: 8 }}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-9 col-xs-12 infoFooter">
                    <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                    <span>
                      Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7,
                      Tp. Hồ Chí Minh, Việt Nam.
                    </span>
                    <span>
                      Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                      <br />
                      đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
                      ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                      Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố
                      Hồ Chí Minh cấp.
                    </span>
                    <span>
                      Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
                      <br />
                      Email:{" "}
                      <a
                        href="mailto:support@tix.vn"
                        style={{ color: "#FB4226" }}
                      >
                        support@tix.vn
                      </a>
                    </span>
                  </div>
                  <div className="col-sm-2 col-xs-12 imgFooter">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://online.gov.vn/Home/WebDetails/62782"
                    >
                      <img
                        className="imgBoCo"
                        alt="Bộ Công Thương"
                        title="true"
                        src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}
