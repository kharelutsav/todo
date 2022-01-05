import React, {useState, useEffect} from 'react';
import '../css/display.css'
import '../css/all.css'
import { FaMinus, FaEdit } from 'react-icons/fa'
import { MdOutlineDownloadDone } from 'react-icons/md'

const Used = (props)=>{
    const [rec, idx, data, setData, setIndex, setPortal] = props.props
    const [marked, setMarked] = useState(false);
    useEffect(() => {
        setMarked(rec[6])
    }, [rec])
    return (
        <div className='disp-left-item disp-left-item-hover'>
            <div className='all-icons'>
                <span className='span-ic'>
                    {marked && <FaMinus className='fa-minus icons ic' onClick={()=>{
                        setData(Data => {
                            let data = [...Data];
                            data.splice(idx, 1);
                            return [...data];
                        });
                        }}/>}
                    {!marked && <FaMinus className='fa-minus icons ic' style={{backgroundColor: "lightgrey"}}/>}
                </span>
                <span className='span-ic'>
                    {!marked && <FaEdit className='icons ic' onClick={()=>{setPortal("Update"); setIndex(idx);}}/>}
                    {marked && <FaEdit className='icons ic' style={{backgroundColor: "lightgray"}}/>}
                </span>
                <span className='span-ic'>
                    <MdOutlineDownloadDone className='icons ic' onClick={()=>{
                        setMarked(!marked);
                        rec.splice(6,1,!marked)
                        data.splice(idx, 1, rec);
                        localStorage.setItem('add', JSON.stringify(data))
                        }} style={{backgroundColor: marked ? "green" : ""}}/>
                </span>
            </div>
            {/* <hr/> */}
            <span className="span-desc" title={rec[5]}>
                <p className='todo-name'>{rec[0]}</p>
                <hr/>
                <p className='other-text'>{rec[1]} {rec[2]}</p>
            </span>
        </div>                      
    )
}

function Display(props) {
    const [data, setData, setPortal] = props.state;
    const setIndex = props.indexs

    return (
        <div className='disp-main'>
            <div className='fix-it'>
                TODOS
            </div>
            <div className='disp-left-container'>
                {data.map((rec,idx) => {
                    return (
                        <Used props={[rec, idx, data, setData, setIndex, setPortal]} key={idx}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Display
