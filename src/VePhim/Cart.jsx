import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_SEAT } from "./redux/constant";

class Cart extends Component {
  render() {
    let { onDelete, soGhe, gia, seat } = this.props;

    return (
      <div>
        <div className=" mt-2 ">
          <div
            className="List display-4 text-light "
            style={{ fontSize: "30px" }}
          >
            Danh Sách Ghế Bạn Chọn
          </div>
          <div className="ghefloat">
            <button className="gheDuocChon "></button>
            <span>Ghế Đã Đặt</span>
            <br />
            <button className="gheDangChon"></button>
            <span>Ghế Được Đặt</span>
            <br />

            <button className="ghe"></button>
            <span>Ghế Chưa Đặt</span>
          </div>

          <table style={{ color: "white" }} className="table" border="3">
            <thead className="thead">
              <tr className="text-light" style={{ fontSize: "35px" }}>
                <th className="table-header">Số Ghế</th>
                <th className="table-header">Giá</th>
                <th className="table-header">Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item, index) => {
                return (
                  <tr key={item}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                      <button
                        onClick={() => onDelete(item)}
                        className="btn btn-danger"
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (item) => {
      let action = {
        type: DELETE_SEAT,
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
