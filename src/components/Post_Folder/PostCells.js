import React, { useState, useEffect} from 'react'
import { Link } from 'gatsby'
import CommentIcon from '@Icons/CommentIcon'
import ButtonOption from '@buttons_f/ButtonOption'
import ButtonEdit from '@buttons_f/ButtonEdit'
import Button from '@buttons_f/Button'
import FavIcon from '@Icons/FavIcon'
import TagIcon from '@Icons/TagIcon'
import axios from 'axios'

function PostCells(props) {
  const [subjects, setSubject] = useState([])
  const [didMount, setDidMount] = useState(false)
  const [open, setOpen] = useState(false)
  var isEnable = props.username == "cxcarvaj";
  const [edit, setEdit] = useState(false);
  const [desc, setDesc] =useState(" ")
  const [title, setTitle]= useState(" ")
  const [subject, setSub] = useState(" ")
  const [punct, setPunct] = useState(props.favs)
  const [responses, setResponses]=useState(props.comments)


  const editData = () => {
    setOpen(!open)
    setEdit(true);
  }

  async function validated(){
    var response= await updateData();
    setEdit(false);
    return response;
  }

  useEffect(()=>{
    axios
    .get(`http://localhost:3000/api/answers/consultByPost/${props.id}`)
    .then((response)=>{
      setResponses(response.data.length)
    })
    .catch((error)=>{
      console.log(error)
    })
    setDidMount(true)
  },[])

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

  async function updateData() {
    title==" "? setTitle(props.title) : setTitle(title)
    desc==" "? setDesc(props.desc) : setDesc(desc)
    subject==" "? setSub(props.tags) : setSub(subject)
    var body = {
      "id_Post": props.id,
      "Title": title,
      "username": props.username,
      "Description": desc,
      "Subject_name": subject,
      "File":"File.pdf",
      "Punctuation":  punct,
      "status": "APPROVED",
      "state": true,
    }
    
    try{
      var response = await axios.put(`http://localhost:3000/api/posts/update/${props.id}`, body).then(res => {
      console.log(res)
    })
    return response;

    }catch(e){
      console.log(e);
      return null;
    }
  }

  const removeData = () => {
    setOpen(!open)
    axios.delete(`http://localhost:3000/api/posts/delete/${props.id}`).then(res => {
      console.log(res)
    })
  }

  return (
    <div className="md:ml-24 mb-20 border-solid border-2 border-gray-101 w-3/4 text-base h-auto ml-12" key={props.id}>
      <div className="relative space-x-4 mx-5 my-6 bg-transparent items-center">
        <div className="inline">
          <Link to="/profile/" className="inline-flex text-blue-102 font-bold ">
            @{props.username}
          </Link>
        </div>
        <div className="inline">
          <Link
            to='viewPost' state={{id: props.id, username: props.username, time: props.time, title: props.title,
            desc: props.desc, favs: props.favs, comments: props.comments, tags: props.tags, updated:false}}
            className="inline-flex text-sm text-blue-104 font-light"
          >
            Hace {props.time}
          </Link>
          
        </div>
        
        {isEnable &&
            <div id="options-user">
              <div className="absolute top-0 right-0 py-1 pr-0">
                <ButtonOption
                  onClick={() => {
                    setOpen(!open)
                  }} />

              </div>

              {open &&
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <ButtonEdit
                    onClick={() => {
                      editData()
                    }}
                    value="Editar"
                  />
                  <ButtonEdit
                    onClick={() => {
                      removeData()
                    }}
                    value="Eliminar"
                  />
                </div>
              }

            </div>}
      </div>
              {!edit && <div>
      <div className="mx-4 my-8">
        <h2 className="text-blue-102 font-bold">{props.title}</h2>
        <div className="text-justify">
          <p className="pl-6 pr-6 font-normal text-black text-opacity-75">
            {props.desc}
          </p>
        </div>
      </div>

      <div className="flex my-0 space-x-10 bg-gray-101">
        <div className="flex ml-4 align-middle ">
          <button className=" inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent" onClick={()=>{
            setPunct(punct+1);
            updateData()
          }}>
            <FavIcon
              className="fill-current mr-2 text-blue-101 "
              width="15px"
            />
            <span className="text-blue-101 font-bold">{punct}</span>
          </button>
        </div>

        <div className="flex">
          <Link
            to="/viewPost/"
            className="inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent"
          >
            <CommentIcon
              className="fill-current mx-2 text-blue-101 "
              width="15px"
              color={'#52658f'}
            />
            <span className="text-blue-101 font-bold ">{responses}</span>
          </Link>
        </div>

        <div className="flex ">
          <button className="flex items-center  hover:bg-transparent focus:outline-none hover:border-transparent">
            <Link
              to="/page-2"
              className="inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent"
            >
              <TagIcon
                className="fill-current mx-2 text-blue-101"
                width="15px"
                color={'#52658f'}
              />

              <span className="flex-shrink break-all text-blue-101 font-bold ">
                {props.tags}
              </span>
            </Link>
          </button>
        </div>
        </div>
      </div>}
      {edit &&
      <div>
        <div className="mx-6 my-4">
        <div class="box__title bg-grey-lighter px-3 py-2 border-b">
      <textarea class="text-md text-grey-darker font-medium"  placeholder="Title" 
      id="Title-update" onChange={e => setTitle(e.target.value)} rows="1">{props.title}</textarea>
        </div>
        <textarea
          id="Description-update" placeholder="Description"
          class=" w-full border-2 text-grey-darkest flex-1 p-1 bg-transparent resize-none max-w-full border-l-4"
          rows="4"
          onChange={e => setDesc(e.target.value)}
      >{props.desc}</textarea>
      </div>
      <div className="flex my-0 space-x-10 bg-gray-101">
        <div className="flex ml-4 align-middle ">
          <button className=" inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent">
            <FavIcon
              className="fill-current mr-2 text-blue-101 "
              width="15px"
            />
            <span className="text-blue-101 font-bold">{punct}</span>
          </button>
        </div>

        <div className="flex">
          <Link
            to="/viewPost/"
            className="inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none hover:border-transparent"
          >
            <CommentIcon
              className="fill-current mx-2 text-blue-101 "
              width="15px"
              color={'#52658f'}
            />
            <span className="text-blue-101 font-bold ">{props.comments}</span>
          </Link>
        </div>

        <div className="flex ">
        
          <button className="flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
            <TagIcon
              className="fill-current mx-2 text-blue-101 "
              width="15px"
              color={'#52658f'}
            />
            <select className="materia text-blue-101 font-semibold bg-transparent text-sm" id="Subject_name_update" onChange={e => setSub(e.target.value)}>
            {didMount && subjects.map((subject,index)=>{
              return <option value={subject.Subject_name}>{subject.Subject_name}</option>
            })}
            </select>
          </button>
        
        </div>
        <div className="flex justify-end px-6 pt-2 mb-2">
        {/* <Button indicator="Publicar" onClick={()=>{alert('Publicación exitosa')}}/> */}
        <Button
          indicator="Publicar"
          onClick={()=>{
            let sel = document.getElementById("Subject_name_update").value
            setSub(sel)
            subject==" "? setSub(props.tags) : setSub(sel)
            console.log(sel)
            validated()
            //setEdit(!edit)
          }}
        />
      </div>
        </div>

      </div>
      }
    </div>
  )
}

export default PostCells
