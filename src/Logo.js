import React from "react";

export default function Logo() {
  var logostyles = {
    height: '200px',
    width: '100%',
    display: 'block',
    margin: '0 auto'
  }
  return (
    <img
      style={logostyles}
      src="https://cdn.vox-cdn.com/thumbor/5rxhA5vuH-q2mpq1_ixG__-5kws=/94x0:610x344/1200x800/filters:focal(94x0:610x344)/cdn.vox-cdn.com/assets/755523/netflix-logo-705px.png"
      alt="Netflix" />
  )
}