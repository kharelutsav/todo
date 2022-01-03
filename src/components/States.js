import React from 'react'
import '../css/add_update.css'
import '../css/states.css'

function States(props) {
    const setPortal = props.props;
    return (
        <div className='disp-container' style={{textAlign: "center", display:"flex", flexDirection:"column"}}>
            <div className='add-icons update-icons' style={{color: "white"}}>
                react todo app
            </div>
            <div className='disp-item' 
                style={{flex: "1 0 auto", marginBottom: "3vh", position: "relative", opacity: "0.5"}}>
                <p className='add-todo' onClick={()=>{setPortal("Add")}}>Add</p>
            </div>
        </div>
    )
}

export default States

