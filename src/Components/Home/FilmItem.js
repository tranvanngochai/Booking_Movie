import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class FilmItem extends Component {
    createStar = () =>{
      let table = [];
      for(let i=0;i<this.props.movie.danhGia; i++){
         table.push(<i key={i} className="fa fa-star"></i>)
      }
      return table;
    }
    
    render() {
        let{movie} = this.props

      
        return (
          // <div className="col-3 products__film">

          <div className="products__film">
            <div
              className="filmThumbnail"
              style={{
                backgroundImage: `url(${movie.hinhAnh})`
              }}
            >
              <div className="hoverInfo showHover showingDetail"></div>
            </div>
            <div className="products__info">
              <div className="nameFilm hideHover">{movie.tenPhim}</div>
              <div className="infoFilm hideHover">{this.createStar()}</div>
              <div className="showHover">
                <NavLink
                  className="buyNow showingDetail"
                  to={`/detail-muave/${movie.maPhim}`}
                >
                  MUA VÉ
                </NavLink>
              </div>
            </div>
          </div>
        ); 
    }
}

