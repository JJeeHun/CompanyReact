import React from 'react'
import './Edit.css'

const Edit = ({style ,text ,value,width}) => {  

  return (
    <div className='edit' style={{width}}>
        <div className='text' style={style}>{text}</div>
        <div className='input'>
          <input type="text" value={value}/>
        </div>
    </div>
  )
}

export default Edit