import React, { useState, useEffect }from "react";
import MainContainer from "./MainContainer.jsx";
import ContentContainer from "./ContentContainer.jsx"
import OptionsContainer from "./OptionsContainer.jsx";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [helpClass, setHelpClass] = useState([])

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

  const fillHelpClass = () => {
   let num = tickets.length - helpClass.length 
   let currlength = helpClass.length
   for (let i = 0; i < num; i++){
      if (!tickets[currlength + i].helpStatus){
        console.log('it was false')
        helpClass.push('slant ')
      } else {
       helpClass.push('nothing')
      }
   }
   setHelpClass([...helpClass])
  }

  useEffect(() => {
    fillHelpClass();
    console.log('THIS IS HELP CLASS', helpClass)
  }, [tickets])


    return(
      <div>
        <h1>~Feeling Stuck Desk~</h1>
        <OptionsContainer tickets={tickets} getMyTickets={getMyTickets}/>
        <MainContainer tickets={tickets} getMyTickets={getMyTickets} helpClass={helpClass} setHelpClass={setHelpClass}/>
      </div>
    )
}

export default App;

//