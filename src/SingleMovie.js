import React from "react";
import Search from "./Search";

export default class SingleMovie extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        {this.props.movie}
      </div>
    )
  }
}