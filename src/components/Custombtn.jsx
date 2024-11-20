import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'


const Custombtn = ({title , customStyles , type , handleClick}) => {
    const snap  = useSnapshot(state)
    const generateStyle =(type)=>{
     if(type == "filled"){
        return{
            background:snap.color,
            color:"#ffffff"
        }
     }
    }
  return (
    <button className={`px-2 py-2 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>
        {title}
    </button>
  )
}

export default Custombtn