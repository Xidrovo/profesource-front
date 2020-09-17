import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import ButtonOption from '@buttons_f/ButtonOption'
import ButtonEdit from '@buttons_f/ButtonEdit'
import Button from '@buttons_f/Button'
import axios from 'axios'
import { elementType } from 'prop-types'


const Comment = (props) => {
  const [open, setOpen] = useState(false)
  var isEnable = props.username == "cxcarvaj";
  const [edit, setEdit] = useState(false);


  const editData = () => {
    setOpen(!open)
    setEdit(true);
  }

  async function validated(comment){
    if(comment=="") {alert("Ingrese texto"); return}
    var response= await updateData(comment);
    setEdit(false);
    return response;
  }

  async function updateData(comment) {
    var body = {
      "id_answer": props.id,
      "username": props.username,
      "Answer": comment,
      "status": "APPROVED",
      "state": true,
      "id_Post": props.id_Post
    }
    try{
      var response = await axios.put(`http://localhost:3000/api/answers/update/${props.id}`, body).then(res => {
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
    axios.delete(`http://localhost:3000/api/answers/delete/${props.id}`).then(res => {
      console.log(res)
    })
  }


  return (
    <div className="md:ml-24  w-3/4 text-base h-auto ml-12 mb-10" id={props.id}>
      <div className="border-solid border-2 mb-5 pt-2 border-gray-101 ">
        <div className="relative space-x-4 ml-5  bg-transparent items-center">
          <div className="inline">
            <Link
              to="/page-2/"
              className="inline-flex text-blue-102 font-bold text-sm "
            >
              @{props.username}
            </Link>
          </div>
          <div className="inline">
            <h4
              className="inline-flex text-blue-104 font-light text-sm"
            >
              Hace {props.time}
            </h4>
          </div>
          {isEnable &&
            <div id="options-user">
              <div className="absolute top-0 right-0 py-1 pr-2">
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

        {!edit && <div className="mx-5 mt-2 mb-5" id="text-edit">
          <p className="break-word text-blue-103 font-normal text-sm">
            {props.content}
          </p>
        </div>}
        {edit &&
          <div className="px-4">
            <textarea
              id="text-area-comment-edit"
              class=" w-full border-2 text-grey-darkest flex-1 p-4 bg-transparent resize-none max-w-full border-l-4"
              rows="3">
              {props.content}
            </textarea>
            <div className="flex justify-end px-6 pt-2">
              <Button
                indicator="Publicar"
                onClick={() => {
                  var postMessage = document.getElementById('text-area-comment-edit').value
                  console.log(postMessage=="");
                  validated(postMessage);
                  document.getElementById('text-area-comment').value = ''
                  
                }}
              />

            </div>
          </div>}
        {/** 
        <div className="flex mb-3 space-x-3 bg-transparent">
          <div className="flex ml-4 align-middle ">
            <button className=" inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
              <FavIcon
                className="fill-current mr-2 text-blue-101 "
                width="10px"
              />
              <span className="text-blue-101 font-bold text-sm">
                {props.favs}
              </span>
            </button>
          </div>

          <div className="flex">
            <button className="inline-flex items-center bg-transparent hover:bg-transparent focus:outline-none border border-transparent hover:border-transparent">
              <CommentIcon
                className="fill-current mx-2 text-blue-101 "
                width="10px"
                color={'#52658f'}
              />
              <span className="text-blue-101 font-bold text-sm">
                {props.comments}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-col space-y-3">
        {/**subcommentarios.usernames.map((usernames, i) => {
          return (
            <div className="ml-5">
              <SubComment
                username={usernames}
                time={subcommentarios.time[i]}
                content={subcommentarios.content[i]}
                comments={subcommentarios.comments[i]}
                favs={subcommentarios.favs[i]}
              ></SubComment>
            </div>
          )
        })*/}
      </div>
    </div>
  )
}

export default Comment
