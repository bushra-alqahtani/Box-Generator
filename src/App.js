import './App.css';
import React, { useState } from 'react';
//import MessageForm from './Components/MessageForm';
//import MessageDisplay from './Components/MessageDisplay';
import ColorsBox from './Components/ColorsBox'

function App() {
const [color,setColor]=useState("");
const [colorArray,setColorArray]=useState([]);

function handelColors(e){
  setColor(e.target.value);
}
function addColors(e){
setColorArray([...colorArray,color])
}

  return (
      <div className='App'>
        <span>enter color</span>
        <input value={color} onChange={handelColors} type="text" name="color"/>&nbsp;
        <button onClick={addColors}>Create a box</button>
        <div style={{display:"flex", justifyContent:"center"}}>
          {colorArray.map((color,index)=> <ColorsBox color={color}/>)}
       
        </div>
         
          
      </div>
  );
}

export default App;
