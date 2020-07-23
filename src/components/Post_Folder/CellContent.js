import React from 'react'
import FavIcon from '@Icons/FavIcon'
import CommentIcon from '@Icons/CommentIcon'

const CellContent = (props) => {
  return (
    <div className="border-2 border-gray-101 rounded-lg space-y-5 my-2">
      <div className="content-center m-5  space-y-2">
        <h5 className="text-base text-blue-104 font-semibold">{props.title}</h5>
        <p className="text-sm text-justify text-blue-103">{props.content} </p>
      </div>

      <div className="flex py-1 space-x-10 pb-2">
        <div className="flex ml-4 align-middle ">
          <FavIcon className="fill-current mr-2 text-gray-103" width="12px" />
          <span className="text-gray-103  text-sm">{props.favs}</span>
        </div>

        <div className="flex ml-4 align-middle ">
          <CommentIcon
            className="fill-current mr-2 text-gray-103"
            width="12px"
          />
          <span className="text-gray-103 text-sm">{props.comments}</span>
        </div>
      </div>
    </div>
  )
}

export default CellContent
