import React from 'react'
import '../css/display.css'
import { FaMinus, FaEdit, FaPlus } from 'react-icons/fa'
import { MdOutlineDownloadDone } from 'react-icons/md'
import { FcExpired } from 'react-icons/fc'

function Display({data}) {
    return (
        <div className='disp-container'>
            <nav>
                <FaPlus className='fa-plus icons'/>
            </nav>
            {data.map(rec => {
                return (
                    <div className='disp-item'>
                        <span>
                            <FaMinus className='fa-minus icons'/>
                            <FaEdit className='fa-edit icons'/>
                            <MdOutlineDownloadDone className='md-done icons'/>
                            <FcExpired className='fc-exp icons'/>
                        </span>
                        <p><b>{rec[0]}</b></p>
                        <p>{rec[1]}</p>
                        <p>{rec[2]}</p>
                    </div>)
            })}
        </div>
    )
}

export default Display
