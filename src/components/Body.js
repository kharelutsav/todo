import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import Add from './Add'
import Delete from './Delete'
import Display from './Display'
// import States from './States'
// import Update from './Update'

function Body() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('add')) || []);

    useEffect(() => {
        localStorage.setItem('add', JSON.stringify(data))
    })

    const fetchData = () => {
        if (!localStorage.getItem('add')){
            localStorage.setItem('add', JSON.stringify([]))
        }
    }

    window.addEventListener('load', ()=>{
        fetchData()
    })

    window.addEventListener('storage', ()=>console.log(localStorage.getItem('add')))
    
    // const deleteData = () => {}

    return (
        <div className='Body'>
            {/* <Add state={setData}/>
            <Display data={data}/> */}
            {/* <Update /> */}
            {/* <States /> */}
            <Delete />
        </div>
    )
}

export default Body
