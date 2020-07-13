import React, { useState } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import AlertIcon from '@Icons/AlertIcon'
import Layout from '@components/Layout'

const Information = (props) => (
    <Layout title="Información">
        <SEO title="Información" />
        <div className="info">
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

export default Information

