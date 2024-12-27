import React from 'react'
import { Component } from "react";
import Second from './Second';
import First from './First';
import Nav from './Nav';
class HomePage extends Component {
    state = {
        started :false
    }
    onToggle = () =>{
        this.setState((prevState) => ({started : !prevState.started}))
    }
render() {
    const {started} = this.state
    return (
        <div>
            
           {started ?  <Second /> : <div><Nav/><First toggle = {this.onToggle}/></div>}
    
        </div>
      )
}
}

export default HomePage

