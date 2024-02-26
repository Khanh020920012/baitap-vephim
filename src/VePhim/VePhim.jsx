import React, { Component } from "react";
import List from "./List";
import "./css/index.css";
import Cart from "./Cart";
export default class VePhim extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-8">
            <List />
          </div>
          <div className="col-4">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
