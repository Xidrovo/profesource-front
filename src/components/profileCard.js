import React from 'react';
import LocationIcon from '@Icons/LocationIcon';
import CalendarIcon from '@Icons/CalendarIcon';

const ProfileCard = (props) =>{
    return(
        <div className=" flex border border-solid-2  m-3 bg-white rounded rounded-lg md:w-64 md:flex-col ">
            <div className="flex justify-center items-center">
                    <img
                        className="h-30 rounded-md ml-3 my-2 md:rounded-t-lg md:rounded-b-none md:w-64 md:m-0"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        />
                </div>
            <div className="flex-col items-center justify-start space-y-3 m-4">
    
                <div>
                    <h5 className=" text-xl text-blue-103  font-semibold">{props.name}</h5>
                    <h5 className="text-lg text-blue-103">{props.username}</h5>
                </div>
                <div className=" flex space-x-1">
                    <LocationIcon
                    className="fill-current text-blue-101"
                    width="15px"
                    color={'#52658f'}
                    ></LocationIcon>
                    <h5 className="text-base text-blue-103">{props.location}</h5>

                </div>
                <div className="flex space-x-1">
                    <CalendarIcon
                    className="fill-current text-blue-101"
                    width="15px"
                    color={'#52658f'}
                    >
                    </CalendarIcon>
                    <h5 className="text-xs text-blue-103">Desde {props.joinTime}</h5>
                </div>
                
            </div>
               
        </div>
    )
}


export default ProfileCard;