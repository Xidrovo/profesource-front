import React  from 'react'


const UpdateCard = (props) =>(

    <div className="text-base py-4 space-y-2 px-6 md:px-12">
        <div class="text-gray-900 font-semibold mb-2">
            <h4>{props.title}</h4>
        </div>
        <div  class="text-gray-900 font-normal text-sm text-justify">
            <p>{props.description}</p>
        </div>

    </div>
)

export default UpdateCard;