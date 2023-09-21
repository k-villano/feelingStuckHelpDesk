import React, { useState, useEffect } from "react";
import Ticket from './Ticket.jsx';


const MainContainer = (props) => {

  

  const symButtonClickHandler =  async (e) => {
    //send help
    console.log('THIS ID', e.target.id)
    let i = e.target.id 

    try {
      const res = await fetch(`/tickets/sym/${props.tickets[i]._id}`, {
        method: 'PATCH'
      })
      console.log(res);
      props.getMyTickets();
    } catch (err) {
      console.log(`didn't send help`)
    }
}

  


  const helpButtonClickHandler =  async (e) => {
    //send help
    console.log('THIS ID', e.target.id)
    let i = e.target.id 

    try {
      const res = await fetch(`/tickets/help/${props.tickets[i]._id}`, {
        method: 'PATCH'
      })
      console.log(res);
      props.getMyTickets();
      props.helpClass[i] = 'slant small'
      props.setHelpClass([...helpClass])
    } catch (err) {
      console.log(`didn't send help`)
    }
}

const deleteClickHandler =  async (e) => {
  let i = e.target.id 
  console.log('this is iiiii', i)
  try {
    const res = await fetch(`/tickets/${props.tickets[i]._id}`, {
      method: 'DELETE'
    })
    console.log(res);
    props.getMyTickets();
  } catch (err) {
    console.log(`did not delete`)
  }
}


const ticArr = [];
for (let i = props.tickets.length-1; i >=0;  i--){
    ticArr.push(<Ticket 
      key={`ticket${i}`}
      ticket={props.tickets[i]} 
      i={i} 
      helpButtonClickHandler = {helpButtonClickHandler} 
      symButtonClickHandler = {symButtonClickHandler} 
      deleteClickHandler = {deleteClickHandler} 
      helpClass = {props.helpClass[i]}

      />)
}


//console.log(ticArr);

return(
  <div>
    {ticArr}
  </div>
 
);
};


export default MainContainer;