import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Order from './Order';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('https://footprints-node-server.herokuapp.com/orders')
        .then(res => res.json())
        .then(allOrders => {
            const myOrders = allOrders.filter(ord => ord.email==user.email)
            setOrders(myOrders)})
    }, [orders]);

    //----------------------Commenting the spinner, because when orderlist is empty it continiously spinnig...!
    // if(orders.length==0){
    //     return (
    //         <div class="flex justify-center items-center py-6">
    //             <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
    //             <div class=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
    //         </div>
    //     );
    // }  
    return (
        <div>
            <div id="heading" className="text-center">
                <h2 className="inline-block font-medium text-2xl rounded text-stromboli mb-2 px-4 border-b-4 border-coral">Your orders</h2>
                <p className="font-qsand text-gray-500">Here you can check your orders update and you can cancel your order anytime. Stay with us.</p>
            </div>
            <div id="order-list" className="my-4">
                <div className="p-12 pt-5">
                    <table className="w-full text-center border border-collapse">
                        <thead>
                            <tr className="border">
                                <th className="border">Sl No</th>
                                <th className="py-2">Ordered Package</th>
                                <th>Email</th>
                                <th className="">Date</th>
                                <th className="">Order Status</th>
                                <th className="">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map( (order, index) => <Order key={order._id} row={index} singleOrder={order}></Order>)
                            }
                        </tbody> 
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;