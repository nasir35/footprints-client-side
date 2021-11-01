import React from 'react';

const Order = ({singleOrder, row}) => {
    const {packageName, price, packageImg, email, date, orderStatus} = singleOrder;
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
                <td className=""><button className="text-white bg-red-500 hover:bg-red-600 p-1 rounded">Cancel</button></td>
            </tr>
        </>
    );
};

export default Order;