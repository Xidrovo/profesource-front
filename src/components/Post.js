import React, { useState } from 'react'
import TagIcon from '@Icons/TagIcon';

const Post = (props) => {
  return (
    <div className="md:ml-24 border-solid border-2 border-gray-101 w-3/4 text-base h-auto ml-12 mb-8 rounded-lg">

      <div className="space-x-4 mx-5 my-6 bg-transparent items-center">
        <div className="inline">
          <a className="user-link" href="#index.html">
          </a>

        </div>
      </div>

      <div className="mx-4 my-8">
        <h2 className="text-blue-102 font-bold">{props.title}</h2>
        <div class="box__title bg-grey-lighter px-3 py-2 border-b"><h3 class="text-md text-grey-darker font-medium">Tittle</h3></div>
        <textarea placeholder="Deseas postear algo?" class=" w-full border-2 text-grey-darkest flex-1 p-1 mr-48 bg-transparent resize-none max-w-full border-l-4" rows="6"></textarea>
      </div>
      <div className="flex my-0 space-x-10 bg-gray-101">
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

export default Post;