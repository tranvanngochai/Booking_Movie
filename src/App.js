import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "./Templates/home-template";
import AdminTemplate from "./Templates/admin-template";
import { routesHome, routesAdmin } from "./Route";
import PageNotFound from "./Components/Home/PageNotFound";
import LoginAdmin from "./Pages/Admin/LoginAdmin";

const showMenuHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

const showMenuAdmin = routes => {
  if(routes && routes.length > 0){
    return routes.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          path={item.path}
          exact = {item.exact}
          Component={item.component}
        />
      )
    })
  }
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {showMenuHome(routesHome)}
        {showMenuAdmin(routesAdmin)}
        <Route path="/admin" component={LoginAdmin} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
