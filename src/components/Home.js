import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import  PropTypes from 'prop-types'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge
        }
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3

        })
        console.log(this.state.age)
    }
  render() {
    return (
       <div className="container">
          <div className="row">
             <div className="col-xs-1 col-xs-offset-11">

               <div>{this.props.children}</div>
              <div>your name is {this.props.name}, your age is {this.state.age}</div>
              <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older</button>
             </div>
          </div>
        </div>
    );
  }
}
Home.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    user:PropTypes.object,
    children: PropTypes.element.isRequired
}

