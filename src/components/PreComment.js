import React from 'react';
import TagIcon from '@Icons/TagIcon'
import ImageIcon from '@Icons/ImageIcon'
import Button from '@components/Button'
import { Link } from "gatsby"



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
                  
            <div className="flex my-0 space-x-2 mr-6 ">
        
                <div className="flex mx-6 mb-4 align-middle">
                <button className="flex items-center space-x-2 bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent">
                    <ImageIcon
                        className="fill-current  text-blue-101"
                        width="15px"
                        color={'#52658f'}
                    />
                    <span className="text-blue-101 font-semibold text-sm " >Imagen</span>
                    </button>
                </div>

            </div>

            <div className="flex justify-end px-6 pt-2">
                
                {/* <Button indicator="Publicar" onClick={()=>{alert('Publicación exitosa')}}/> */}
                <Button
                indicator="Publicar"
                />
            </div>
        </div>
    )

}


export default PreComment;