import React from 'react'
import '../css/add.css'
import { useState } from 'react'

function Add(props) {
    const [input, setInput] = useState('')
    const [option, setOption] = useState('Low')
    const setData = props.state

    const time = new Date().toLocaleTimeString()
    const date = new Date().toDateString()

    const addData = () => {
        if (input === "") {
            return alert('Input can not be empty.')
        }
        const records = [input, date, time, option]
        setData( rec => [...rec, records])
        setInput('')
    }

    return (
        <div>
            <input placeholder='Enter a new todo.' value={input} onInput={e => setInput(e.target.value)} className='inp-todo'/>
            <br/>
            <select value={option} onChange={e=>setOption(e.target.value)}>
                <option>Critical</option>
                <option>High</option>
                <option>Moderate</option>
                <option>Low</option>
            </select>
            <button onClick={addData}>Add</button>
        </div>
    )
}

export default Add
