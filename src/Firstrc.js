import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";


export default function Firstrc(props) {
  const [bold, setbold] = useState("/");
  const click=(path)=>{
    setbold(path);

  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.m} bg-${props.m} bg-body-dark` }>
    <div className="container-fluid" >
      <a style={{fontWeight:"bolder",fontSize:"1.3rem"}} className="navbar-brand" href="/">{props.brand}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a onClick={()=>{click("/")}} className="nav-link" style={{fontWeight:bold==="/"?"bolder":"lighter"}} aria-current="page" href="/">Home</a>
          </li>
           {/* <li className="nav-item">
            <a style={{fontWeight:bold==="/a"?"bolder":"lighter"}} onClick={()=>{click("/a")}} className="nav-link" href="/a">{props.about}</a>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link" to="/c">{props.contact}</Link>
          </li>  */}

         
</ul>        
<div className ="form-check form-switch mx-2">
  <input className ="form-check-input" onClick={props.onc} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className ="form-check-label" for="flexSwitchCheckDefault">{props.enable==="info"?"Enable Light Mode":"Enable Blue Mode"}</label>
</div>
<div className ="form-check form-switch mx-2">
  <input className ="form-check-input" onClick={props.onc2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className ="form-check-label" for="flexSwitchCheckDefault">{props.enable==="danger"?"Enable Light Mode":"Enable Red Mode"} </label>
</div>
<div className ="form-check form-switch mx-2">
  <input className ="form-check-input" onClick={props.onc3} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className ="form-check-label" for="flexSwitchCheckDefault">{props.enable==="success"?"Enable Light Mode":"Enable Green Mode"} </label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" onClick={props.btnf} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" style={{color:props.m==="dark"?"white":"black"}} htmlFor="flexSwitchCheckDefault">{props.enable==="dark"?"Enable Light Mode":"Enable Dark Mode"}</label>
</div>

      </div>
    </div>
  </nav>
    
  )
}
Firstrc.propTypes={
    brand:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired,
    contact:PropTypes.string.isRequired
}
Firstrc.defaultProps={
    contact:"Here contact will occur",
    brand:"Brand Name",
    about:"About will come"
}