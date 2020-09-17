import React, { useState, useEffect } from 'react'

import Subject_List from '@search_f/Subject_List'
import Message from '@welcome_m/Message'
import SEO from '@structure_f/seo'
import Layout from '@structure_f/Layout'
import PostCells from '@post_f/PostCells'
import Post from '@post_f/Post'
import Popular from '@post_f/PopularPost'
import { Steps } from 'intro.js-react'
import 'intro.js/introjs.css'
import FilterPost from '@search_f/FilterPost'
import axios from 'axios'


const IndexPage = () => {
  const [escrito, setEscrito] = useState('')

  const handleInput = (evt) => {
    const { target } = evt
    const { value } = target

    setEscrito(value)
  }
  const [didMount, setDidMount] = useState(false)
  const [stepsEnabled, setStepsEnabled] = useState(true)
  const [initialStep, setInicialStep] = useState(0)
  const [posts, setPosts] =useState([])
  const [numbercomm, setNumber]= useState([]);
  const [steps, setSteps] = useState([
    {
      element: '.profesource',
      intro: 'Bienvenidos a Profesource',
      position: 'top',
      tooltipClass: 'myTooltipClass',
      highlightClass: 'myHighlightClass',
    },
    {
      element: '.message',
      intro: '¿Qué es Profesource?',
    },
    {
      element: '.subject',
      intro: '¡Aquí encontrarás el listado de materias con material de estudio!',
    },
    {
      element: '.popular',
      intro: '¡Este el post más popular de la página!',
    },
    {
      element: '.post',
      intro: '¡Aquí puedes escribir y subir tu duda o ejercicio a la página!',
    },
    {
      element: '.postCell',
      intro: 'En esta parte, encontrarás los posts existentes de la página',
    },
  ])
  useEffect(
    async () => {
      await
      axios
        .get(`http://localhost:3000/api/posts/consult`)
        .then((response) => {
          setPosts(response.data)
          let comments= []
          for(let element of response.data){
            let id_Post=element["id_Post"];
            axios.get(`http://localhost:3000/api/answers/consultByPost/${id_Post}`).then((result)=>{
              console.log(result.data.length)
              var comment = { id: id_Post, numero: result.data.length}
              comments.push(comment);
            })
          }
          
          setNumber(comments)
        })
        .catch((error) => {
          console.log(error)
        })
    
    setDidMount(true)
  }, [])


  function getNumberReplies(id){
    for(let element of numbercomm){
      if(element.id==id){
        return element.numero;
      }
    }
    return 0;
  }



    function presentarPosts(){
      return posts.map((obj,i)=>{
        getNumberReplies(i)
        return <PostCells id={obj.id_Post} key={obj.id_Post} username={obj.username} time="20 minutos" title={obj.Title} 
        desc = {obj.Description} favs={obj.Punctuation} comments={getNumberReplies(obj.id_Post)} tags={obj.Subject_name}/>
      })
    }
  return (
    <div>
      {didMount && (
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={() => {
            setStepsEnabled(false)
          }}
        />
      )}
      <SEO title="Home" />

      <Layout title="Dashboard">
        <div class="float-right w-64 column hidden space-y-12 md:block">
          <div className="message">
            <Message />
          </div>

          <div className="mt-5 subject">
            <Subject_List />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-gray-800 flex-col justify-around">
            {/* Post recibe como props username, time (hora de publicacion), el title del post!
                favs como numero de likes, comments como numero de coments y tag como la etiqueta del post
             */}
            <div className="popular">
              <Popular />
            </div>
            <div className="post">
              <Post tag="¿Materia?" />
            </div>

            <div className="postCell">
              <div className="pb-16">
                <FilterPost></FilterPost>
                {presentarPosts()}               
              </div>
            </div>

            <div className="text-lg text-center items-center px-4">
              {escrito && (
                <div className="whitespace-pre-wrap">
                  Lo que estás escribiendo está aquí {escrito}
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
