import Pads from "./Pads.js"
import { useState , useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa";
import Buttons from "./Buttons.jsx";
import "./App.css"
const App = () => {
  // array state to manage buttons
  const [buttons , setbuttons] = useState (Pads)

  // state to manage dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // toggle function to change button on/off status
  const togglebuttons = ( id ) => 
  {
    setbuttons (prevButtons =>
      prevButtons.map (button =>
        button.id === id ? { ...button, on: !button.on } : button 

      )
    )
  }
  // functions to turn all buttons off/on
  function TurnAll(isOn) {
    setbuttons (prevButtons =>
      prevButtons.map (button =>
        ({ ...button, on: isOn }) 
         
        )
      )
    }

// to apply dark/light mode class to body
  useEffect(() => {
  if (isDarkMode) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}, [isDarkMode]);

// for icon click to toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode );
  };
  return (
    <>
    {
      isDarkMode ? (
        <div className="icon" onClick={toggleDarkMode}>
          <FaSun color="yellow"/>
        </div>
      ) : (
        <div className="icon" onClick={toggleDarkMode}>
          <FaMoon color="black"/>
        </div>
      )
    }

    <main>
       <Buttons  buttons={buttons}  togglebuttons={togglebuttons} />
    </main>
  

       <div className="final-cont">
       <button className="final" onClick={() => TurnAll(true)}>Turn All Off</button>
       <button className="final" onClick={() => TurnAll(false)}>Turn All On</button>
        </div>
</>
  )

}

export default App
