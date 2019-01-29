import React, { Component } from 'react';
import './App.css';
import {printHelloWorld} from './actions/printHelloAction';
import {connect} from 'react-redux';
class App extends Component {

  printHello= ()=>{
    console.log('printHelloWorld props..');
    this.props.hello(); //mapActionsToProps
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.printHello}> insta: @h3ypb </button> 
        {this.props.message} {/* mapStateToProps */}
        </header>
        
      </div>
    );
  }
}
const mapActionsToProps={
    hello:printHelloWorld 
}
const mapStateToProps=(state)=>{
  console.log(` mapStateToProps -> ${JSON.stringify(state.data)}`);
  return {message:state.data.message}
}
export default connect(mapStateToProps,mapActionsToProps)(App);
