import React, { useState } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '@components/Layout'
import Cards from '../components/Cards'

const Information = (props) => (
  <Layout title="Nosotros" class="center">
    <SEO title="Nosotros" />
    <div class="px-6">
      <div class="mt-8 border-t border-gray-200 pt-8">
        <div class="rounded-t-lg border-2 border-opacity-25 border-gray-600 p-3 bg-gray-800">
          <h3 class="text-lg leading-6 font-medium text-white">
            Información
            {/* {console.log(LOCATION_KEY)} */}
          </h3>
        </div>
      </div>
      <div class="rounded-b-lg border-2 border-opacity-25 border-gray-600 p-3 mb-6">
        <div class="px-5 grid grid-flow-col grid-cols-1 xl:grid-cols-2 xl:grid-rows-1 grid-rows-2 gap-4 p-6">
          <div class="mb-5 w-100">
            <h2 class="font-medium text-xl">Misión</h2>
            <p class="px-5 pt-2 text-justify">
              Resolver la accesibilidad a foros con información fiable, 
              ejercicios resueltos o material de estudios gratuitos de 
              materias, ya que esto ocasiona que los estudiantes que se 
              encuentran con dudas de ejercicios o temas no puedan
              aclararlas, lo que afecta su rendimiento académico y genera
              frustración en ellos.
            </p>
          </div>
          <div class="w-100">
            <h2 class="font-medium text-xl">Visión</h2>
            <p class="px-5 pt-2 text-justify">
              Tener un ambiente de consulta para las materias, compartir 
              respuestas o realizar nuevas preguntas de un ejercicio y 
              generar discusión entre estudiantes sobre cómo resolver un 
              ejercicio, de tal forma que los usuarios puedan llenarse de 
              conocimientos y ayudar en el desarrollo intelectual de jovenes
              y adultos.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="px-6">
      <div class="rounded-t-lg border-2 border-opacity-25 border-gray-600 p-3 bg-gray-800">
        <h3 class="text-lg leading-6 font-medium text-white">
          ¿Quiénes somos?
          {/* {console.log(LOCATION_KEY)} */}
        </h3>
      </div>
      <div class="rounded-b-lg border-2 border-opacity-25 border-gray-600 p-3 mb-6">
      <div class="grid grid-flow-col grid-cols-1 xl:grid-cols-4 xl:grid-rows-1 grid-rows-4 gap-4 p-6">
        <Cards
          title="Desarrolador Web"
          description=""
          img="https://www.marketingdirecto.com/wp-content/uploads/2020/03/dia-de-la-mujer-monica-moro.png"
          name="Kelly Castro Figueroa"
          email="keescast@espol.edu.ec"
        />
        <Cards
          title="Desarrolador Web"
          description=""
          img="https://www.cdc.gov/preconception/spanish/images/man-with-arms-crossed.jpg"
          name="Carlos Carvajal Villegas"
          email="cxcarvaj@espol.edu.ec"
        />
        <Cards
          title="Desarrolador Web"
          description=""
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_uRqSEPeElYHOyR8_6opHrtKg-n7zpjihUA&usqp=CAU"
          name="Freddy Ponce Muzzio"
          email="fponce@espol.edu.ec"
        />
        <Cards
          title="Desarrolador Web"
          description=""
          img="https://dam.vanidades.com/wp-content/uploads/2019/04/900katiebouman-770x513.jpg"
          name="Vielka Villavicencio Vallejo"
          email="vvvillav@espol.edu.ec"
        />
      </div>
      </div>
    </div>
  </Layout>
)

export default Information
