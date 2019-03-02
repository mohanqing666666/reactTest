import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import  PropTypes from 'prop-types'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink:"moshuai"
        }
        setTimeout( ()=>{
            this.setState({
            status:props.initialAge
        })
        },2000

        )

    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3

        })
        console.log(this.state.age)
    }
    handleGreeet(){
        this.props.greet(this.state.age)
    }
    onchangeLink(){
        this.props.changeLink(this.state.homeLink)
    }
    onHandleChange(event){
        this.setState({
            homeLink:event.target.value
        })
    }

  render() {
    return (
       <div className="container">
          <div className="row">
             <div className="col-xs-1 col-xs-offset-11">
               <div>{this.props.children}</div>
                <p>status:{this.state.status}</p>
              <div>your name is {this.props.name}, your age is {this.state.age}</div>
              <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older</button>
              <button onClick={this.handleGreeet.bind(this)} className="btn btn-primary">Make me</button>
              <hr/>
              <button onClick={this.onchangeLink.bind(this)} className="btn btn-primary">Bro Link</button>
              <input type="text"  value={this.props.initialName} onChange={(event)=>this.onHandleChange(event)}/>
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
    children: PropTypes.element.isRequired,
    initialName:PropTypes.string

}

