import React from 'react'

const Cards = (props) => {
  return (
    <div class="relative overflow-hidden mb-8 w-100">
      <div class="rounded-l rounded-r hover:border-blue-900 border-l border-r border-t border-b border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white lg:rounded-b lg:rounded-l lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-700 text-base">{props.description}</p>
        </div>
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src={props.img}
            alt="Avatar of Developer" 
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none">{props.name}</p>
            <p class="text-gray-600">{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cards
