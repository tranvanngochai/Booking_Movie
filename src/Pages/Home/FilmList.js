import React, { Component } from 'react'
import Slider from 'react-slick';
import FilmItem from '../../Components/Home/FilmItem';
import {connect} from 'react-redux';
import * as action from "./../../Redux/Actions/filmAction"


class FilmList extends Component {

    componentDidMount(){
      this.props.getListMovie();
    }

    renderHTML = () => {
      let {listMovie} = this.props;

      return listMovie.map((item, index) => {
        return (
          <FilmItem key = {index} movie = {item}/>
        );
      })
    }
    
    render() {

        const settings = {
          className: "center",
          centerMode: false,
          dots: true,
          infinite: false,
          centerPadding: "0px",
          slidesToShow: 4,
          speed: 500,
          rows: 2,
          slidesPerRow: 1
        };

        return (
          <section className="products container bg-dark" name = "products">
            <h3 className="text-center">Đang Chiếu</h3>
            {/* <div className="products__contents row"> */}
            <div className="products__contents">
              <Slider {...settings}>
              {this.renderHTML()}
              </Slider>
            </div>
          </section>
        );
    }
}

const mapStateToProps = state => {
  return {
    listMovie: state.filmReducer.listMovie
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
