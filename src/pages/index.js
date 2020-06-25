import React, { useState } from 'react'
import { Link } from 'gatsby'

import Subject_List from '../components/Subject_List'
import Message from '../components/Message'
import SEO from '../components/seo'
import Layout from '@components/Layout'
import Post from '@components/Post'


const IndexPage = () => {
  const [escrito, setEscrito] = useState('')

  const handleInput = (evt) => {
    const { target } = evt
    const { value } = target

    setEscrito(value)
  }
  return (
    <div>
      <SEO title="Home" />

      <Layout title="Dashboard">
      <div class="float-right w-64 column hidden md:block">
        <Message></Message>
        <p class="h-6"></p>
        <Subject_List></Subject_List>
      </div>
        <div className="h-screen flex justify-center">
          <div className="text-4xl font-bold text-gray-800 flex flex-col justify-around h-full">
            <div className="text-center">
              This is the profesource main page c:
            </div>
            {/* Post recibe como props username, time (hora de publicacion), el title del post!
                favs como numero de likes, comments como numero de coments y tag como la etiqueta del post
             */}
            <Post 
            username="Carlos Carvajal"
            time="20" 
            title = "Mi Primer Post en ProfeSource!"
            favs = "10"
            comments = "5"
            tag = "Dawm"
            />
            <div className=" text-lg flex justify-around">
              <div className="my-auto">Here is an input text: </div>
              <input
                className="px-6 py-4 bg-gray-200 border-none outline-none rounded-md"
                placeholder="Aquí va algo de texto"
                onChange={handleInput}
              ></input>
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
