import React from 'react'
import CommentIcon from '@Icons/CommentIcon';
import FavIcon from '@Icons/FavIcon';
import TagIcon from '@Icons/TagIcon';

function Post(){
    return(
        <div className="border-solid border-2 border-gray-101 w-2/4 text-base h-auto">
                
                <div className="space-x-4 mx-5 my-6 bg-transparent">
                  <div className="inline">
                    <a className="user-link" href="#index.html">
                      <h4 className="inline-flex  text-blue-102 font-bold ">@name </h4>
                    </a>
                    
                  </div>
                  
                  <h4 className="inline-flex text-blue-104 font-light ">Hace 10 horas </h4> 
                </div>

                <div className="mx-4 my-8">
                  <h2 className="text-blue-102 font-bold">Title</h2>
                  <p className="break-all text-blue-103 font-normal"> Esta es una pregunta realizada en mi cuenta para mencionar la duda que tenga de x materia con las especificaciones o detalles del por que la duda  nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
                    nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn.
                    hvsfndsnfshdfd gjghdfgdfgdfn gjghdfgdfgdfnsdgdfg
                  </p>
                </div>
                
                <div className="flex my-0 space-x-10 bg-gray-101">
                  <div className="inline ml-4 align-middle ">
                    <button className=" inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
                    <FavIcon
                            className="fill-current mr-2 text-blue-101 "
                            width="15px"
                        />
                      <span className="text-blue-101 font-bold" >32</span>
                    </button>
                  </div>
                  
                  <div className="inline">
                    <a  className="inline-flex no-underline align-middle">
                        <CommentIcon
                            className="fill-current mx-2 text-blue-101 "
                            width="15px"
                        />
                      <span className="text-blue-101 font-bold ">35</span>
                    </a>
                  </div>
                  
                  <div className="inline mr-4 align-middle">
                    <button className="flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
                    <TagIcon
                            className="fill-current mx-2 text-blue-101 "
                            width="15px"
                            color={'#52658f'}
                        />
                      <span className="text-blue-101 font-bold">tag</span>
                    </button>
                  </div>
                </div>

            </div>
    )
}

export default Post;