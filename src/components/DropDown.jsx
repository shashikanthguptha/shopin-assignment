import React from 'react'
import styled from "styled-components"
import { RiArrowDropDownLine } from "react-icons/ri";
const DropDown = (props) => {
  const {toggle, classValue } = props
  
  return (
    <DropdownContainer>
         <button className="dropbtn" onClick={toggle}>Collections <RiArrowDropDownLine/> </button>
                <div className ={`dropdown-content ${classValue}`}>
              <a href="#">Apple Watch Series 10</a><hr/>
              <a href="#">Apple Watch Hermes Series 10</a><hr/>
              <a href="#">Apple Watch SE</a>
            </div> 
           
    </DropdownContainer>
    

  )
}

export default DropDown

const DropdownContainer = styled.div`
  position:relative;
  display:inline-block;
  
  margin-top:60px;
  .dropbtn{
    font-size: 19px;  
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: transparent;
 
  cursor:pointer;
  }
  .dropdown:hover{
    background-color:transparent;
  }
  .dropdown-off{
    display:none;
  }
  .dropdown-on{
    display:block;
  }
  .dropdown-content {
    position: static;
  background-color: white;
  min-width: 160px;
  overflow:auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding:10px;
  border-bottom:10px;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  height:100%;
}

`