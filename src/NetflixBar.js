import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export default function NetflixBar() {
  const sidebarstyles = {
    width: "25%",
    display: 'block',
    minHeight: "100vh",
    backgroundColor: "#98000f",
    margin: 0,
    padding: 0,
    float: 'left'
  };
  var menuitems = [
    { value: "Latest" },
    { value: "Trending" },
    { value: "Continue Watching" },
    { value: "Sign Out" }
  ];
  return (
    <div style={sidebarstyles}>
      <Logo />
      <Menu options={menuitems} />
    </div>
  );
}
