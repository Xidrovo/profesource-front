import React, { useState } from 'react'
import { Link } from 'gatsby'

import Subject_List from '../components/Subject_List'
import Message from '../components/Message'
import SEO from '../components/seo'
import Layout from '@components/Layout'
import PostCells from '@components/PostCells'
import Post from '@components/Post'
import Popular from '@components/PopularPost'
import { Steps } from 'intro.js-react'
// import 'intro.js/themes/introjs-modern.css'
import 'intro.js/introjs.css'

const IndexPage = () => {
  const [escrito, setEscrito] = useState('')

  const handleInput = (evt) => {
    const { target } = evt
    const { value } = target

    setEscrito(value)
  }
  const [stepsEnabled, setStepsEnabled] = useState(false)
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

  return (
    <div>
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={() => {
          setStepsEnabled(false)
        }}
      />
      <SEO title="Home" />

      <Layout title="Dashboard">
        <div class="float-right w-64 column hidden md:block">
          <div className="message">
            <Message />
          </div>
          <hr />
          <div className="mt-5 subject">
            <Subject_List />
          </div>
        </div>
        <div className="h-screen flex justify-center">
          <div className="text-4xl font-bold text-gray-800 flex-col justify-around">
            <div className="text-center profesource">
              This is the profesource main page c:
            </div>
            {/* Post recibe como props username, time (hora de publicacion), el title del post!
                favs como numero de likes, comments como numero de coments y tag como la etiqueta del post
             */}
            <div className="popular">
              <Popular />
            </div>
            <div className="post">
              <Post tag="DAWM" />
            </div>
            <div className="postCell">
              <PostCells
                username="Carlos Carvajal"
                time="20"
                title="Mi Primer Post en ProfeSource!"
                favs="10"
                comments="5"
                tag="Dawm"
              />
            </div>
            <div className=" text-lg flex justify-around">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                setStepsEnabled(true)
              }}>
                Intro To ProfeSource
              </button>
            </div>
            <div className="text-lg text-center items-center px-4">
              {escrito && (
                <div className="whitespace-pre-wrap">
                  Lo que estás escribiendo está aquí {escrito}
                </div>
              )}
            </div>
            <div className="text-blue-800 hover:text-blue-400 text-xl text-center">
              <Link to="/page-2/">Go to page 2</Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
