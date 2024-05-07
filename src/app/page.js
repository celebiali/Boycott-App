"use client"
import React, { useState } from "react";
import jsonData from "../boykot.json"; // Assuming your JSON data is here

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(jsonData);


    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterData(value);
    };


    const filterData = (searchTerm) => {
        const filteredData = jsonData.filter((item) =>
            item.isim.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
    };
    return (
    <div className="w-full mt-6">
        <form className="w-1/4 mx-auto ">
            <div className="flex">
                <div className="relative w-full">
                    <input type="search"
                           value={searchTerm}
                           onChange={handleInputChange} id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-s-2 border border-gray-300  dark:bg-gray-700" placeholder="Search" required />
                </div>
            </div>
        </form>
        <div className="mt-8">
            {filteredData.map((item) => (
                <div key={item.id} className="flex items-center justify-center mt-4">
                    <a href="#" className="w-[300px] h-[100px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.isim}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{item.al_alma}</p>
                    </a>
                </div>
            ))}
        </div>
        </div>
    );
}