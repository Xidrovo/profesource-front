import React, { useState } from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '@components/Layout'

const FormPage = () => {
  return (
    <Layout title="Form">
      <SEO title="Contactanos" />
      <form>
        <div>
          <div class="mt-8 border-t border-gray-200 pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Datos Personal
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
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
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                  <textarea id="detail" rows="20" cols="50" />
                </div>
              </div>

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
                    class="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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

              
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Notifications
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
                        Comments
                      </label>
                      <p class="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="candidates"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-5">
                        <label
                          for="candidates"
                          class="font-medium text-gray-700"
                        >
                          Candidates
                        </label>
                        <p class="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="offers"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-5">
                        <label for="offers" class="font-medium text-gray-700">
                          Offers
                        </label>
                        <p class="text-gray-500">
                          Get notified when a candidate accepts or rejects an
                          offer.
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
                  These are delivered via SMS to your mobile phone.
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
                        Everything
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
                        Same as email
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
                        No push notifications
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-5">
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
