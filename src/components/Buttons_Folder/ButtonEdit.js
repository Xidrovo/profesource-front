import React from 'react'

const ButtonEdit = (props) => {
  return (
    <div className="py-1 rounded-md bg-white shadow-xs">
      <button className="w-full"
        onClick={props.onClick}
      >
        <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
            {props.value}
        </span>
      </button>
    </div>
    
  )
}
export default ButtonEdit