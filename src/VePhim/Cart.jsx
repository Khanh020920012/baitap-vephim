import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_SEAT } from "./redux/constant";

class Cart extends Component {
  render() {
    let { onDelete, soGhe, gia, seat } = this.props;

    return (
      <div className="col-12">
        <div className="List">Danh Sách Ghế Bạn Chọn</div>
        <table style={{ color: "white" }} className="table">
          <thead className="thead">
            <tr>
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
