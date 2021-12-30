import React from 'react';
import '../css/display.css'
import { FaMinus, FaEdit, FaPlus } from 'react-icons/fa'
import { MdOutlineDownloadDone } from 'react-icons/md'

function Display(props) {
    const [data, setData, setPortal] = props.state;
    const setIndex = props.indexs

    return (
        <div className='disp-container'>
            <nav>
                <FaPlus className='fa-plus back-icon' onClick={()=>setPortal("Add")}/>
            </nav>
            {data.map((rec,idx) => {
                return (
                    <div className='disp-item' key={idx}>
                        <div className='all-icons'>
                            <span className='span-ic'>
                                <FaMinus className='fa-minus icons ic' onClick={()=>{setData(Data => {
                                                                                        let data = [...Data];
                                                                                        data.splice(idx, 1);
                                                                                        return [...data];
                                                                                    }); setIndex(idx);}}/>
                            </span>
                            <span className='span-ic'>
                                <FaEdit className='fa-edit icons ic' onClick={()=>{setPortal("Update"); setIndex(idx);}}/>
                            </span>
                            <span className='span-ic'>
                                <MdOutlineDownloadDone className='md-done icons ic'/>
                            </span>
                        </div>                      
                        <p className='todo-name'>{rec[0]}</p>
                        <p className='other-text'>{rec[1]} {rec[2]}</p>
                    </div>)
            })}
        </div>
    )
}

export default Display
