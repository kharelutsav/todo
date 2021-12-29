import React from 'react'
import { FaMinus, FaEdit } from 'react-icons/fa'
import { MdOutlineDownloadDone } from 'react-icons/md'

function Display({data}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>TODO</th>
                        <th>Date Added</th>
                        <th>Time Added</th>
                        <th>Severity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((prop, index)=>{
                        return (
                            <tr key={index}>
                                <td>{prop[0]}</td>
                                <td>{prop[1]}</td>
                                <td>{prop[2]}</td>  
                                <td>{prop[3]}</td> 
                                <td>
                                    <FaMinus className='icons'/>
                                    <FaEdit className='icons'/>
                                    <MdOutlineDownloadDone className='icons'/>
                                </td>
                            </tr>)
                        })}

                </tbody>
            </table>
        </div>
    )
}

export default Display
