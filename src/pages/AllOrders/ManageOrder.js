import React from 'react';

const ManageOrder = ({singleOrder, row}) => {
    const {packageName, price, packageImg, email, date, orderStatus} = singleOrder;

    //UPDATE order status
    const handleUpdate = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method : 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    //DELETE an order
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel the order?');
        if (proceed){
            const url = `https://footprints-node-server.herokuapp.com/orders/${id}`;
            fetch(url, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
                if(result.deletedCount == 1){
                    alert('Deleted Successfully!');
                }
            })
        }
    };
    return (
        <>
            <tr className="border">
                <td className="border">{row+1}</td>
                <td className=" flex justify-evenly py-1">
                    <img src={packageImg} className="w-24 rounded-full" alt="" />
                    <div className="inline-block">
                        <h6>{packageName}</h6>
                        <p>Cost : {price}</p>
                    </div>
                </td>
                <td>{email}</td>
                <td className="">{date}</td>
                <td className="" className={`${orderStatus=='pending' ? 'text-coral' : 'text-green-custom'}`}>{orderStatus}</td>
                <td className=""><button className="mr-3 bg-green-custom rounded p-1 text-white" onClick={() => handleUpdate(singleOrder._id)}>Approve</button><button className="bg-red-600 p-1 rounded text-white" onClick={() => handleDelete(singleOrder._id)}>Cancel</button></td>
            </tr>
        </>
    );
};

export default ManageOrder;