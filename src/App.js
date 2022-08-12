import { useState } from 'react';
import './App.css';

function App() {
  const [handle, setHandle] = useState([false, false, false])
  function doTheTrick(e, theClickedOne) {
    console.log(e.target.checked, theClickedOne)
    if(theClickedOne == "good"){
      setHandle(() => [!handle[0], handle[1], handle[2]])
    }
    if(theClickedOne == "fast"){
      setHandle(() => [handle[0], !handle[1], handle[2]])
    }
    if(theClickedOne == "cheap"){
      setHandle(() => [handle[0], handle[1], !handle[2]])
    }
      if(handle[0] && handle[1]){
        setHandle(() => [false, true, true])
      } else if (handle[1] && handle[2]){
        setHandle(() => [true, false, true])
      } else if(handle[0] && handle[2]){
        setHandle(() => [true, true, false])
      }
  }
  return (
   <>  <div class="container">

   <div class="toggle-container">
     <input type="checkbox" id="good" class="toggle" checked = {handle[0]} onClick={(e)=> doTheTrick(e, "good")}/>
     <label for="good" class="label" id="good">
       <div class="ball"></div>
     </label>
     <span className='text'>Good</span>
   </div>

   <div class="toggle-container">
     <input type="checkbox" id="fast" class="toggle" checked = {handle[1]} onClick={(e)=> doTheTrick(e,"fast")}/>
     <label for="fast" class="label" id="fast">
       <div class="ball"></div>
     </label>
     <span className='text'>Fast</span>
   </div>

   <div class="toggle-container">
     <input type="checkbox" id="cheap" class="toggle" checked = {handle[2]} onClick={(e)=> doTheTrick(e, "cheap")}/>
     <label for="cheap" class="label" id="cheap">
       <div class="ball"></div>
     </label>
     <span className='text'>Cheap</span>
   </div>
 </div>
</>
  );
}

export default App;