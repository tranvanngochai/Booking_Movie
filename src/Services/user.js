import * as yup from "yup";

export const signupUserSchemaRegister = yup.object().shape({
         taiKhoan: yup.string().required("Tài khoản không được để trống!"),
         matKhau: yup
           .string()
           .required("Mật khẩu không được để trống!")
           .matches(/^[a-zA-Z0-9]{6,10}$/, "Mật Khẩu phải từ 6 đến 10 ký tự"),
         hoTen: yup.string().required("Họ tên không được để trống!"),
         email: yup
           .string()
           .required("Email không được để trống!")
           .email("Email không hợp lệ!"),
         soDT: yup
           .string()
           .required("Số điện thoại không được để trống!")
           .matches(
             /((09|03|07|08|05)+([0-9]{8})\b)/g,
             "Số điện thoại không hợp lệ "
           ),
       });


export const signinUserSchemaLogin = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản không được để trống!"),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống!")
    .matches(/^[a-zA-Z0-9]{6,10}$/, "Mật Khẩu phải từ 6 đến 10 ký tự"),
});
     

