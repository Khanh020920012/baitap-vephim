import React, { Component } from "react";

export default class ListMovie extends Component {
  render() {
    console.log(this.props);
    const { cart } = this.props;
    console.log(this.props.cart);

    // Kiểm tra xem prop cart có tồn tại không
    if (!cart || cart.length === 0) {
      return <div>No items in cart</div>;
    }

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>NameSeat</th>
              <th>Price</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((hangGhe, index) => {
              return (
                <tr key={index}>
                  <td>{hangGhe.seats}</td>
                  {/* Nếu có giá trị giá cả, bạn có thể hiển thị ở đây */}
                  {/* <td>{item.gia}</td> */}
                  <td>
                    {/* Tạo một nút "Hủy" để xóa mục khỏi giỏ hàng */}
                    {/* <button onClick={() => this.props.removeFromCart(index)}>
                    Hủy
                  </button> */}
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
