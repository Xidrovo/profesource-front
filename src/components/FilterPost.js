import React, { useState } from 'react'
import FavIcon from '@Icons/FavIcon';
import RecentIcon from '@Icons/RecentIcon';

function FilterPost(){

    return(
        <div className="flex items-center space-x-2 border-solid border-2 border-gray-101 w-auto bg-gray-101 text-sm h-auto mx-10 my-5 rounded-lg justify-center">
            <div className="inline-flex py-1 ml-2">
                    <button className="flex items-center bg-white border-gray-104 px-4 rounded-full hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
                        <span className="text-blue-105 font-bold text-xs md:text-base">Todo</span>
                    </button>
                </div>

                <div className="inline mr-4 align-middle">
                    <button className="flex md:mx-32 items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
                        <RecentIcon
                        className="fill-current mx-4 md:mx-2 text-gray-103 "
                        width="15px"
                        ></RecentIcon>
                        <span className="text-gray-103 font-bold text-xs md:text-base hidden md:block">Reciente</span>
                    </button>
                </div>
                <div className="inline mr-4 align-middle">
                    <button className="flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
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

export default FilterPost;