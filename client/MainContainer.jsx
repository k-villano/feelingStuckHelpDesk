import React, { useState, useEffect } from "react";
import Ticket from './Ticket.jsx';


const MainContainer = () => {
  const [tickets, setTickets] = useState([]);

  const getMyTickets = async () => {
    try {
    const res = await fetch('/tickets')
    console.log('A RESQEST WAS MADE')
    const data = await res.json();
    setTickets(data);
    } catch (err) {
       console.log('did not work')
    }
  }

  useEffect(() => {
    getMyTickets();
  }, []);



const ticArr = [];
for (let i = 0; i < tickets.length; i++){
    ticArr.push(<Ticket 
      key={`ticket${i}`}
      ticket={tickets[i]}/>)
}

return(
  <div>
    {ticArr}
  </div>
 
);
};


export default MainContainer;