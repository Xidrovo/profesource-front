import React,{ useState } from 'react'
import { Link } from 'gatsby'
import CommentIcon from '@Icons/CommentIcon'
import FavIcon from '@Icons/FavIcon'
import SubComment from '@comments_f/SubComment'
import OptionsIcon from '../../Icons/OptionsIcon'

const Comment = (props) => {
  const [open, setOpen] = useState(false)
  let subcommentarios = {
    usernames: ['rmendoza', 'nlopez', 'jrodriguez', 'fcastillo'],
    time: [' 5 horas', '4 horas', '3 horas', '3 horas'],
    content: [
      'Bienvenido!',
      'La plataforma es de gran ayuda, saludos!',
      'Te acostumbrarás rápido',
      'Bienvenidos!',
    ],
    favs: ['0', '0', '1', '2'],
    comments: ['0', '0', '0', '0'],
  }

  return (
    <div className="md:ml-24  w-3/4 text-base h-auto ml-12 mb-10">
      <div className="border-solid border-2 mb-5 pt-2 border-gray-101 ">
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
                className="flex text-sm border-2 border-transparent focus:outline-none transition duration-150 ease-in-out"
                id="user-menu"
                aria-label="User menu"
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

        <div className="mx-5 my-2">
          <p className="break-word text-blue-103 font-normal text-sm">
            {props.content}
          </p>
        </div>

        <div className="flex mb-3 space-x-3 bg-transparent">
          <div className="flex ml-4 align-middle ">
            <button className=" inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
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
            <button className="inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
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

      <div className="flex-col space-y-3">
        {subcommentarios.usernames.map((usernames, i) => {
          return (
            <div className="ml-5">
              <SubComment
                username={usernames}
                time={subcommentarios.time[i]}
                content={subcommentarios.content[i]}
                comments={subcommentarios.comments[i]}
                favs={subcommentarios.favs[i]}
              ></SubComment>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Comment
