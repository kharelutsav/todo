import { useState, useEffect } from 'react/cjs/react.development'
import Add from './Add'
// import Delete from './Delete'
import Display from './Display'
// import States from './States'
// import Update from './Update'

function Body() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('add')) || []);
    const [portal, setPortal] = useState('Display')

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

    return (
        <div className='Body'>
            {portal==="Add" && <Add state={[setData, setPortal]}/>}
            {portal==="Display" && <Display state={[data, setData, setPortal]}/>}
            {/* <Update /> */}
        </div>
    )
}

export default Body
