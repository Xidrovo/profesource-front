import React from 'react'
import Button from '@components/Button'

const PopularPost = () => {
        return (
            <div className="rounded-lg mt-8 md:ml-24 border-solid border-2 border-gray-101 text-base h-auto ml-12 mb-8 w-3/4">
                <div>
                    <h2 class="p-3 text-justify">Mas popular</h2>
                    <p class="p-3 text-justify font-normal">
                    ¿Cuales son los tipos de fallas de los materiales?
                    En la materia de Ciencias de materiales revisamos este tema y surgio una duda existencial al problema, porque si yo la amo a ella entonces ¿por que ella no me ama a mi?
                    </p>
                    <img class="object-center h-32 ml-8 my-5" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80https://imgur.com/a/0Jlvibw"/>
                    <Button indicator="Ir"/>
                </div>
            </div>
        );
    }


export default PopularPost;