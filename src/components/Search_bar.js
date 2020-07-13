import React from 'react'
import MagnifierIcon from '@Icons/MagnifierIcon'

const Search_bar = (props) => {
  return (
    <div class="pr-8 flex justify-between my-4 ml-8 w-1/2">
      <div class="flex-1 flex">
        <div class="w-full flex md:ml-0">
          <label for="search_field" class="sr-only">
            Search
          </label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <div className="text-gray-600 my-auto">
                <MagnifierIcon
                  className="fill-current ml-2 my-auto"
                  color={'#ffd700'}
                  width="20px"
                  height="20px"
                />
              </div>
            </div>
            <input
              id="search_field"
              class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Search_bar
