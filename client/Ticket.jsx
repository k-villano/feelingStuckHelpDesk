import React from "react";

const Ticket = (props) => {
    let status = 'still need help';
    if (props.ticket.helpStatus === true){
        status = 'solved';
    }

    return(
        <div className="ticketCard">
            <ul>
              <li>im a ticket from {props.ticket.name}, </li> 
              <li>they need help with {props.ticket.category}</li>
              <li>their message - {props.ticket.message}</li> 
              <li>help status: {status}</li>
            </ul>
            <div className="resButtons">
              <button className="slant">send sympathy</button>
              <button className="slant">send help!</button>
            </div>
        </div>
    )
}

export default Ticket;