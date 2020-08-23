import React,{ useState } from 'react'
import { Link } from 'gatsby'
import CommentIcon from '@Icons/CommentIcon'
import FavIcon from '@Icons/FavIcon'
import OptionsIcon from '../../Icons/OptionsIcon'

const SubComment = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-solid border-l-2 border-r-2 border-b-2 border-gray-101 text-base h-auto mb-2">
      <div className="relative space-x-4 ml-5  bg-transparent items-center">
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
        <div>
            <div className="absolute top-0 right-0 py-1 pr-2">
              <button
                className="flex text-sm border-2 border-transparent rounded-full focus:outline-none transition duration-150 ease-in-out"
                id="options"
                aria-label="Options"
                aria-haspopup="true"
                onClick={() => {
                  setOpen(!open)
                }}
              >
                <OptionsIcon 
                    className="fill-current text-blue-101 "
                    width="30px"
                />
              </button>
            </div>
            {open && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Edit</span>
                    </div>
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Delete</span>
                    </div>
                  </div>
                )}
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
