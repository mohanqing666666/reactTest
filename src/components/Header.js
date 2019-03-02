import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';


const Header=(props)=>{
    return (
       <div className="container">
          <div className="row">
             <div className="col-xs-1 col-xs-offset-11">
                <h1>{props.linkHeader}</h1>
             </div>
          </div>
        </div>
    );
  }

export default Header;

