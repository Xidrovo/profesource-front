import React from 'react'

import Subject_List from '@search_f/Subject_List'
import Message from '@welcome_m/Message'
import SEO from '@structure_f/seo'
import Layout from '@structure_f/Layout'
import PostCells from '@post_f/PostCells'
import PreComment from '@comments_f/PreComment'
import Comment from '@comments_f/Comment'

const PostPage = (props) => {
  return (
    <Layout title={props.title}>
      <SEO title={props.title} />

      <div class="float-right w-64 column hidden lg:block">
        <div className="message bg">
          <Message />
        </div>
        <hr />
        <div className="mt-5 subject">
          <Subject_List />
        </div>
      </div>

      <div className="flex flex-col ">
        <div className=" text-4xl font-bold text-gray-800  justify-around ">
          <div>
            <PostCells
              username="cxcarvajal"
              time="20 horas"
              title="Mi Primer Post en ProfeSource!"
              favs="10"
              comments="5"
              tag="Dawm"
            />
          </div>
          <div>
            <PreComment username="user" />
          </div>

          <div>
            <Comment
              username="keescast"
              time="10 horas"
              content=" Estoy de acuerdo con lo que dices, saludos!"
              favs="20"
              comments="3"
            ></Comment>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostPage
