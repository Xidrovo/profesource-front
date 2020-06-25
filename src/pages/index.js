import React, { useState } from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '@components/Layout'
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
        <div className="h-screen flex justify-center">
          <div className="text-4xl font-bold text-gray-800 flex flex-col justify-around h-full">
            <div className="text-center">
              This is the profesource main page c:
            </div>
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
