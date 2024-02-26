import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    let { onDelete, soGhe, gia, seat } = this.props;
    console.log(this.props.gia);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Số Ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, index) => {
              return (
                <tr key={item}>
                  <td>{index + 1}</td>
                  <td>{item.row}</td>
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
        type: "DELETE_SEAT",
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
