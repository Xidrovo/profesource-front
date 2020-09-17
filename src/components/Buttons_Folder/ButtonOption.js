import React from 'react'
import OptionsIcon from '../../Icons/OptionsIcon'

const ButtonOption = (props) => {
  return (
    
      <button
        className="flex text-sm border-2 border-transparent focus:outline-none transition duration-150 ease-in-out"
        onClick={props.onClick}
      >
        <OptionsIcon 
            className="fill-current text-blue-101 "
            width="30px"
        />
      </button>
    
  )
}
export default ButtonOption