import React from 'react'
import { Link } from 'gatsby'
import CommentIcon from '@Icons/CommentIcon'
import FavIcon from '@Icons/FavIcon'

const SubComment = (props) => {
  return (
    <div className="border-solid border-l-2 border-r-2 border-b-2 border-gray-101 text-base h-auto mb-2">
      <div className="space-x-4 mx-5  bg-transparent items-center">
        <div className="inline">
          <Link
            to="/page-2/"
            className="inline-flex text-blue-102 font-bold text-sm "
          >
            @{props.username}
          </Link>
        </div>
        <div className="inline">
          <Link
            to="/viewPost/"
            className="inline-flex text-blue-104 font-light text-sm"
          >
            Hace {props.time}
          </Link>
        </div>
      </div>

      {/* Content of the comment */}
      <div className="mx-5 my-2">
        <p className="break-all text-blue-103 font-normal text-sm">
          {props.content}
        </p>
      </div>
      {/* Options share, comment, like*/}
      <div className="flex my-0 space-x-3 bg-transparent">
        <div className="flex ml-4 align-middle ">
          <button className=" inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent">
            <FavIcon
              className="fill-current mr-2 text-blue-101 "
              width="10px"
            />
            <span className="text-blue-101 font-bold text-sm">
              {props.favs}
            </span>
          </button>
        </div>

        <div className="flex">
          <button className="inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none  hover:border-transparent">
            <CommentIcon
              className="fill-current mx-2 text-blue-101 "
              width="10px"
              color={'#52658f'}
            />
            <span className="text-blue-101 font-bold text-sm">
              {props.comments}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubComment
