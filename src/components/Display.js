import React from 'react';
import '../css/display.css'
import { FaMinus, FaEdit, FaPlus } from 'react-icons/fa'
import { MdOutlineDownloadDone } from 'react-icons/md'

function Display(props) {
    const [data, setData, setPortal] = props.state;

    const removeData = (e) => {
        setData(data => {
            const index = e.target.getAttribute('value')
            let rec = [...data]
            if (index){
                rec.splice(index, 1)
                return [...rec]
            }
            return [...data]
        })
    }

    return (
        <div className='disp-container'>
            <nav>
                <FaPlus className='fa-plus back-icon' onClick={()=>setPortal("Add")}/>
            </nav>
            {data.map((rec,index) => {
                return (
                    <div className='disp-item' key={index}>
                        <div className='all-icons'>
                            <span className='span-ic'>
                                <FaMinus className='fa-minus icons ic' onClick={removeData} value={index}/>
                            </span>
                            <span className='span-ic'>
                                <FaEdit className='fa-edit icons ic' value={index}/>
                            </span>
                            <span className='span-ic'>
                                <MdOutlineDownloadDone className='md-done icons ic' value={index}/>
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
