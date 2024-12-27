import React from 'react'
import styled from "styled-components"
import DropDown from './Dropdown';
import { Component } from "react";

class Second extends Component {
  state={
    collections:false
  }
  onClickCollections = () =>{
    const {collections} = this.state
    this.setState((prevState) => ({collections : !prevState.collections}))
    console.log(collections)
  }
  
   
  
  render(){
    const collections = this.state
    const classN = collections? "dropdown-on" : "dropdown-off"
    return (
      <SecondContainer>
        <nav>
          <div>
          <img src="/images/apple-watch-logo.png" className='logo-img'/>
          </div>
        <DropDown toggle={this.onClickCollections} value = {collections} classValue = {classN} />
        
        <button className='button-save'>Save</button>
        </nav>
  
      </SecondContainer>
    )
  }
}

export default Second

const SecondContainer = styled.div`

nav{
  display :flex;
justify-content:space-between;
  overflow: hidden;
}
.dropdown-on{
  display:block;
}
.dropdown-off{
  display:none;
}
.button-save{
    display:flex;
    margin: 43px 0 0;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -.022em;
    line-height: 1.1764805882;
    padding: 22px;
    background-color:#0071e3;
    border:0px;
    border-radius:10px;
    color:white;
    height:30px;
    width:80px;
    text-align:center;
    align-items:center;
}
.button-save{
  cursor: pointer;
}

`
