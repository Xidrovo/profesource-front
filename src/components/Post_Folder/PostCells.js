import React from 'react'
import { Link } from 'gatsby'
import CommentIcon from '@Icons/CommentIcon'
import FavIcon from '@Icons/FavIcon'
import TagIcon from '@Icons/TagIcon'

function PostCells(props) {
  // const [escrito, setEscrito] = useState('')
  // const handleInput = (evt) => {
  //   const { target } = evt
  //   const { value } = target

  //   setEscrito(value)
  // }

  return (
    <div className="md:ml-24 mb-20 border-solid border-2 border-gray-101 w-3/4 text-base h-auto ml-12" key={props.id}>
      <div className="space-x-4 mx-5 my-6 bg-transparent items-center">
        <div className="inline">
          <Link to="/profile/" className="inline-flex text-blue-102 font-bold ">
            @{props.username}
          </Link>
        </div>
        <div className="inline">
          <Link
            to='viewPost' state={{id: props.id, username: props.username, time: props.time, title: props.title,
            desc: props.desc, favs: props.favs, comments: props.comments, tags: props.tags, updated:false}}
            className="inline-flex text-blue-104 font-light"
          >{/**username="cxcarvaj"
          time="20 min"
          title="Mi primer post en profesource"
          desc="Hola, mi nombre es Carlos Carvajal y este es mi primer post desde profesource!"
          favs="10"
          comments="5"
          tags */}
            Hace {props.time}
          </Link>
        </div>
      </div>

      <div className="mx-4 my-8">
        <h2 className="text-blue-102 font-bold">{props.title}</h2>
        <div className="text-justify">
          <p className="pl-6 pr-6 font-normal text-black text-opacity-75">
            {props.desc}
          </p>
        </div>

        {/* <input
          className="break-all text-blue-103 font-normal"
          placeholder="Aquí va tu post"
          onChange={handleInput}
        ></input>
        {escrito && (
          <p className="break-all text-blue-103 font-normal">
            Tú post está aquí: {escrito}
          </p>
        )} */}
      </div>

      <div className="flex my-0 space-x-10 bg-gray-101">
        <div className="flex ml-4 align-middle ">
          <button className=" inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent">
            <FavIcon
              className="fill-current mr-2 text-blue-101 "
              width="15px"
            />
            <span className="text-blue-101 font-bold">{props.favs}</span>
          </button>
        </div>

        <div className="flex">
          <Link
            to="/viewPost/"
            className="inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent"
          >
            <CommentIcon
              className="fill-current mx-2 text-blue-101 "
              width="15px"
              color={'#52658f'}
            />
            <span className="text-blue-101 font-bold ">{props.comments}</span>
          </Link>
        </div>

        <div className="flex ">
          <button className="flex items-center  hover:bg-transparent focus:outline-none hover:border-transparent">
            <Link
              to="/page-2"
              className="inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent"
            >
              <TagIcon
                className="fill-current mx-2 text-blue-101"
                width="15px"
                color={'#52658f'}
              />

              <span className="flex-shrink break-all text-blue-101 font-bold ">
                {props.tags}
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostCells
