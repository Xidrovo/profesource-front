import React, { useState } from 'react'
import { Link } from "gatsby"
import CommentIcon from '@Icons/CommentIcon';
import FavIcon from '@Icons/FavIcon';
import TagIcon from '@Icons/TagIcon';
import FilterPost from '../components/FilterPost';

function PostCells(props) {
  const [escrito, setEscrito] = useState('')
  const handleInput = (evt) => {
    const { target } = evt
    const { value } = target

    setEscrito(value)
  }
  
  return (
    <div className="md:ml-24 border-solid border-2 border-gray-101 w-3/4 text-base h-auto ml-12 mb-10">
            
      <div className="space-x-4 mx-5 my-6 bg-transparent items-center">
        <div className="inline">
          <Link to='/page-2/' className='inline-flex text-blue-102 font-bold '>@{props.username}</Link>
        </div>
        <div className="inline">
          <Link to="/viewPost/" className="inline-flex text-blue-104 font-light" >Hace {props.time}</Link>
          
        </div> 
      </div>

      <div className="mx-4 my-8">
        <h2 className="text-blue-102 font-bold">{props.title}</h2>
        <input
          className="break-all text-blue-103 font-normal"
          placeholder="Aquí va tu post"
          onChange={handleInput}
        ></input>
        {escrito && (
          <p className="break-all text-blue-103 font-normal">
            Tú post está aquí: {escrito}
          </p>
        )}
      </div>

      <div className="flex my-0 space-x-10 bg-gray-101">
        <div className="flex ml-4 align-middle ">
          <button className=" inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
            <FavIcon
              className="fill-current mr-2 text-blue-101 "
              width="15px"
            />
            <span className="text-blue-101 font-bold" >{props.favs}</span>
          </button>
        </div>

        <div className="flex">
          <Link to='/viewPost/'className="inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
            <CommentIcon
              className="fill-current mx-2 text-blue-101 "
              width="15px"
              color={'#52658f'}
            />
            <span className="text-blue-101 font-bold ">{props.comments}</span>
          </Link>
        </div>

        <div className="flex ">
          <button className="flex items-center  hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
            
             <TagIcon
              className="fill-current mx-2 text-blue-101"
              width="15px"
              color={'#52658f'}
            /> 
            
              <span className="flex-shrink break-all text-blue-101 font-bold ">{props.tag}</span>
           
            
          </button>
        </div>
      </div>

    </div>
  )
}

export default PostCells;