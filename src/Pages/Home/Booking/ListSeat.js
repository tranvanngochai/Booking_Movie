import React, { Component } from 'react'
import Seat from './Seat';

export default class ListSeat extends Component {
    renderGhe = () => {
        let tenDayGhe = String.fromCharCode(65 + this.props.stt);

        return this.props.listSeat.map((seat, index) =>{
          return (
            <Seat
              key={index}
              seat={seat}
              stt={index}
              tenDayGhe={tenDayGhe}
            />
          );
        });
    }

    render() {
        // console.log(this.props);
        // let tenDayGhe = String.fromCharCode(65 + this.props.stt);
        // console.log(tenDayGhe);
        return (
            <div className="row list-seat">
                {this.renderGhe()}
            </div>
        )
    }
}
