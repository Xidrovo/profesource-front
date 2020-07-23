import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

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
import Footer from '@structure_f/Footer'

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
      intro: 'Message Component',
    },
    {
      element: '.subject',
      intro: 'Subject Component',
    },
    {
      element: '.popular',
      intro: 'Popular Post',
    },
    {
      element: '.post',
      intro: 'Post Component',
    },
    {
      element: '.postCell',
      intro: 'PostCell Component',
    },
  ])
  useEffect(() => {
    setDidMount(true)
  }, [])

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
                <PostCells
                  username="cxcarvajal"
                  time="20 horas"
                  title="Mi Primer Post en ProfeSource!"
                  favs="10"
                  comments="5"
                  tag="Dawm"
                />
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
