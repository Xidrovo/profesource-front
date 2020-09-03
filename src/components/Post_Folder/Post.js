import React, { useState } from 'react'
import TagIcon from '@Icons/TagIcon'
import ImageIcon from '@Icons/ImageIcon'
import Button from '@buttons_f/Button'
import axios from 'axios'


const Post = (props) => {
  var materias = ['dawm','matematicas']

  function presentarMaterias(){
    return materias.map((materia,i)=>{
      return(
        <option>{materia}</option>
      )
    })
  }

  const [info, setDatos] = useState({
    id_Post:'',
    Tittle: '',
    username: '',
    Sobject_name: '',
    Punctuation: '',
    Publication_date: '',
    created_at: '',
    updated_at: ''
  })
  const removeData = (id_Post) => {

    axios.delete(`${id_Post}`).then(res => {
        const del = info.filter(inf => id_Post !== inf.id_Post)
        setEmployees(del)
    })
}
 
  const handleSubmit = (e) => {
    console.log("enviando")
    console.log(info)
    e.preventDefault();
    axios.post('',info).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }
 
  const handleInputChange = (event) =>{
    setDatos({
      ...info,
      [event.target.id]: event.target.value
    })
  }
  return (
    /* agregar */
    <div className="md:ml-24 border-solid border-2 border-gray-101 w-3/4 text-base h-auto ml-12 mb-8 rounded-lg"  >
      <div className="mx-6 my-4">
        <div class="box__title bg-grey-lighter px-3 py-2 border-b">
          <input class="text-md text-grey-darker font-medium" placeholder="Titulo" id="Tittle" onChange={handleInputChange}></input>
        </div>
        <textarea
          id="text-area-post"
          placeholder="¿Deseas postear algo?"
          class=" w-full border-2 text-grey-darkest flex-1 p-1 bg-transparent resize-none max-w-full border-l-4"
          rows="6"
          onChange={handleInputChange}
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
            <select className="materia text-blue-101 font-semibold text-sm" id="Sobject_name" onChange={handleInputChange}>
              <option>Materia</option>
              {presentarMaterias()}
            </select>
          </button>
        </div>
        <div className="flex mx-6 mb-4 align-middle">
          <button className="flex items-center space-x-2 bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent">
            <ImageIcon
              className="fill-current  text-blue-101"
              width="15px"
              color={'#52658f'}
            />
            <span className="text-blue-101 font-semibold text-sm ">Imagen</span>
          </button>
        </div>
      </div>

      <div className="flex justify-end px-6 pt-2">
        {/* <Button indicator="Publicar" onClick={()=>{alert('Publicación exitosa')}}/> */}
        <Button
          indicator="Publicar"
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Post
