import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";

class List extends Component {
  renderListMovie = () => {
    return this.props.seatArr.map((item, index) => {
      return (
        <Item
          data={item}
          key={index}
          handleClickAddMovie={this.props.handleSelected}
        />
      );
    });
  };
  render() {
    return <div className="row col-8">{this.renderListMovie()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    seatArr: state.seatArr,
  };
};

export default connect(mapStateToProps)(List);
