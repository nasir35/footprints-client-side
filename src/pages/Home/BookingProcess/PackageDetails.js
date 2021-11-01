import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const PackageDetails = () => {
    const {user} = useAuth() || {};
    const {packageId} = useParams();
    const history = useHistory();
    const [selectedPackage, setSelectedPackage] = useState([]);

    useEffect( () => {
        fetch(`https://footprints-node-server.herokuapp.com/packages/${packageId}`)
        .then(res => res.json())
        .then(data => setSelectedPackage(data))
    }, []);

    const {img, title, location, tourDuration, CostPerPerson, rating, travelType, description} = selectedPackage;
    
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = data => {
        data.id = selectedPackage._id;
        data.package = title;
        data.packageImg = img;
        data.price = CostPerPerson;
        data.orderStatus = 'pending';
        console.log(data);
        fetch('https://footprints-node-server.herokuapp.com/placeorder', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                reset();
                history.location.pathname = '';
                history.push('/placeorder')
            }
        })
        
    }
    return (
        <div className="md:p-10 sm:p-6 p-3">
            {selectedPackage.length==0 ?
            <div class="flex justify-center items-center py-6">
                <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
                <div class=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
            </div>
            :
                
                <div id="wrapper-div" className="grid grid-cols-5 gap-5">
                <div id="package-details" className="md:col-span-3 col-span-5 space-y-3">
                    <img src={img} alt="" className="rounded"/>
                    <div className="flex md:flex-row flex-col justify-between">
                        <h2 className="text-xl font-medium font-roboto text-stromboli">{title}</h2>
                        <p className="text-coral"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> <br /> Rating : {rating}</p>
                    </div>
                    <h5 className="font-qsand text-gray-700 text-lg font-medium"><i className="fas fa-map-marker-alt"></i> Location : {location}</h5>
                    <p className="text-gray-500">{description}</p>
                    <div className="flex justify-between flex-wrap border-t border-b drop-shadow-lg">
                        <p className="font-medium"><i className="far fa-clock text-coral"></i> Duration <br /> {tourDuration}</p>
                        <p className="font-medium md:mb-0 mb-3"><i className="fas fa-money-check-alt text-green-custom"></i> Cost <br /> {CostPerPerson}/per person</p>
                        <p className="font-medium"><i className="fas fa-globe-americas text-coral"></i> Travel Type <br /> {travelType}</p>
                        <p className="font-medium"><i className="fas fa-users text-green-custom"></i> Group Size <br /> {parseInt(Math.random(1)*10)+20} People</p>
                    </div>
                </div>
                <div id="order-form" className="md:col-span-2 col-span-5">
                    <div className="text-center">
                        <h2 className="inline-block px-4 border-b-4 rounded mb-3 border-green-custom md:text-2xl text-xl text-center text-stromboli font-qsand font-medium mt-5">Book this Package</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="md:p-5 pb-5 p-0 shadow-lg rounded mx-auto">
                        <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                            <label htmlFor="packageName" className="col-span-3 font-medium text-gray-600">Package</label>
                            <input {...register("packageName")} id="packageName" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" value={title} readOnly/>
                        </div>
                        <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                            <label htmlFor="name" className="col-span-3 font-medium text-gray-600">Name</label>
                            <input {...register("name")} id="name" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="Name" defaultValue={user.displayName} required/>
                        </div>
                        <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                            <label htmlFor="email" className="col-span-3 font-medium text-gray-600">Email</label>
                            <input {...register("email")} type="email" id="email" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="Email" defaultValue={user.email} readOnly required/>
                        </div>
                        <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                            <label htmlFor="phone" className="col-span-3 font-medium text-gray-600">Phone</label>
                            <input {...register("phone")} id="phone" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="+8801777777777" required/>
                        </div>
                        <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                            <label htmlFor="address" className="col-span-3 font-medium text-gray-600">Address</label>
                            <input {...register("address")} id="address" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="#H-32B, Neywork, USA" required/>
                        </div>
                        <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                            <label htmlFor="date" className="col-span-3 font-medium text-gray-600">Date</label>
                            <input {...register("date")} type="date" id="date" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" required/>
                        </div>
                        <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                            <label htmlFor="ticketType" className="col-span-3 font-medium text-gray-600">Ticket Type</label>
                            <select {...register("ticketType")} id="ticketType" className="col-span-9 mb-1 bg-indigo-100 px-3 py-1 rounded">
                                <option value="default">Ticket Type</option>
                                <option value="car">Travel with Car</option>
                                <option value="bus">Travel with Bus</option>
                                <option value="plane">Travel with Plane</option>
                            </select>
                        </div>
                        <div className="w-full grid grid-cols-12 mb-3 md:px-4 px-2">
                            <label htmlFor="message" className="col-span-3 font-medium text-gray-600">Message</label>
                            <textarea {...register("message")} id="message" rows='4' className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="leave your message here..."/>
                        </div>       
                        <input type="submit" className="px-8 md:py-2 py-1 bg-green-custom cursor-pointer hover:bg-white border-2 border-green-custom hover:border-green-custom text-lg font-medium font-mono text-white hover:text-green-custom transition rounded mt-5 block mx-auto" value="Place Order"/>
                    </form> 
                </div>
            </div>}
        </div>
    );
};

export default PackageDetails;