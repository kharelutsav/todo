import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Add from './components/Add'
import Display from './components/Display'
import States from './components/States'
import Update from './components/Update'

import './App.css';

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('add')) || []);
  const [portal, setPortal] = useState('Display')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    localStorage.setItem('add', JSON.stringify(data))
  })

  const fetchData = () => {
    if (!localStorage.getItem('add')){
      localStorage.setItem('add', JSON.stringify([]))
    }
  }

  window.addEventListener('load', ()=>{
    fetchData()
  })

  return (
    <div className="App" id="App">
      {data.length !== 0 && <Display state={[data, setData, setPortal]} indexs={setIndex}/>}
      {
      portal==="Display" && 
      ReactDOM.createPortal(
        <States state={setPortal}/>,
        document.getElementById("root1")
        )
      }
      {
      portal==="Add" && 
      ReactDOM.createPortal(
        <Add state={[setData, setPortal]}/>,
        document.getElementById("root1")
        )
      }
      {
      portal==="Update" && 
      ReactDOM.createPortal(
        <Update state={[data, setData, setPortal, data.length]} indexs={[index, setIndex]}/>,
        document.getElementById("root1")
        )
      }
    </div>
  );
}

export default App;
