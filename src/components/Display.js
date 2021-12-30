import React from 'react'
import '../css/display.css'
import { FaMinus, FaEdit, FaPlus } from 'react-icons/fa'
import { MdOutlineDownloadDone } from 'react-icons/md'
// import { FcExpired } from 'react-icons/fc'

function Display(props) {
    const [data, setData] = props.state;

    const removeData = (e) => {
        setData(data => {
            data.splice(e.target.getAttribute('value'), 1)
            return [...data]
        })
    }
    return (
        <div className='disp-container'>
            <nav>
                <FaPlus className='fa-plus icons'/>
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
                                {/* <FcExpired className='fc-exp icons'/> */}
                        </div>                      
                        <p className='todo-name'>{rec[0]}</p>
                        <p className='other-text'>{rec[1]} {rec[2]}</p>
                    </div>)
            })}
        </div>
    )
}

export default Display
