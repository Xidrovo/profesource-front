import React, { useState } from 'react'
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
    <div className="md:ml-24 border-solid border-2 border-gray-101 w-3/4 text-base h-auto ml-12 mb-24">
            <FilterPost/>
      <div className="space-x-4 mx-5 my-6 bg-transparent items-center">
        <div className="inline">
          <a className="user-link" href="#index.html">
            <h4 className="inline-flex text-blue-102 font-bold ">@{props.username} </h4>
          </a>

        </div>

        <h4 className="inline-flex text-blue-104 font-light ">Hace {props.time} horas </h4>
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
        <div className="inline ml-4 align-middle ">
          <button className=" inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
            <FavIcon
              className="fill-current mr-2 text-blue-101 "
              width="15px"
            />
            <span className="text-blue-101 font-bold" >{props.favs}</span>
          </button>
        </div>

        <div className="inline">
          <a className="inline-flex no-underline align-middle">
            <CommentIcon
              className="fill-current mx-2 text-blue-101 "
              width="15px"
              color={'#52658f'}
            />
            <span className="text-blue-101 font-bold ">{props.comments}</span>
          </a>
        </div>

        <div className="inline mr-4 align-middle">
          <button className="flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
            <TagIcon
              className="fill-current mx-2 text-blue-101 "
              width="15px"
              color={'#52658f'}
            />
            <span className="text-blue-101 font-bold">{props.tag}</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default PostCells;