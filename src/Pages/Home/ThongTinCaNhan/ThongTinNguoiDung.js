import React, { Component } from 'react'

export default class ThongTinNguoiDung extends Component {
    render() {
        let user = JSON.parse(localStorage.getItem("user"));
        // console.log(user);
        return (
          <div className="p-4" style={{fontSize:"1.2rem"}}>
            <p>
              <span className="font-weight-bold">Email: </span>
              {user.email}
            </p>
            <p>
              <span className="font-weight-bold">Tài khoản: </span>{user.taiKhoan}
            </p>
            <p>
              <span className="font-weight-bold">Họ tên: </span>{user.hoTen}
            </p>
            <p>
              <span className="font-weight-bold">Số điện thoại: </span>{user.soDT}
            </p>
          </div>
        );
    }
}
