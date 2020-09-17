import React, { useState, useEffect} from 'react'
import TagIcon from '@Icons/TagIcon'
import ImageIcon from '@Icons/ImageIcon'
import Button from '@buttons_f/Button'
import axios from 'axios'


const Post = (props) => {
  const [subjects, setSubject] = useState([])
  const [didMount, setDidMount] = useState(false)
  const [desc, setDesc] =useState(" ")
  const [title, setTitle]= useState(" ")
  const [subject, setSub] = useState(" ")
 
  const handleSubmit = () => {
    publishPost()
  }

  async function publishPost(){
    var body={
      "Title": title,
      "username": "cxcarvaj",
      "Description": desc,
      "Subject_name": subject,
      "File":"File.pdf",
    "Punctuation":  0,
    "status": "APPROVED",
    "state":true,
    }

    console.log(body)

    try {
      var response = await axios.post(`http://localhost:3000/api/posts/register`, body)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      return response;

    } catch (e) {
      console.log(e);
      return null;
    }

  }
 
  

  useEffect(()=>{
    axios
    .get('http://localhost:3000/api/subjects/consult')
    .then((response)=>{
      setSubject(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    setDidMount(true)
  },[])

  return (
    /* agregar */
    <div className="md:ml-24 border-solid border-2 border-gray-101 w-3/4 text-base h-auto ml-12 mb-8 rounded-lg"  >
      <div className="mx-6 my-4">
        <div class="box__title bg-grey-lighter px-3 py-2 border-b">
          <input class="text-md text-grey-darker font-medium" placeholder="Titulo" id="Title" onChange={e => setTitle(e.target.value)}></input>
        </div>
        <textarea
          id="Description"
          placeholder="¿Deseas postear algo?"
          class=" w-full border-2 text-grey-darkest flex-1 p-1 bg-transparent resize-none max-w-full border-l-4"
          rows="6"
          onChange={e => setDesc(e.target.value)}
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
            <select className="materia text-blue-101 font-semibold text-sm" id="Subject_name" onChange={e => setSub(e.target.value)}>
            {didMount && subjects.map((subject,index)=>{
              return <option value={subject.Subject_name}>{subject.Subject_name}</option>
            })}
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

      <div className="flex justify-end px-6 pt-2 mb-2">
        {/* <Button indicator="Publicar" onClick={()=>{alert('Publicación exitosa')}}/> */}
        <Button
          indicator="Publicar"
          onClick={()=>{
            let sel = document.getElementById("Subject_name").value
            setSub(sel)
            console.log(sel)
            handleSubmit()
          }}
        />
      </div>
    </div>
  )
}

export default Post
