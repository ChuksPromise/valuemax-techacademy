import React from 'react'

const CustomButton = ({text, thestyle}) => {
  return (
    <div>
      <button style={thestyle}>
         {text}
      </button>
    </div>
  )
}

export default CustomButton