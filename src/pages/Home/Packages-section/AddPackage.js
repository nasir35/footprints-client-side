import React from 'react';
import { useForm } from "react-hook-form";

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
            fetch('https://footprints-node-server.herokuapp.com/add-a-package', {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.insertedId){
                    alert('Your package added successfully!');
                    reset();
                }
                else{
                    alert('Adding Package failed.')
                }
            })
        console.log(data)
    };

    return (
        <div className="my-5">
            <div className="text-center">
                <h2 className="inline-block text-2xl text-green-custom font-medium border-b-4 pb-1 font-roboto px-4 rounded border-green-custom mb-5">Add a Package</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 mx-auto">
                <div className="w-full grid grid-cols-12 border-b mb-3 px-4">
                    <label htmlFor="img" className="col-span-3 font-medium text-gray-600">Image Link</label>
                    <input {...register("img")} id="img" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="https://www.image.com.1.png"/>
                </div>
                <div className="w-full grid grid-cols-12 border-b mb-3 px-4">
                    <label htmlFor="title" className="col-span-3 font-medium text-gray-600">Package Title</label>
                    <input {...register("title")} id="title" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="Explore Kashmir!"/>
                </div>
                <div className="w-full grid grid-cols-12 border-b mb-3 px-4">
                    <label htmlFor="location" className="col-span-3 font-medium text-gray-600">Location</label>
                    <input {...register("location")} id="location" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="kashmir, India"/>
                </div>
                <div className="w-full grid grid-cols-12 border-b mb-3 px-4">
                    <label htmlFor="description" className="col-span-3 font-medium text-gray-600">Description</label>
                    <textarea {...register("description")} id="description" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="tell us about the tour..."/>
                </div>
                <div className="w-full grid grid-cols-12 border-b mb-3 px-4">
                    <label htmlFor="tourDuration" className="col-span-3 font-medium text-gray-600">Tour Duration</label>
                    <input {...register("tourDuration")} id="tourDuration" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="3 days, 2 night"/>
                </div>
                <div className="w-full grid grid-cols-12 border-b mb-3 px-4">
                    <label htmlFor="CostPerPerson" className="col-span-3 font-medium text-gray-600">Cost Per Person</label>
                    <input {...register("CostPerPerson")} id="CostPerPerson" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="$1000"/>
                </div>
                <div className="w-full grid grid-cols-12 border-b mb-3 px-4">
                    <label htmlFor="rating" className="col-span-3 font-medium text-gray-600">Rating by</label>
                    <input {...register("rating")} id="rating" className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded" placeholder="4K+"/>
                </div>
                <div className="w-full grid grid-cols-12 border-b mb-3 px-4">
                    <label htmlFor="travelType" className="col-span-3 font-medium text-gray-600">Travel Type</label>
                    <select {...register("travelType")} id="travelType" className="col-span-9 mb-1 bg-indigo-100 px-3 py-1 rounded">
                        <option value="vacationTours">Vacation Tours</option>
                        <option value="coupleTours">Couple Tours</option>
                        <option value="adventureTours">Adventure Tours</option>
                        <option value="groupTours">Group Tours</option>
                    </select>
                </div>        
                <input type="submit" className="px-8 py-2 bg-green-custom cursor-pointer hover:bg-white border-2 border-green-custom hover:border-green-custom text-lg font-medium font-mono text-white hover:text-green-custom transition rounded mt-5 block mx-auto" value="Add Package"/>
            </form>            
        </div>
    );
};

export default AddPackage;