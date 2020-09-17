import React, { useState, useEffect } from 'react'

import Subject_List from '@search_f/Subject_List'
import Message from '@welcome_m/Message'
import SEO from '@structure_f/seo'
import Layout from '@structure_f/Layout'
import PostCells from '@post_f/PostCells'
import Post from '@post_f/Post'
import Popular from '@post_f/PopularPost'
import { Steps } from 'intro.js-react'
// import 'intro.js/themes/introjs-modern.css'
import 'intro.js/introjs.css'
import FilterPost from '@search_f/FilterPost'


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
  useEffect(() => {
    setDidMount(true)
  }, [])

  var list = [{
    id: 1,
    username:"cxcarvaj",
    time: "20 min",
    title: "Mi primer post en profesource",
    desc: "Hola, mi nombre es Carlos Carvajal y este es mi primer post desde profesource!",
    favs: "10",
    comments:"5",
    tags:["ESPOL"]
  },
  { id:2,
    username:"fponce",
    time: "10 horas",
    title: "Problemas en DAWM",
    desc: "Alguien conoce lugares donde pueda aprender JS, html y CSS? Seria de gran ayuda que me compartieran esta información! Gracias",
    favs: "5",
    comments:"10",
    tags:["DAWM"]
  },
  { id:3,
    username:"keescast",
    time: "5 horas",
    title: "Duda sobre un ejercicio de estadística :(",
    desc: "Hola chicos, disculpen es que tengo una duda con un ejercico de estadística inferencial y no sé si me puedan ayudar!",
    favs: "12",
    comments:"20",
    tags:["Tarea"]
  },
    ]

    function presentarPosts(){
      return list.map((obj,i)=>{
        return <PostCells id={obj.id} key={obj.id} username={obj.username} time={obj.time} title={obj.title} 
        desc = {obj.desc} favs={obj.favs} comments={obj.comments} tags={obj.tags}/>
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
