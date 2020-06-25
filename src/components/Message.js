import React from 'react';

class Message extends React.Component{
    render(){
        return (
            <div className="rounded-lg border-4 border-opacity-50 border-gray-800">
                <div>
                    <h2 class="p-3 text-white bg-gray-800 text-justify">Profesource</h2>
                    <p class="p-3 text-justify">Somos una comunidad que brinda un espacio para que estudiantes puedan brindar o pedir ayuda en temas educativos.</p>
                </div>
            </div>
        );
    }
}

export default Message;