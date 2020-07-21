import React, { useState } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '@components/Layout'

const Information = (props) => (
  <Layout title="Nosotros" class="center">
    <SEO title="Nosotros" />
    <div className="info">
      <section id="contenido" class="row">
        <div id="informacion">
          <h3 class="tituloseccion text-lg leading-6 font-medium text-black">
            Informacion 
          </h3>
          <p></p>
          <p class="flex items-center px-4 text-justify">
            Somos una comunidad que brinda un espacio para que estudiantes puedan
            brindar o pedir ayuda en temas educativos.
          </p>
          <p class="flex items-center px-4 text-justify">
            Nuestra propuesta intenta resolver la accesibilidad a foros con
            información fiable, ejercicios resueltos o material de estudios
            gratuitos de materias, ya que esto ocasiona que los estudiantes que se
            encuentran con dudas de ejercicios o temas no puedan aclararlas, lo
            que afecta su rendimiento académico y genera frustración en ellos. Una
            solución sería una página web que tenga las siguientes
            características: tener un ambiente de consulta para las materias,
            compartir respuestas o realizar nuevas preguntas de un ejercicio y
            generar discusión entre estudiantes sobre cómo resolver un ejercicio.
          </p>
          <p></p>
        </div>
        <div id="Personas">
          <h1 class="tituloseccion text-lg leading-6 font-medium text-black text-center">
            QUIENES SOMOS? 
          </h1>
          <table  border="1"class='tableClass' >
            <td>
              <img src='https://dam.vanidades.com/wp-content/uploads/2019/04/900katiebouman-770x513.jpg' class='imgRedonda' />
            </td>
            <td>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_uRqSEPeElYHOyR8_6opHrtKg-n7zpjihUA&usqp=CAU' class='imgRedonda' />
            </td>
            <td>
              <img src='https://www.marketingdirecto.com/wp-content/uploads/2020/03/dia-de-la-mujer-monica-moro.png' class='imgRedonda' />
            </td>
            <td>
              <img src='https://www.cdc.gov/preconception/spanish/images/man-with-arms-crossed.jpg' class='imgRedonda' />
            </td>
          </table>
          <table  border="1"class='tableClass' >
            <td class='imgTable'>
            <strong>Vielka Villavicencio</strong>
            </td>
            <td class='imgTable'>
            <strong>Freddy Ponce</strong>
            </td>
            <td class='imgTable'>
            <strong>Kelly Castro</strong>
            </td>
            <td class='imgTable'>
            <strong>Carlos Carvajal</strong>
            </td>
            
          </table>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <div className="p-4 bg-blue-700 hover:bg-blue-500 text-white hover:text-gray-700 text-center rounded-lg">
              Go back to the homepage
            </div>
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default Information
