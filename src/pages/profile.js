import React from 'react'
import ProfileCard from '@components/profileCard'
import SEO from '../components/seo'
import Layout from '@components/Layout'
import ProfilePanel from '@components/ProfilePanel'

const ProfilePage = (props) => {

    return(
        <Layout title= {props.title}>
        <SEO title= {props.title}/>
        <div className="md:flex">
            <div class="md:flex-shrink-0">
                <ProfileCard
                name="Carlos Carvajal"
                username="cxcarvajal"
                location="Guayaquil"
                joinTime="2009" />
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

export default ProfilePage;