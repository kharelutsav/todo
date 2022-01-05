import '../css/add_update.css';
import '../css/update.css';
import '../css/all.css';
import React, { useEffect, useState } from 'react'
import { FaExclamation } from 'react-icons/fa'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { ImCross } from 'react-icons/im'
import { GrUpdate } from 'react-icons/gr'

function Update(props) {
    const [data, setData, setPortal, count] = props.state
    const [index, setIndex] = props.indexs
    const [changedData, setChangedData] = useState(JSON.parse(JSON.stringify(data)))
    const [newData, setNewData] = useState(changedData[index])
    const [input, setInput] = useState(newData[0])
    const [desc, setDesc] = useState(newData[5])
    const [severity, setSeverity] = useState(newData[3])
    const [expiry, setExpiry] = useState(newData[4])

    useEffect(() => {
        setInput(newData[0])
        setDesc(newData[5])
        setSeverity(newData[3])
        setExpiry(newData[4])
        // return () => {
        //     cleanup
        // }
    }, [newData])

    const updateData = () => {
        if (input === "") {
            return alert('You can not leave name field empty.')
        }
        const records = [input, newData[1], newData[2], severity, expiry, desc, newData[6]]
        
        setData( rec => {
            rec.splice(index, 1, records)
            return rec
        })
        setPortal('Display')
    }
    return (
        <div className='disp-main'>
            <div className='fix-it'>
                <span>TODOS</span>
                <div className='add-icons update-icons'>
                    <span>
                        <GrUpdate className='fa-plus icons' onClick={updateData}/>
                    </span>
                    <span>
                        <FaExclamation className='fa-plus icons'/>
                    </span>
                    <span>
                        <ImCross className='fa-plus icons' onClick={()=>setPortal('Display')}/>
                    </span>
                </div>
            </div>
            <div className='disp-container'>
                <span>
                    <FcPrevious className='fa-plus icons prev-ic' style={{backgroundColor: index > 0 ? "" : "lightgrey" }} onClick={()=>{
                        if (index > 0) {
                            const records = [input, newData[1], newData[2], severity, expiry, desc, newData[6]]
                            setChangedData( rec => {
                                rec.splice(index, 1, records)
                                return rec
                            })
                            setNewData(changedData[index-1])
                            return setIndex(index - 1)
                        }
                        return
                        }}/>
                </span>
                <span>
                    <FcNext className='fa-plus icons next-ic' style={{backgroundColor: index < count-1 ? "" : "lightgrey"}} onClick={()=>{
                        if (index < count-1) {
                            const records = [input, newData[1], newData[2], severity, expiry, desc, newData[6]]
                            setChangedData( rec => {
                                rec.splice(index, 1, records)
                                return rec
                            })
                            setNewData(changedData[index+1])
                            return setIndex(index + 1)
                        }
                        return
                        }}/>
                </span>
                <div className= 'disp-item'>
                    <input placeholder='Enter a new todo.' value={input} onInput={e => setInput(e.target.value)} className='inp-todo'/>
                    <span className='severity'>
                        <p>Severe</p>
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
                        <p>Expiry</p>
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
        </div>    
    )
}

export default Update
