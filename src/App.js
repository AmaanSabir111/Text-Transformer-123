import React, { useState } from 'react'

import './App.css';
import Firstrc from './Firstrc';
import FormI from './FormI';
import AlertS from './AlertS';
import AB from './AB';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [ldm, setldm] = useState("light");
  const [aller, setAller] = useState(null);
  const na = (msg, typ) => {
    setAller({
      message: msg,
      type: typ

    })
    setTimeout(() => {
      setAller(null);

    }, 1500);

  }
  const [btnColor, setbtnColor] = useState("primary");
  const bb = () => {

    if (ldm === "light") {
      setldm("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      na("Dark Mode Has Been Enabled", "success");
      setbtnColor("dark");



    }
    else {
      setldm("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      na("Light Mode Has Been Enabled", "success");
      setbtnColor("primary");
    }
  }

  const bbutton = () => {

    if (ldm === "light") {
      setldm("dark");
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
      na("Blue Mode Has Been Enabled", "success");
      setbtnColor("info");



    }
    else {
      setldm("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      na("Light Mode Has Been Enabled", "success");
      setbtnColor("primary");

    }


  }
  const rbtn = () => {
    if (ldm === "light") {
      setldm("dark");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
      na("Red Mode Has Been Enabled", "success");
      setbtnColor("danger");


    }
    else {
      setldm("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      na("Light Mode Has Been Enabled", "success");
      setbtnColor("primary");
    }
  }
  const gbtn = () => {
    if (ldm === "light") {
      setldm("dark");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
      setbtnColor("success");
      na("Green Mode Has Been Enabled", "success");


    }
    else {
      setldm("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setbtnColor("primary");
      na("Light Mode Has Been Enabled", "success");

    }
  }
  return (
    <>
       {/* <Router>  */}
       <Firstrc brand="My-App" enable={btnColor} onc3={gbtn} onc2={rbtn} onc={bbutton} contact="Contact" about="About" m={ldm} btnf={bb} />
       <AlertS al={aller} />
       <FormI hea="Enter Text To Count Words,Characters and Transform text" btnC={btnColor} btnm={na} sred={btnColor}/>
         {/* <Routes>
          <Route exact path="/a"
            element={<AB ama={btnColor} />} />
          <Route exact path="/"
            element={<FormI hea="Enter Text To Count Words,Characters and Transform text" btnC={btnColor} btnm={na} sred={btnColor}/>} 
          />
          <Route exact path="/Text-Transformer-123"
            element={<FormI hea="Enter Text To Count Words,Characters and Transform text" btnC={btnColor} btnm={na} sred={btnColor}/>} 
          />



        </Routes>

      </Router>  */}



    </>
  );
}

export default App;
