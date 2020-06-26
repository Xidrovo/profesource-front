import React, { useState, Component } from 'react'
import Boton from '../components/Boton.js'

class Popular extends React.Component{
    render(){
        return (
            <div className=" md:ml-24 border-solid border-2 border-gray-101 w-3/4 text-base h-auto ml-12 mb-8 w-1/2">
                <div >
                <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80https://imgur.com/a/0Jlvibw"/>
                    <h2 class="p-3 text-justify">Mas popular</h2>
                    <p class="p-3 text-justify">Post mas popular jsdkjgfjg lfkkhfohlllkylkflyfmkfj fkljhfkjh fkgjkfjg sd gh .</p>
                    <Boton />
                </div>

            </div>
        );
    }
}

export default Popular;