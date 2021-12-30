import '../css/add.css'
import { useState } from 'react'
import { FaPlus, FaExclamation } from 'react-icons/fa'
// import { MdOutlineDownloadDone } from 'react-icons/md'
import { ImCross } from 'react-icons/im'

function Add(props) {
    const [input, setInput] = useState('')
    const [option, setOption] = useState('Low')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [setData, setPortal] = props.state

    const time = new Date().toLocaleTimeString()
    const date = new Date().toDateString()

    const addData = () => {
        if (input === "") {
            return alert('Input can not be empty.')
        }
        const records = [input, date, time, option]
        setData( rec => [...rec, records])
        setPortal('Display')
        // setInput('')
    }

    return (
        <div className='disp-container'>
            <div className='add-icons'>
                <span>
                    <FaPlus className='fa-plus icons' onClick={addData}/>
                </span>
                <span>
                    <FaExclamation className='fa-plus icons'/>
                </span>
                <span>
                    <ImCross className='fa-plus icons' onClick={()=>setPortal('Display')}/>
                </span>
            </div>
            <div className= 'disp-item'>
                <input placeholder='Enter a new todo.' value={input} onInput={e => {setInput(e.target.value); setTitle(e.target.value);}} className='inp-todo'/>
                <button className='button'>Add</button>
            </div>
            <div className='disp-item'>
                <textarea className='description-area' value={desc} onChange={e => setDesc(e.target.value)} placeholder='Descriptions of your task....'></textarea>
            </div>
            <div className='disp-item'>
                <p className='footer'>Dedication. My foot.</p>
            </div>
        </div>    
    )
}

export default Add
