import React from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import '../css/update.css'
import { useState } from 'react'

function Update() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    return (
        <div className='Update'>
            <header className='update-header'>
                <FcPrevious className='prev-icon'/>
                {title}
                <FcNext className='next-icon'/>
            </header>

            <div>
                <div className='update-description-info'>
                    <input id='name' placeholder='Name of....' value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea className='description-area' value={desc} onChange={e => setDesc(e.target.value)} placeholder='Descriptions of your task....'></textarea>
                </div>
            </div>

            <footer className='update-footer'>
                Dedication. My foot.
            </footer>
        </div>
    )
}

export default Update
