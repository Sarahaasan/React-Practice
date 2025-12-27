// import { useState } from "react"
const Buttons = ({buttons , togglebuttons}) => {




  return (
   <>
 
    <div className="pad-container">
     {
      buttons.map((item) => (
        <button 
        onClick={
            () => {
                togglebuttons(item.id);

              console.log(item.on);
            }
        }
        className={item.on ? "on" : "off"}
        key={item.id}
       style={{ backgroundColor:  item.color  }}

        >
        </button>
      ))
     }
    
    </div>
   
    </>
  )
}

export default Buttons
