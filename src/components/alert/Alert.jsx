import React from 'react'


import './alert.css'
const Alert = ({message}) => {
    
  return (
      
    <div className="alert-video-lib alert-position size-small">
        <p>
            {message}
        </p>
        
    </div>
  )
}

export default Alert