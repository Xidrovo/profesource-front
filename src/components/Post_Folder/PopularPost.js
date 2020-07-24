import React from 'react'

const PopularPost = () => {
  return (
    <div className="rounded-lg mt-8 md:ml-24 border-solid border-2 border-gray-101 text-base h-auto ml-12 mb-8 w-3/4">
      <div className=" mx-2 md:mx-4">
        <h2 class="p-3 text-lg text-blue-102 text-justify">Más popular</h2>
        <div className="flex justify-center md:float-right">
          <img
            class=" rounded-lg h-24 mx-2 md:ml-4 my-5"
            src="https://i.postimg.cc/bvNRFSRf/1-hm7o-U-SULRne-UVZijmo-VFQ.png"
            alt="popularPostImg"
          />
        </div>
        <p class="p-3 text-justify font-normal">
          ¿Cuales son los tipos de fallas de los materiales? En la materia de
          Ciencias de materiales revisamos este tema y surgio una duda
          existencial al problema, porque si yo la amo a ella entonces ¿por que
          ella no me ama a mi?
        </p>
        <button className="py-1 px-6 m-4  bg-blue-106 shadow text-white rounded-lg focus:outline-none focus:bg-blue-103 hover:bg-blue-103">
          Ir
        </button>
      </div>
    </div>
  )
}

export default PopularPost
