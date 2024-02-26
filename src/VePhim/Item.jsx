import React, { Component } from "react";
import { connect } from "react-redux";

class Item extends Component {
  render() {
    // Destructure props để lấy dữ liệu từ props.data
    let { handleClickAddMovie, row, seat } = this.props.data;
    console.log(this.props);
    // Dùng các giá trị từ dữ liệu để render thông tin ghế
    return (
      <div>
        <div>
          <div>
            <div>{row}</div>
            <div className="seat-container">
              {seat.map((item) => (
                <button
                  onClick={() => {
                    this.props.handleClickAddMovie(this.props.data);
                  }}
                  key={item}
                  className={item.daDat ? "ghe daDat" : "seat-label"}
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
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleClickAddMovie: (item) => {
      let action = {
        type: "ADD_MOVIE",
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Item);
