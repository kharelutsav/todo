import { useState, useEffect } from 'react/cjs/react.development'
import ReactDOM from 'react-dom'
import Add from './Add'
import Display from './Display'
import Update from './Update'
import States from './States'

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
            <Display state={[data, setData, setPortal]} indexs={setIndex}/>
            {
            portal==="Display" && 
            ReactDOM.createPortal(
                <States/>,
                document.getElementById("root1")
                )
            }
            {
            portal==="Add" && 
            ReactDOM.createPortal(
                <Add state={[setData, setPortal]}/>,
                document.getElementById("root1")
                )
            }
            {
            portal==="Update" && 
            ReactDOM.createPortal(
                <Update state={[data, setData, setPortal, data.length]} indexs={[index, setIndex]}/>,
                document.getElementById("root1")
                )
            }
        </div>
    )
}

export default Body
