import { useState } from "react";
import UseAthithya from "./Components/UseAthithyaHook";

function App(){

  const [state,setState] = useState("")

  const handleChange = (event) => {
    if(event.key === "Enter" && state.trim() !== ""){
      UseAthithya(state)
    }

  }
  return(
    <div>
      <input type="text" placeholder="Enter Something"
       id="inputBox" 
      onChange={(event)=> setState(event.target.value)}
       onKeyDown={handleChange} />

    </div>
  )
} 

export default App
