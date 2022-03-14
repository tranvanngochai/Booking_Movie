import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// import validate
import { Formik, Form, Field, ErrorMessage } from "formik";
import {signupUserSchemaRegister} from "../../../Services/user";

// import Axios 
import Axios from "axios";

import Swal from "sweetalert2";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});


class Register extends Component {

    _handleSubmit = (value) => {
      return Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        data: value,
      })
        .then((result) => {
          console.log(result.data);
          Swal.fire({
            icon: "success",
            title: "Đăng ký thành công",
            text: "",
            timer: 2000,
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Đăng ký thất bại!",
            text: err.response.data,
            timer: 3000,
          });
        });
    }

    render() {
        const {classes} = this.props
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Đăng Ký
              </Typography>

              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                  hoTen: "",
                  email: "",
                  soDT: "",
                  maNhom: "GP05",
                  maLoaiNguoiDung: "KhachHang"
                }}
                validationSchema={signupUserSchemaRegister}
                onSubmit={(value) => {
                  this._handleSubmit(value);
                }}
              >
                {({ errors, handleChange, touched }) => (
                  <Form className={classes.form}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          onChange={handleChange}
                          error={errors.taiKhoan && touched.taiKhoan}
                          helperText={
                            errors.taiKhoan && touched.taiKhoan
                              ? errors.taiKhoan
                              : null
                          }
                          autoComplete="fname"
                          name="taiKhoan"
                          variant="outlined"
                          fullWidth
                          id="taiKhoanR"
                          label="Tài khoản"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          onChange={handleChange}
                          error={errors.hoTen && touched.hoTen}
                          helperText={
                            errors.hoTen && touched.hoTen ? errors.hoTen : null
                          }
                          variant="outlined"
                          fullWidth
                          id="hoTen"
                          label="Tên"
                          name="hoTen"
                          autoComplete="lname"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          onChange={handleChange}
                          error={errors.email && touched.email}
                          helperText={
                            errors.email && touched.email ? errors.email : null
                          }
                          variant="outlined"
                          fullWidth
                          id="email"
                          label="Email"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          onChange={handleChange}
                          error={errors.soDT && touched.soDT}
                          helperText={
                            errors.soDT && touched.soDT ? errors.soDT : null
                          }
                          variant="outlined"
                          fullWidth
                          type="tel"
                          id="soDT"
                          label="Số điện thoại"
                          name="soDT"
                          autoComplete="lname"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          onChange={handleChange}
                          error={errors.matKhau && touched.matKhau}
                          helperText={
                            errors.matKhau && touched.matKhau
                              ? errors.matKhau
                              : null
                          }
                          variant="outlined"
                          fullWidth
                          name="matKhau"
                          label="Mật Khẩu"
                          type="password"
                          id="matKhauR"
                          autoComplete="current-password"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="allowExtraEmails"
                              color="primary"
                            />
                          }
                          label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <Link href="#" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        );
    }
}

export default withStyles(styles)(Register);