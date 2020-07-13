import React from 'react'
import Button from '@components/Button'

const PopularPost = () => {
  return (
    <div className="rounded-lg mt-8 md:ml-24 border-solid border-2 border-gray-101 text-base h-auto ml-12 mb-8 w-3/4">
      <div className="my-2 md:flex">
        <div class="mt-4 md:mt-0 md:ml-6">
          <h2 class="p-3 text-lg text-blue-102 text-justify">Más popular</h2>
          <p class="p-3 text-justify font-normal">
            ¿Cuales son los tipos de fallas de los materiales? En la materia de
            Ciencias de materiales revisamos este tema y surgio una duda
            existencial al problema, porque si yo la amo a ella entonces ¿por
            que ella no me ama a mi?
          </p>
        </div>
        <div class="m-4 md:mr-8 mt-4 content-center md:flex-shrink-0">
          <img
            class="rounded-lg md:w-56"
            src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80https://imgur.com/a/0Jlvibw"
            alt="popularPostImg"
          />
        </div>
      </div>
      <div className="md:ml-6">
        <button className="py-1 px-6 m-4  bg-blue-106 shadow text-white rounded-lg focus:outline-none focus:bg-blue-103 hover:bg-blue-103">
          Ir
        </button>
      </div>
    </div>
  )
}

export default PopularPost
