import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
    const title = props.title;
  
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable dark mode':'Enable light mode'}</label>
      </div>
    </div>
  </div>
</nav>
  ) 
}

Navbar.propTypes = {title:PropTypes.string.isRequired,aboutText:PropTypes.string.isRequired}      // we used this to define the types of props which we are passing from App.js(like: title etc)......,  "isRequired" we used for compulsory means if we used this then it is must to pass the props from the App.js 

//Navbar.defaultProps = {title: 'set title here',aboutText: 'about text here'};                      this "defaultProps" will not work anymore with version react 18 or above(so we used other alternative in above),.... .. this "defaultProps" is used when we do not pass the props(means value) from "App.js" to this componenet then this defalutProps will take place as props