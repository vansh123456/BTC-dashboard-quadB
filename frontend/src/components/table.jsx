import React, { useState, useEffect } from 'react';
import axios from 'axios'

export const Table = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        const values = async () => {
            try {
                const response  = await axios.get('http://localhost:3001/api/v1/display');
                setData(response.data);
            }
            catch(err)
            {
                console.error(err);
            }
        }
        values();
    },[]);
    return (
        // <div className="container mx-auto mt-8">
        //   <table className="min-w-full bg-white border border-gray-300">
        //     <thead>
        //       <tr className="bg-gray-800 text-white">
        //         <th className="py-2 px-4 border-b">Name</th>
        //         <th className="py-2 px-4 border-b">Last</th>
        //         <th className="py-2 px-4 border-b">Buy</th>
        //         <th className="py-2 px-4 border-b">Sell</th>
        //         <th className="py-2 px-4 border-b">Volume</th>
        //         <th className="py-2 px-4 border-b">Base Unit</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {data.slice(0, 10).map((item, index) => (
        //         <tr key={index} className="text-center">
        //           <td className="py-2 px-4 border-b">{item.name}</td>
        //           <td className="py-2 px-4 border-b">{item.last}</td>
        //           <td className="py-2 px-4 border-b">{item.buy}</td>
        //           <td className="py-2 px-4 border-b">{item.sell}</td>
        //           <td className="py-2 px-4 border-b">{item.volume}</td>
        //           <td className="py-2 px-4 border-b">{item.base_unit}</td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table>
        // </div>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Traded Price(₹)
                </th>
                <th scope="col" className="px-6 py-3">
                    Buy/Sell Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Volume
                </th>
                <th scope="col" className="px-6 py-3">
                   Base-Unit
                </th>
            </tr>
        </thead>
        <tbody>
            <>
        {data.slice(0, 10).map((item, index) => (
            <tr  key= {index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>
                <td className="px-6 py-4">
                    {item.last}
                </td>
                <td className="px-6 py-4">
                    {item.buy} / {item.sell}
                </td>
                <td className="px-6 py-4">
                    {item.volume}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{item.base_unit}</a>
                </td>
            </tr>
            
            ))}
            </>
        </tbody>
    </table>
</div>

      );
}