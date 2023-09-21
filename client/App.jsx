import React, { useState, useEffect }from "react";
import MainContainer from "./MainContainer.jsx";
import ContentContainer from "./ContentContainer.jsx"
import OptionsContainer from "./OptionsContainer.jsx";

const App = () => {
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


    return(
      <div>
        <h1>~Feeling Stuck Desk~</h1>
        <OptionsContainer tickets={tickets} getMyTickets={getMyTickets}/>
        <MainContainer tickets={tickets} getMyTickets={getMyTickets}/>
      </div>
    )
}

export default App;

//