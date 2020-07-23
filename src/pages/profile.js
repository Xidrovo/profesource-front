import React from 'react'
import ProfileCard from '@user_f/profileCard'
import SEO from '@structure_f/seo'
import Layout from '@structure_f/Layout'
import ProfilePanel from '@user_f/ProfilePanel'

const ProfilePage = (props) => {
  return (
    <Layout title={props.title}>
      <SEO title={props.title} />
      <div className="md:flex">
        <div class="md:flex-shrink-0">
          <ProfileCard
            name="Carlos Carvajal"
            username="cxcarvajal"
            location="Guayaquil"
            joinTime="2009"
          />
        </div>

        <div class="md:ml-4 md:w-full">
          <div class="w-full">
            <ProfilePanel></ProfilePanel>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
