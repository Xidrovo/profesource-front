import React from 'react'
import FavIcon from '@Icons/FavIcon'
import RecentIcon from '@Icons/RecentIcon'

function FilterPost() {

  return(
        
        <div className="md:ml-24 flex items-center space-x-2 border-solid border-2 border-gray-101 w-3/4 bg-gray-101 text-sm h-auto ml-12 my-5 rounded-lg justify-center">
            <div className="inline-flex py-1 ml-2  justify-center">
                    <button className="flex items-center bg-white px-4 border-gray-104  rounded-lg hover:bg-transparent focus:outline-none hover:border-transparent">
                        <span className="text-blue-105 font-bold text-xs md:text-base">Todo</span>
                    </button>
                </div>

                <div className="inline-flex w-1/3 justify-center">
                    <button className="flex  items-center bg-transparent hover:bg-transparent focus:outline-none  hover:border-transparent">
                        <RecentIcon
                        className="fill-current mx-4 md:mx-2 text-gray-103 "
                        width="15px"
                        ></RecentIcon>
                        <span className="text-gray-103 font-bold text-xs md:text-base hidden md:block">Reciente</span>
                    </button>
                </div>
                <div className="inline-flex w-1/3  justify-center">
                    <button className="flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent">
                        <FavIcon
                        className="fill-current mx-4 md:mx-2 text-gray-103 "
                        width="15px"
                        ></FavIcon>
                        <span className="text-gray-103 font-bold text-xs md:text-base hidden md:block">Populares</span>
                    </button>
                </div>
            

        </div>
    )
}
export default FilterPost