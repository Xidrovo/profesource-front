import React, { useState } from 'react'
import { Link } from 'gatsby'
import Iframe from 'react-iframe'

import SEO from '@structure_f/seo'
import Layout from '@structure_f/Layout'
import axios from 'axios'

const FormPage = (props) => {
  var LOCATION_KEY = process.env.PROD_KEY

  const [info, setDatos] = useState({
    first_name:'',
    last_name: '',
    cell_phone: '',
    email: '',
    detail: '',
    zone: ''
  })

  const handleSubmit = (e) => {
    console.log("enviando")
    console.log(info)
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3000/api/send", 
      data:  info
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  const handleInputChange = (event) =>{
    setDatos({
      ...info,
      [event.target.id]: event.target.value
    })
  }

  const { first_name, last_name, cell_phone, email, detail, zone } = info
  return (
    <Layout title="Contáctanos">
      <SEO title="Contáctanos" />
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div class="px-6">
          <div class="mt-8 border-t border-gray-200 pt-8">
            <div class="rounded-t-lg border-2 border-opacity-25 border-gray-600 p-3 bg-gray-800">
              <h3 class="text-lg leading-6 font-medium text-white">
                Datos Personales
                {/* {console.log(LOCATION_KEY)} */}
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-500">
                Usa un correo fijo donde puedas ser contactado
              </p>
            </div>
            <div class="rounded-b-lg border-2 border-opacity-25 border-gray-600 p-3 mb-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="first_name"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Nombre
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="first_name"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="last_name"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Apellido
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label
                  for="cell_phone"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Celular
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="cell_phone"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Correo
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label
                  for="detail"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Detalle
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="detail"
                    rows="10"
                    cols="50"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <div class="rounded-t-lg border-2 border-opacity-25 border-gray-600 p-3 bg-gray-800">
                <h3 class="text-lg leading-6 font-medium text-white">
                  Domicilio
                </h3>
              </div>
              <div class="rounded-b-lg border-2 border-opacity-25 border-gray-600 p-3 mb-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    for="zona"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Zona
                  </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <select
                      id="zone"
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      onChange={handleInputChange}
                    >
                      <option>Seleccione</option>
                      <option>Villaclub</option>
                      <option>La Joya</option>
                      <option>Guasmo</option>
                      <option>Florida</option>
                      <option>Sauces</option>
                      <option>Mapasingue</option>
                      <option>Sopeña</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label
                    for="ubicacion"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Ubicación
                  </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0458467302833!2d-79.91586848513842!3d-2.1360918984429293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d64016bc311:0x7828cb2d24ac78bd!2sRío Sucua, Guayaquil 090501!5e0!3m2!1ses!2sec!4v1591226718407!5m2!1ses!2sec`}
                      className="mt-1 text-left"
                    />
                    <div className="content-center">
                      <div className="w-auto" id="ubicacion">
                        <Iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0458467302833!2d-79.91586848513842!3d-2.1360918984429293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d64016bc311%3A0x7828cb2d24ac78bd!2sR%C3%ADo%20Sucua%2C%20Guayaquil%20090501!5e0!3m2!1ses!2sec!4v1591226718407!5m2!1ses!2sec"
                          width="300"
                          height="350"
                          frameborder="0"
                          style="border:0;"
                          allowfullscreen=""
                          aria-hidden="false"
                          tabindex="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Notificaciones
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-500">
              Siempre le informaremos acerca de cambios importantes, pero usted elige sobre qué quiere saber.
              </p>
            </div>
            <div class="mt-6">
              <fieldset>
                <legend class="text-base font-medium text-gray-900">
                  Vía Email
                </legend>
                <div class="mt-4">
                  <div class="relative flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="comments"
                        type="checkbox"
                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-5">
                      <label
                        for="comments"
                        class="font-medium text-gray-700 my-auto"
                      >
                        Comentarios
                      </label>
                      <p class="text-gray-500 my-auto">
                        Te notificaremos cuando alguien haya respondido a tu
                        pulicación
                      </p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="new_post"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-5">
                        <label
                          for="new_post"
                          class="font-medium text-gray-700 my-auto"
                        >
                          Nuevas publicaciones
                        </label>
                        <p class="text-gray-500 my-auto">
                          Te notificaremos cuando hayan nuevas publicaciones en
                          los grupos
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="new_groups"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-5">
                        <label
                          for="new_groups"
                          class="font-medium text-gray-700 my-auto"
                        >
                          Nuevos grupos
                        </label>
                        <p class="text-gray-500 my-auto">
                          Te notificaremos cuando haya una actualización de
                          nuevos grupos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="mt-6">
                <legend class="text-base font-medium text-gray-900">
                  Notificaciones Push 
                </legend>
                <p class="text-sm leading-5 text-gray-500">
                  Estos son envíos vía SMS a tu celular
                </p>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="push_everything"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_everything" class="ml-3">
                      <span class="block text-sm leading-5 font-medium text-gray-700">
                        Todo
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="push_email"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_email" class="ml-3">
                      <span class="block text-sm leading-5 font-medium text-gray-700">
                        Enviar por correo
                      </span>
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="push_nothing"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_nothing" class="ml-3">
                      <span class="block text-sm leading-5 font-medium text-gray-700">
                        No enviar notificaciones
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-5 mb-6 mr-6">
          <div class="flex justify-end">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
              >
                Cancelar
              </button>
            </span>
            <span class="ml-3 inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Enviar
              </button>
            </span>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <Link to="/">
            <div className="p-4 bg-blue-700 hover:bg-blue-500 text-white hover:text-gray-700 text-center rounded-lg">
              Go back to the homepage
            </div>
          </Link>
        </div> */}
      </form>
    </Layout>
  )
}

export default FormPage
