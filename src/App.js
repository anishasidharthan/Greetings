import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data : " ",
   }
  this.displayMessage = this.displayMessage.bind(this)
};

  displayMessage(){
    const curdate = new Date();
    const curtime = curdate.getHours()
    if(curtime < 12) {
      this.setState({data:'good morning Anisha'})
    }else if(curtime<18){this.setState({data:'good afternoon Anisha'})
  }else {
    this.setState({data:'good evening Anisha'})
  }

  }
  render(){
    return(
      <div>
        <input type='button' value="button" onClick = {this.displayMessage}/>
      <h1>{this.state.data}</h1>
      </div>
    );
  }
}


export default App;