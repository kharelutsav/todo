import { useState, useEffect } from 'react/cjs/react.development'
import Add from './Add'
import Display from './Display'
import Update from './Update'

function Body() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('add')) || []);
    const [portal, setPortal] = useState('Display')
    const [index, setIndex] = useState(0)

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

    return (
        <div className='Body'>
            {portal==="Add" && <Add state={[setData, setPortal]}/>}
            {portal==="Display" && <Display state={[data, setData, setPortal]} indexs={setIndex}/>}
            {portal==="Update" && <Update state={[data, setData, setPortal, data.length]} indexs={[index, setIndex]}/>}
        </div>
    )
}

export default Body
