import React, {useState} from 'react';
import '../css/display.css'
import { FaMinus, FaEdit, FaPlus } from 'react-icons/fa'
import { MdOutlineDownloadDone } from 'react-icons/md'

const Used = React.memo((props)=>{
    const [rec, idx, data, setData, setIndex, setPortal] = props.props
    const [marked, setMarked] = useState(rec[6]);
    return (
        <div className='disp-item'>
            <div className='all-icons'>
                <span className='span-ic'>
                    {marked && <FaMinus className='fa-minus icons ic' onClick={()=>{setData(Data => {
                                                                            let data = [...Data];
                                                                            data.splice(idx, 1);
                                                                            return [...data];
                                                                        }); setIndex(idx);}}/>}
                    {!marked && <FaMinus className='fa-minus ic' style={{color: "rgb(52, 156, 247)", backgroundColor: "lightgrey"}}/>}
                </span>
                <span className='span-ic'>
                    {!marked && <FaEdit className='fa-edit icons ic' onClick={()=>{setPortal("Update"); setIndex(idx);}}/>}
                    {marked && <FaEdit className='fa-edit icons ic' style={{backgroundColor: "lightgray"}}/>}
                </span>
                <span className='span-ic'>
                    <MdOutlineDownloadDone className='md-done icons ic' onClick={()=>{
                        setMarked(!marked);
                        rec.splice(6,1,!marked)
                        data.splice(idx, 1, rec);
                        localStorage.setItem('add', JSON.stringify(data))
                        }} style={{backgroundColor: marked ? "green" : ""}}/>
                </span>
            </div>
            <span className="span-desc" title={rec[5]}>
                <p className='todo-name'>{rec[0]}</p>
                <p className='other-text'>{rec[1]} {rec[2]}</p>
            </span>
        </div>                      
    )
})

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
                    <Used props={[rec, idx, data, setData, setIndex, setPortal]} key={idx}/>
                )
            })}
        </div>
    )
}

export default Display
