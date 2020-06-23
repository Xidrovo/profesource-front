import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import AlertIcon from '@Icons/AlertIcon'
import Layout from '@components/Layout'

const SecondPage = () => (
  <Layout title="Page-2">
    <SEO title="Page two" />
    <div className="p-24">
      <div className="text-center text-3xl font-semibold">
        Welcome to the page 2!
      </div>
      <div className="flex flex-row text-2xl my-16 justify-center">
        Here is an icon you can use in your project
        <div className="text-green-600 my-auto">
          <AlertIcon
            className="fill-current ml-2 my-auto"
            color={'#ffd700'}
            width="20px"
            height="20px"
          />
        </div>
        <div className="text-yellow-600 my-auto">
          <AlertIcon
            className="fill-current ml-2 my-auto"
            color={'#ffd700'}
            width="20px"
            height="20px"
          />
        </div>
        <div className="text-red-600 my-auto">
          <AlertIcon
            className="fill-current ml-2 my-auto"
            color={'#ffd700'}
            width="20px"
            height="20px"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <div className="p-4 bg-blue-700 hover:bg-blue-500 text-white hover:text-gray-700 text-center rounded-lg">
            Go back to the homepage
          </div>
        </Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage