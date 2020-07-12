import React from 'react'


const Button = (props) =>{
        return (
            <div>
                <button className="bg-blue-106 hover:bg-blue-103 text-white text-sm font-bold py-2 px-4 rounded ml-4 mb-2" onClick={props.onClick}>
                    {props.indicator}
                </button>
            </div>
        );}
export default Button;



