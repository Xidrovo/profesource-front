import React from 'react'
import TagIcon from '@Icons/TagIcon'
import ImageIcon from '@Icons/ImageIcon'
import Button from '@components/Button'

const Post = (props) => {
  return (
    <div className="md:ml-24 border-solid border-2 border-gray-101 w-3/4 text-base h-auto ml-12 mb-8 rounded-lg">
      

      <div className="mx-6 my-4">
        <h2 className="text-blue-102 font-bold">{props.title}</h2>
        <div class="box__title bg-grey-lighter px-3 py-2 border-b">
          <h3 class="text-md text-grey-darker font-medium">Título</h3>
        </div>
        <textarea
          id="text-area-post"
          placeholder="¿Deseas postear algo?"
          class=" w-full border-2 text-grey-darkest flex-1 p-1 bg-transparent resize-none max-w-full border-l-4"
          rows="6"
        ></textarea>
      </div>

      
      <div className="flex my-0 space-x-2 mr-6 ">
        <div className="inline mx-6 mb-4 align-middle">
          <button className="flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
            <TagIcon
              className="fill-current mx-2 text-blue-101 "
              width="15px"
              color={'#52658f'}
            />
            <span className="text-blue-101 font-semibold text-sm" >{props.tag}</span>
          </button>
        </div>
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
          onClick={() => {
            var postMessage = document.getElementById('text-area-post').value
            alert(postMessage)
            document.getElementById('text-area-post').value = "";
          }}
        />
      </div>
      
    </div>
  )
}

export default Post
