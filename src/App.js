import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

  class App extends Component {
      onGreet(age){
          alert(age);
      }
  render() {
          let content="";
          if(true){
            content="hello word!";
          }
          const user={
      name:"Anna",
      hobbies:["Sports","Reading"]
    }
    return (

       <div className="container">
          <div className="row">
             <div className="col-xs-1 col-xs-offset-11">
                <h1>Hello!!</h1>
             </div>
          </div>
        <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
            <Header/>
            </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home name={"max"} initialAge={12} user={user} greet={this.onGreet} >
            <p>I am child </p>
            </Home>
          </div>
        </div>

        </div>
    );
  }
}

export default App;
