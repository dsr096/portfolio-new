import React from 'react'
import "./welcome.css"
import {Link} from "react-router-dom";
function welcome() {
  return (
    <div>
      <h1 className="header">Welcome to my PortFolio</h1>
     <Link to="/home"> <button className="let">Let's Start</button></Link>
    </div>
  )
}

export default welcome
