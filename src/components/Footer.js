import React from 'react'
import { Link } from 'gatsby'

const Footer = (props) =>  {

  return(
      <div className="border-t md:px-4 bg-gray-101">
          
        <div class="max-w-screen-lg md:flex  mx-auto px-4 pt-2">
            <div className="flex flex-col items-center pr-4 pb-2 md:py-2 space-y-2 md:mr-24 md:w-64">
                
                    <h2 className="text-blue-900 text-base font-semibold">Profesource</h2>
                    <img class="rounded-lg w-12 hidden md:block"  src="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=428&q=80"/>
                
            </div>
            <div class="flex flex-wrap">
                <section class="text-blue-900 text-xs font-semibold md:text-base  
                border-b px-4 pb-2 md:py-2 w-full md:border-none md:w-56">
                    <Link className="md:hidden" to="/information/">Sobre Nosotros</Link>
                    <a className="hidden md:block">Sobre Nosotros</a>
                    <ul className="my-2 text-xs hidden md:block">
                        <li className="hover:text-blue-101 hover:font-semibold mb-2 text-blue-103 font-normal">
                            <Link to="/information/">
                                ¿Quiénes somos?
                            </Link>
                            
                        </li>
                        <li className="hover:text-blue-101 hover:font-semibold mb-2 text-blue-103 font-normal">
                            <Link to="/information/">
                                ¿Qué hacemos?
                            </Link>
                            
                        </li>

                    </ul>
                </section>
            </div>
            <div class="flex flex-wrap">
                <section class="text-blue-900 text-xs font-semibold md:text-base  
                border-b px-4 pb-2 md:py-2 w-full md:border-none md:w-56 ">
                    <Link className="md:hidden" to="/form/">Contáctanos</Link>
                    <a className="hidden md:block">Contáctanos</a>
                    <ul className="my-2 text-xs hidden md:block">
                        
                        <li className="hover:text-blue-101 hover:font-semibold mb-2 text-blue-103 font-normal">
                            <Link to="/form/">
                                Llenar formulario
                            </Link>
                            
                        </li>
                        
                    </ul>
                </section>
            </div>
            <div class="flex flex-wrap">
                <section class="text-blue-900 text-xs  font-semibold md:text-base
                border-b px-4 pb-2 md:py-2 w-full md:border-none md:w-56">
                    <div>
                        <Link className="md:hidden" >Noticias</Link>
                        <a className="hidden md:block">Noticias</a>
                        <ul className="my-2 text-xs hidden md:block">
                            <li className="hover:text-blue-101 hover:font-semibold mb-2 text-blue-103 font-normal">
                                <Link>
                                    Ver actualizaciones
                                </Link>
                            </li>

                        </ul>
                    </div>
                    
                </section>
            </div>

            <div class="flex flex-wrap">
                <section class="text-blue-900 text-xs  font-semibold md:text-base
                border-b px-4 pb-2 md:py-2 w-full md:border-none md:w-32">
                    <Link className="md:hidden" to="/page-2/">Ayuda</Link>
                    <a className="hidden md:block">Ayuda</a>
                    <ul className="my-2 text-xs hidden md:block">
                        <li className="hover:text-blue-101 hover:font-semibold mb-2 text-blue-103 font-normal">
                            <Link to="/page-2/">
                                Publicar Post
                            </Link>
                        </li>

                    </ul>
                </section>
            </div>
            
        </div>
        <div class="max-w-screen-lg mx-auto border-none  px-4">
            <section className="flex flex-col px-4 md:px-0 md:flex-row md:justify-between md:border-solid text-gray-700 font-light text-sm pt-4 pb-6 md:py-3  w-full">
                <div>
                    <p class="leading-8 tracking-wide">
                        &copy; Profesource, Guayaquil, Ecuador
                    </p>
                    
                </div>
                <div>
                    <p class="leading-8 tracking-wide">Derechos Reservados</p>
                </div>
            </section>
        </div>
      </div>
  )
}

export default Footer