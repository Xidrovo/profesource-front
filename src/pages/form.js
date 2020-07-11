import React, { useState } from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '@components/Layout'

const FormPage = (props) => {
  var LOCATION_KEY = 'AIzaSyAp8PdAo33pwVlNZKxlmbcHUOBeTfghXW4'
  return (
    <Layout title="Contáctanos">
      <SEO title="Contáctanos" />
      <form>
        <div class="px-6">
          <div class="mt-8 border-t border-gray-200 pt-8">
            <div class="rounded-t-lg border-2 border-opacity-25 border-gray-600 p-3 bg-gray-800">
              <h3 class="text-lg leading-6 font-medium text-white">
                Datos Personales
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
                    class="form-input shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:shadow-outline transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                    class="form-input shadow appearance-none border rounded w-full text-gray-700 leading-tight  focus:shadow-outline transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label
                  for="cell-phone"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Celular
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="cell-phone"
                    class="form-input shadow appearance-none border rounded w-full text-gray-700 leading-tight  focus:shadow-outline transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                    class="form-input shadow appearance-none border rounded w-full text-gray-700 leading-tight  focus:shadow-outline transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                    class="form-input shadow appearance-none border rounded w-full text-gray-700 leading-tight  focus:shadow-outline transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                      id="zona"
                      class="form-input shadow appearance-none border rounded w-full text-gray-700 leading-tight  focus:shadow-outline transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    >
                      <option>Villaclub</option>
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
                    Ubicacion
                  </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.google.com.ec/maps/place/Escuela+Superior+Polit%C3%A9cnica+del+Litoral+(ESPOL)/@-2.1481404,-79.9666772,17z/data=!3m1!4b1!4m5!3m4!1s0x902d72f925e5bfdb:0x327cdb9f7f4ba3b2!8m2!3d-2.1481458!4d-79.9644885`}
                      className="mt-1 text-left"
                    >
                      <img
                        id="mapa"
                        alt="Ubicación"
                        crossOrigin="anonymous"
                        className="w-auto"
                        src={`https://www.google.com.ec/maps/place/Escuela+Superior+Polit%C3%A9cnica+del+Litoral+(ESPOL)/@-2.1481404,-79.9666772,17z/data=!3m1!4b1!4m5!3m4!1s0x902d72f925e5bfdb:0x327cdb9f7f4ba3b2!8m2!3d-2.1481458!4d-79.9644885&key=${LOCATION_KEY}`}
                      />
                    </a>
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
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>
            </div>
            <div class="mt-6">
              <fieldset>
                <legend class="text-base font-medium text-gray-900">
                  By Email
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
                      <label for="comments" class="font-medium text-gray-700">
                        Comentarios
                      </label>
                      <p class="text-gray-500">
                        Te notificaremos cuando alguien haya respondido a tu
                        pulicacion
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
                        <label for="new_post" class="font-medium text-gray-700">
                          Nuevas publicaciones
                        </label>
                        <p class="text-gray-500">
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
                          class="font-medium text-gray-700"
                        >
                          Nuevos grupos
                        </label>
                        <p class="text-gray-500">
                          Te notificaremos cuando haya una actualizacion de
                          nuevos grupos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="mt-6">
                <legend class="text-base font-medium text-gray-900">
                  Push Notifications
                </legend>
                <p class="text-sm leading-5 text-gray-500">
                  Estos son envios via SMS a tu celular
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
        <div class="mt-8 border-t border-gray-200 pt-5 mb-6">
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
        <div className="flex justify-center">
          <Link to="/">
            <div className="p-4 bg-blue-700 hover:bg-blue-500 text-white hover:text-gray-700 text-center rounded-lg">
              Go back to the homepage
            </div>
          </Link>
        </div>
      </form>
    </Layout>
  )
}

export default FormPage
