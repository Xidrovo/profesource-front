import React, { useState, useEffect} from 'react'
import TagIcon from '@Icons/TagIcon'
import ImageIcon from '@Icons/ImageIcon'
import Button from '@buttons_f/Button'
import axios from 'axios'


const Post = (props) => {
  const [subjects, setSubject] = useState([])
  const [didMount, setDidMount] = useState(false)
  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const article = { title: 'React Hooks POST Request Example' };
    axios.post('http://localhost:3000/api/subjects/consult', article)
        .then(response => setArticleId(response.data.id));
      }, []);


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


 


  const [info, setDatos] = useState({
    id_Post:'',
    Tittle: '',
    username: '',
    Subject_name: '',
    Punctuation: '',
    Publication_date: '',
    created_at: '',
    updated_at: ''
  })
  
  const removeData = (id_Post) => {
    axios.delete(`${id_Post}`).then(res => {
        const del = info.filter(inf => id_Post !== inf.id_Post)
        setDatos(del)
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
    // setDatos({
    //   ...info,
    //   [event.target.id]:event.target.value
    // })
    // console.log("handelInput")
  }


  const loadSubjects = () => {
    console.log("loadSubjects")
    document.getElementById('Subject_name').innerHTML=`<option>Tag</option>`
    return subjects.map((subject, i) => {
      var option = document.createElement('option')
      var sub = document.createTextNode(subject.Subject_name)
      option.appendChild(sub)
      document.getElementById('Subject_name').appendChild(option)
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
            <select className="materia text-blue-101 font-semibold text-sm" id="Subject_name" onChange={handleInputChange}>
            {didMount && loadSubjects()}
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
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Post
