import React from "react";

export default function Menu(props) {
  var menustyles = {
    textAlign: 'center',
    display: 'inlineBlock',
    margin: 10,
    color: '#fff',
    fontFamily: 'Verdana',
    opacity: 0.75,
    cursor: 'pointer'
  }
  return (
    <div className="menu-items">
      {props.options.map(item => {
        return <div key={item.value} style={menustyles}>{item.value}</div>;
      })}
    </div>
  );
}
