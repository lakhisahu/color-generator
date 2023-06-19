import Values from 'values.js'
import { useState } from 'react'
import './App.css'
import SingleColors from './SingleColors'
function App(){
    const [color,setColor]=useState('')
    const [list,setList]=useState([])
    const [err,setErr]=useState(false)
    function btnClick(){
        try {
            const colors = new Values(color).all(10)
            console.log(colors);
            setList(colors)
            setErr(false)
        } catch (error) {
            console.log(error)
            setErr(true)
        }
       
    }
    
    return(
        <>
            <h1>Color Generator</h1>
            <div className='container'>
                <input type='text' className={`${err?'red':null}`} onChange={e=>{setColor(e.target.value)}}/>
                <button onClick={btnClick}>Submit</button>
            </div>
            <div className='color'>
                {list.map(e=>{
                    return(
                        <SingleColors {...e}/>
                    )
                })}
            </div>

        
        </>
    )
}
export default App