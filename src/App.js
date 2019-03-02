import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

  class App extends Component {
      constructor(){
          super();
          this.state={
              homeLink:"homeLink"
          }

      }
      onGreet(age){
          alert(age);
      }
      onChangeLinkName(newName){
          this.setState({
              homeLink:newName
          })
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
            <Header  linkHeader={this.state.homeLink}/>
            </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home name={"max"} initialAge={12} user={user} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)}  initialName={this.state.homeLink}>
            <p>I am child </p>
            </Home>

          </div>
        </div>
        </div>
    );
  }
}

export default App;
