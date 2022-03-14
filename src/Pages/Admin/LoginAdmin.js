import React, { Component } from "react";
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
// import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

// import validate
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signinUserSchemaLogin } from "../../Services/user";

// import redux
import { connect } from "react-redux";

// import action
import * as action from "../../Redux/Actions/userAction";

// import Axios from "axios";

// import Swal from "sweetalert2";


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

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class LoginAdmin extends Component {

  componentDidMount(){
    if(localStorage.getItem("UserAdmin")){
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>

          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
            }}
            validationSchema={signinUserSchemaLogin}
            onSubmit={(value) => {
              console.log(value);
               this.props.login(value, this.props.history);
            }}
          >
            {({ errors, handleChange, touched }) => (
              <Form className={classes.form}>
                <TextField
                  onChange={handleChange}
                  error={errors.taiKhoan && touched.taiKhoan}
                  helperText={
                    errors.taiKhoan && touched.taiKhoan ? errors.taiKhoan : null
                  }
                  className={classes.textField}
                  autoComplete="fname"
                  name="taiKhoan"
                  variant="outlined"
                  fullWidth
                  id="ataiKhoan"
                  label="Tài khoản"
                  autoFocus
                />

                <TextField
                  className={classes.textField}
                  onChange={handleChange}
                  error={errors.matKhau && touched.matKhau}
                  helperText={
                    errors.matKhau && touched.matKhau ? errors.matKhau : null
                  }
                  variant="outlined"
                  fullWidth
                  name="matKhau"
                  label="Mật Khẩu"
                  type="password"
                  id="amatKhau"
                  autoComplete="current-password"
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user, history) => {
            dispatch(action.actLoginAdmin(user, history))
        }
    }
}

export default connect(null, mapDispatchToProps) (withStyles(styles)(LoginAdmin));
