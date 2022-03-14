import React, { Component } from 'react'
import "../../Assets/scss/pages/PageNotFound/_pagenotfound.scss";

export default class PageNotFound extends Component {
    render() {
        return (
          <div className="pageNotFound">
            <div className="error">
              <h1>404 </h1>
              <h2>Page not found</h2>
            </div>
          </div>
        );
    }
}
