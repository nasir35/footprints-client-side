import React from 'react';
import { Link } from 'react-router-dom';

const Package = ({pack}) => {
    const {img, title, CostPerPerson, rating, tourDuration} = pack;
    // console.log(pack);
    return (
        <div className="p-3 border rounded shadow-inset space-y-2">
            <img src={img} alt="" className="" />
            <h2 className="text-xl font-medium font-roboto text-coral"><i className="fas fa-map-marker-alt"></i> {title}</h2>
            <div className="flex justify-between sm:text-base text-sm">
                <p className="font-medium text-stromboli"><b>{CostPerPerson}</b>/per person</p>
                <p className="font-medium text-stromboli"><i className="far fa-calendar-alt mr-1"></i> {tourDuration}</p>
            </div>
            <p className="text-coral pb-3"><i className="fas fa-star mr-1"></i>{rating} Rating</p>
            <Link to={`packages/${pack._id}`}><button className="px-5 py-1 bg-green-custom text-white rounded"><i className="far fa-paper-plane"></i> Book now</button></Link>
        </div>
    );
};

export default Package;