import React, { Component } from "react";

export default class SeatItem extends Component {
  handleSelected = (ghe) => {
    // Gọi hàm xử lý sự kiện được truyền từ component cha
    if (this.props.onSeatSelected) {
      this.props.onSeatSelected(ghe);
    }
  };

  render() {
    return (
      <div style={{ color: "white" }} className="col">
        {this.props.seat.map((ghe) => {
          let gheClass = "ghe"; // mặc định là ghe thông thường
          if (ghe.daDat) {
            gheClass = "gheDuocChon"; // nếu ghế đã được đặt
          } else if (ghe.dangChon) {
            gheClass = "gheDangChon"; // nếu ghế đang được chọn
          }

          return (
            <div key={ghe.soGhe} className={gheClass}>
              {/* Sử dụng phương thức handleSelected khi click vào ghế */}
              <button
                onClick={() => this.handleeAddMovie}
                className="button-btn"
              >
                {" "}
                {ghe.soGhe}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
