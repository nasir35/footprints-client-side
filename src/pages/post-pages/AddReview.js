import React from 'react';
import { useForm } from 'react-hook-form';
const AddReview = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://footprints-node-server.herokuapp.com/reviews', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Thanks for giving a review!');
                reset();
            }
            else{

            }
        })
    }
    return (
        <div>
            <div className="text-center">
                <h2 className="inline-block border-coral text-stromboli text-2xl px-4 border-b-4 rounded font-semibold font-qsand">Give a review!</h2>
            </div>
            <div className="text-center my-3">
                <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/6 w-full mx-auto">
                    <input type="text" {...register('name')} className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="name" id="name" />
                    <input type="text" {...register('profession')} className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="profession" id="profession" />
                    <input type="text" {...register('img')} className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="img link" id="img" />
                    <textarea type="text" {...register('review')} rows="6" className="block w-full border-2 rounded px-3 py-1 mb-3" placeholder="Write the review here..." id="review" />
                    <input type="submit" value="Post" className="px-10 mb-3 py-1 rounded cursor-pointer bg-green-custom text-white text-xl" />
                </form>
            </div>
            
        </div>
    );
};

export default AddReview;