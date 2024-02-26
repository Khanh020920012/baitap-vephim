import React, { Component } from "react";
import SeatItem from "./SeatItem";

class SeatMovie extends Component {
  render() {
    let { seatData, handleStartSelect, handleSelected } = this.props;

    return (
      <div>
        <h1 className="text-center text-warning">Đặt Vé Xem Phim </h1>
        <div
          style={{
            borderRadius: 10,
            height: 30,
            width: 700,
            backgroundColor: "gray",
            marginLeft: 100,
          }}
          className="text-center fw-bold text-white"
        >
          Màn Hình
        </div>
       
       
        <div>
          <div className="row">
            {seatData.map((hangGhe) => {
              return (
                <SeatItem
                  key={hangGhe.row} // Thêm key cho mỗi hàng ghế
                  seat={hangGhe.seat}
                  onSeatSelected={handleSelected} // Truyền hàm handleSelected từ cha
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SeatMovie;
