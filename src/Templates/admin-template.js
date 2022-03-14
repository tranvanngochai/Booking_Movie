import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "../Pages/Admin/NavbarAdmin";
import Footer from "../Components/Home/Footer";

const AdminLayout = props => {
    return(
        <Fragment>
            <NavbarAdmin/>
            {props.children}
        </Fragment>
    )
}

export default function AdminTemplate({ Component, ...props}){
    return (
        <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/admin" />;
        }
      }}
    />
    )
}
