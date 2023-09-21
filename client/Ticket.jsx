import React , { useState } from "react";

const Ticket = (props) => {
    

    let currClass1 = ''
    let currClass2 = 'slant '

    let status = 'still need help';
    if (props.ticket.helpStatus === true){
        currClass1 += ' italics'
        currClass2 += ' small'
        status = 'help sent!';
    } 

    return(
        <div className="ticketCard">
            <ul className="ticketText">
              <li>im a ticket from {props.ticket.name}, </li> 
              <li>they need help with {props.ticket.category}</li>
              <li>their message - {props.ticket.message}</li> 
              <li>help status: <span className={currClass1}>{status}</span></li>
              <li>{props.ticket.frowns}</li>
            </ul>
            <div className="resButtons">
              <button className="slant" id={props.i} onClick={props.symButtonClickHandler}>send sympathy</button>
              <button className={props.helpClass} id={props.i} onClick={props.helpButtonClickHandler}>send help!</button>
            </div>
            <span className="deleteButton" id={props.i} onClick={props.deleteClickHandler}>delete</span>
        </div>
    )
}

export default Ticket;