import React from 'react';
import { Link } from "gatsby"
import CommentIcon from '@Icons/CommentIcon';
import FavIcon from '@Icons/FavIcon';



const PreComment = (props) =>{
    return(

        <div className="md:ml-24 border-solid border-2  border-gray-101 w-3/4 text-base h-auto ml-12 mb-10">
            <div className="space-x-4 mx-5 my-6 bg-transparent items-center">
                <div className="flex space-x-2">
                    <h5 className="text-xs text-gray-500 font-normal">Estás comentando como </h5>
                    <Link to="/page-2/" className="text-xs text-gray-600 font-normal">@{props.username}</Link>
                </div>
            </div>
            <div className="mx-4 my-4">
            <textarea
                id="text-area-comment"
                placeholder="¿Qué opinas?"
                class=" w-full border-2 text-grey-darkest flex-1 p-1 bg-transparent resize-none max-w-full border-l-4"
                rows="6">
            </textarea>
            </div>
        </div>
    )

}


export default PreComment;