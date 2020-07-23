import React from 'react'
import { Link } from 'gatsby'

import SEO from '@structure_f/seo'
import AlertIcon from '@Icons/AlertIcon'
import Layout from '@structure_f/Layout'
import Stepper from '@help/Stepper'

const SecondPage = () => (
  <Layout title="Proceso para publicar contenido en ProfeSource:">
    <SEO title="Page two" />
    <div className="p-6">
      {/* <div className="text-center text-3xl font-semibold">
        Welcome to the page 2!
      </div> */}
      {/* <div className="flex flex-row text-2xl my-16 justify-center">
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
      </div> */}
      <div className="flex justify-center">
        <Stepper />
      </div>
      <div className="flex justify-center"></div>
    </div>
  </Layout>
)

export default SecondPage
