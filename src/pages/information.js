import React, { useState } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '@components/Layout'

const Information = (props) => (
    <Layout title="Nosotros">
        <SEO title="Nosotros" />
        <div className="info" >
            <p class="flex items-center px-4">
                Somos una comunidad que brinda un espacio para que estudiantes puedan brindar o pedir ayuda en temas educativos.
            </p>
            <p class= "sm:col-spab=n-3" >
            
                Nuestra propuesta intenta resolver la accesibilidad a foros con información fiable, ejercicios resueltos o material de estudios gratuitos de materias, ya que esto ocasiona que los estudiantes que se encuentran con dudas de ejercicios o temas no puedan aclararlas, lo que afecta su rendimiento académico y genera frustración en ellos. Una solución sería una página web que tenga las siguientes características: tener un ambiente de consulta para las materias, compartir respuestas o realizar nuevas preguntas de un ejercicio y generar discusión entre estudiantes sobre cómo resolver un ejercicio. 
            
            </p>
            <p>

            </p>
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

