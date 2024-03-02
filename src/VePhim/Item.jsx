import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_MOVIE } from "./redux/constant";

class Item extends Component {
  handleSelectSeat = (seat) => {
    this.props.handleClickAddMovie(seat); // Gọi action creator để thêm ghế vào giỏ hàng
  };
  render() {
    // Destructure props để lấy dữ liệu từ props.data
    let { handleClickAddMovie, row, seat } = this.props.data;
    console.log(this.props);
    // Dùng các giá trị từ dữ liệu để render thông tin ghế
    return (
      <div>
        <div className="   seat text-left ml-3 mt-4 ">
          <div>{row}</div>
          <div className="seat-container">
            {seat.map((item) => (
              <button
                onClick={() => {
                  this.handleSelectSeat(item);
                }}
                key={seat.soGhe}
                className={item.daDat ? "gheDuocChon" : "ghe"}
                disabled={item.daDat}
              >
                <input
                  type="checkbox"
                  value={item.soGhe}
                  disabled={item.daDat}
                />
                <span className="span-item">{item.soGhe}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleClickAddMovie: (item) => {
      let action = {
        type: ADD_MOVIE,
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Item);
