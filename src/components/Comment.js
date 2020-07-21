import React from 'react'
import { Link } from 'gatsby'
import CommentIcon from '@Icons/CommentIcon'
import FavIcon from '@Icons/FavIcon'
import SubComment from './SubComment'

const Comment = (props) => {
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
