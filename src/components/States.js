import React from 'react'
import '../css/add_update.css'
import '../css/all.css'
import '../css/states.css'

function States(props) {
    const setPortal = props.state;
    return (
        <div className='disp-main'>
            <div className='fix-it'>
                TODOS
            </div>
            <div className='disp-container' style={{textAlign: "center", display:"flex", flexDirection:"column"}}>
                <div className='disp-item' 
                    style={{flex: "1 0 auto", marginBottom: "3vh", position: "relative"}}>
                    <p className='add-todo' onClick={()=> setPortal("Add")}>Add</p>
                </div>
            </div>
        </div>
    )
}

export default States

