import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {printHelloWorld} from './actions/printHelloAction';
import {connect} from 'react-redux';
class App extends Component {

  printHelloWorld= ()=>{
    console.log('Hello');
    this.props.hello();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.printHelloWorld}>Hello World</button>
        {this.props.message}
      </div>
    );
  }
}
const mATP={
    hello:printHelloWorld 
}
const mapStateToProps=(state)=>{
  console.log(` mSTP -> ${JSON.stringify(state.data)}`);
  return {message:state.data.message}
}
export default connect(mapStateToProps,mATP)(App);
