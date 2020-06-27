import React, { useState } from 'react'
import FavIcon from '@Icons/FavIcon';
import RecentIcon from '@Icons/RecentIcon';

function FilterPost(){

    return(
        <div className="md:ml-24 flex items-center space-x-2 border-solid border-2 border-gray-101 bg-gray-101  w-3/4 text-sm h-auto ml-12 mt-7 mb-5">
            <div className="inline-flex py-1 ml-2">
                    <button className="flex items-center bg-white border-gray-104 px-4 rounded-full hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
                        <span className="text-blue-105 font-bold">Todo</span>
                    </button>
                </div>

                <div className="inline mr-4 align-middle">
                    <button className="flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
                        <RecentIcon
                        className="fill-current mx-2 text-gray-103 "
                        width="15px"
                        ></RecentIcon>
                        <span className="text-gray-103 font-bold">Reciente</span>
                    </button>
                </div>
                <div className="inline mr-4 align-middle">
                    <button className="flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
                        <FavIcon
                        className="fill-current mx-2 text-gray-103 "
                        width="15px"
                        ></FavIcon>
                        <span className="text-gray-103 font-bold">Populares</span>
                    </button>
                </div>
            

        </div>
    )
}

export default FilterPost;