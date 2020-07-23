import React  from 'react'
import SEO from '@structure_f/seo'
import Layout from '@structure_f/Layout'

const Policy = (props) => {
    return(
        <div>
            <Layout title="Políticas">
                <SEO title="Políticas" />
                <div className="px-6">
                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <div className="rounded-lg border-2 border-opacity-50 border-gray-600 px-3 py-4 px-4 md:px-8">

                            <p className="text-xs md:text-base font-normal text-justify text-blue-103 mb-4">
                            Profesource respeta la privacidad de nuestros usuarios. Esta Política explica cómo usamos, 
                            divulgamos y salvaguardamos su información cuando visita nuestro sitio web, incluido cualquier otro formulario de 
                            medios, canal de medios, sitio web móvil. Además, se especifican las Políticas para la publicación de posts y comentarios.                 
                            </p>   
                            <p className="text-xs md:text-base font-normal text-justify text-blue-103 mb-4">
                            Nos reservamos el derecho de realizar cambios a esta Política en cualquier momento y por cualquier motivo.
                            Le avisaremos sobre cualquier cambio actualizando la fecha de "Última actualización" de esta Política.
                            Cualquier cambio o modificación entrará en vigencia inmediatamente después de publicar la Política actualizada en el Sitio.
                            </p>                 

                        </div>
                    </div>
                    <div class="rounded-t-lg border-2 border-opacity-25 border-gray-600 p-3 mt-8 bg-gray-800">
                        <h3 class="text-lg leading-6 font-medium text-white">
                            Información
                        </h3>
                    </div>
                    <div class="rounded-b-lg border-2 border-opacity-25 border-gray-600 p-3 mb-6">
                        <div className="px-4 md:px-8 py-2">
                            <p className="text-sm md:text-base font-normal text-justify text-blue-103 mb-4">
                            Nuestro sitio web recoge información personal como Nombre,  
                            información de contacto, dirección de correo electrónico e información demográfica.
                            </p>
                            <p className="text-sm md:text-base font-normal text-justify text-blue-103 mb-4">
                                Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente 
                                para mantener un registro de usuarios, de los comentarios realizados, y mejorar nuestros servicios.
                                Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con notificaciones especiales, 
                                información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos 
                                serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
                                
                            </p>
                            <p className="text-sm md:text-base font-normal text-justify text-blue-103 mb-4">
                                Profesource está altamente comprometido para cumplir con el compromiso de mantener su información segura. 
                                Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún 
                                acceso no autorizado.
                            </p>
                        </div>
                    </div>
                    <div class="rounded-t-lg border-2 border-opacity-25 border-gray-600 p-3 mt-8 bg-gray-800">
                        <h3 class="text-lg leading-6 font-medium text-white">
                            Publicaciones
                        </h3>
                    </div>
                    <div class="rounded-b-lg border-2 border-opacity-25 border-gray-600 p-3 mb-6">
                        <div className="px-4 md:px-8 py-2 text-sm md:text-base font-normal text-justify text-blue-103">
                            
                            <div>
                                <ul className="space-y-2">
                                    
                                    <li>No se permite la presencia de ninguna persona u organización que reivindique una misión violenta o cometa actos de violencia.</li>
                                    <li>No se permite que las personas faciliten, organicen, promocionen o admitan determinadas actividades criminales o dañinas dirigidas a personas, negocios, propiedad o animales</li>
                                    <li>No se permite contenido cuyo fin sea engañar intencionalmente a las personas para obtener una ventaja o privar a alguien de dinero, propiedades o derechos legales.</li>
                                    <li>No se admite el lenguaje que incita al odio porque crea un ambiente de intimidación y exclusión y, en algunos casos, puede fomentar actos violentos en la vida real.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )

}

export default Policy;