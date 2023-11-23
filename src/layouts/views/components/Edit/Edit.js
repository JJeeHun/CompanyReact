import React, { useState } from 'react'
import './Edit.css'

const Edit = ({
  width,
  labelWidth=100,
  text ,
  value ,
  event = {
    onChange: function() {}
  }
}) => {

  return (
    <div className='edit' style={{width}}>
        <div className='text' style={{width: labelWidth}}>{text}</div>
        <div className='input' style={{width: `calc(100% - ${labelWidth}px)`}}>
          <input type="text" value={value} onChange={event.onChange}/>
        </div>
    </div>
  )
}

export default Edit