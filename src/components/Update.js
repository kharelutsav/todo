import '../css/add_update.css';
import '../css/update.css';
import { useState } from 'react'
import { FaExclamation } from 'react-icons/fa'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { ImCross } from 'react-icons/im'
import { GrUpdate } from 'react-icons/gr'

function Update(props) {
    const [data, setData, setPortal, count] = props.state
    const [index, setIndex] = props.indexs
    const prevData = data[index];
    const [input, setInput] = useState(prevData[0])
    const [desc, setDesc] = useState(prevData[5])
    const [severity, setSeverity] = useState(prevData[3])
    const [expiry, setExpiry] = useState(prevData[4])

    const updateData = () => {
        if (input === "") {
            return alert('You can not leave name field empty.')
        }
        const records = [input, prevData[1], prevData[2], severity, expiry, desc, prevData[6]]
        
        setData( rec => {
            rec.splice(index, 1, records)
            return rec
        })
        setPortal('Display')
    }
    return (
        <div className='disp-container update'>
            <div className='add-icons'>
                <span>
                    <FcPrevious className='fa-plus icons prev-ic' onClick={()=>{
                        if (index > 0) {
                            return setIndex(index - 1)
                        }
                        return
                        }}/>
                </span>
                <span>
                    <GrUpdate className='fa-plus icons' onClick={updateData}/>
                </span>
                <span>
                    <FaExclamation className='fa-plus icons'/>
                </span>
                <span>
                    <ImCross className='fa-plus icons' onClick={()=>setPortal('Display')}/>
                </span>
                <span>
                    <FcNext className='fa-plus icons next-ic' onClick={()=>{
                        console.log(index);
                        if (index < count-1) {
                            return setIndex(index + 1)
                        }
                        return
                        }}/>
                </span>
            </div>

            <div className= 'disp-item'>
                <input placeholder='Enter a new todo.' value={input} onInput={e => setInput(e.target.value)} className='inp-todo'/>
                <span className='severity'>
                    <p>Severity</p>
                    <FiMinus className='fi-ic' onClick={()=>{
                        if (severity > 1){
                            return setSeverity(severity-1)
                        }
                        return
                        }}/>
                    <button id='severity' disabled>{severity}</button>
                    <FiPlus className='fi-ic' onClick={()=>{
                        if (severity < 5){
                            return setSeverity(severity+1)
                        }
                        return
                        }}/>
                </span>
                <span className='expire-on'>
                    <p>Expire-on</p>
                    <FiMinus className='fi-ic' onClick={()=>{
                        if (expiry > 1){
                            return setExpiry(expiry-1)
                        }
                        return
                        }}/>
                    <button id='expiry' disabled>{expiry} {expiry === 1 ? 'Day': 'Days'}</button>
                    <FiPlus className='fi-ic' onClick={()=>{
                        if (expiry < 14){
                            return setExpiry(expiry+1)
                        }
                        return
                        }}/>
                </span>
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

export default Update
