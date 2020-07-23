import React  from 'react'
import SEO from '@structure_f/seo'
import Layout from '@structure_f/Layout'
import UpdateCard from '@components/UpdateCard'
import AlertIcon from '@Icons/AlertIcon'

const Noticias = (props) => {

    let informacion={
        titulo:["Actualización Nosotros", "Respuestas en Perfil", "Escribir comentarios"],
        descripciones:[
            "Se ha actualizado la página Nosotros, ahora puedes ver nuestra Visión y Visión. Además, puedes visualizar quiénes conformar el Equipo de Desarrollo y las actividades que realizamos. Con esto esperamos estar más cerca de ustedes.", 
            "Se ha agregado un Tab en el panel de perfil en el que podrás ver todas las respuestas que ha realizado un usuario o en tus respuestas. Con la finalidad de que tengas un acceso directo a tus antiguas respuestas (Historial).  ", 
            "Ahora puedes escribir comentarios a los post publicados en Profesource, por medio del ícono de comentarios, aparecerá un cuadro texto en el que podrás escribir todos los comentarios que desees."]
        
    }

    
    function presentarCard(){
        return informacion.titulo.map((titulo, i)=>{
            return <UpdateCard title={titulo}
            description={informacion.descripciones[i]}></UpdateCard>
        }
        )
    }

    return(
    <Layout title="Noticias" >
        <SEO title="Noticias" />
        <div className="px-6">
            <div className="mt-8 border-t border-gray-200 pt-8">
                <div className=" border-2 border-opacity-50 border-gray-600 px-3 py-4">
                    <div className="flex flex-col">
                        <div className=" ">
                                <AlertIcon
                                className="fill-current mr-4 mb-2 text-yellow-600 float-left h-12"
                                width="45px"
                                color={'#52658f'}
                                ></AlertIcon>

                            <p className="text-base font-normal text-justify text-blue-103 mb-4">
                                Recuerda que realizamos un monitoreo continuo del sitio, con la finalidad de que tu paso por Profesource sea satisfactorio.
                                Te recordamos revisar las Políticas de Profesource para evitar inconvenientes por no respetar a nuestra comunidad.                      
                            </p>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div class="rounded-t-lg border-2 border-opacity-25 border-gray-600 p-3 mt-8 bg-gray-800">
                <h3 class="text-lg leading-6 font-medium text-white">
                    Últimas actualizaciones
                </h3>
            </div>
            <div class="rounded-b-lg border-2 border-opacity-25 border-gray-600 p-3 mb-6">
                {presentarCard()}
            </div>
        </div>
    </Layout>
    )
    
}

export default Noticias