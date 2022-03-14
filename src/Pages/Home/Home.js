import React, { Component } from 'react';
import Carousel from './Carousel';
import FilmList from './FilmList';
import Order from './Order';

export default class Home extends Component {
    render() {
        return (
          <div>
            <Carousel />
            <Order />
            <FilmList />
          </div>
        );
    }
}
