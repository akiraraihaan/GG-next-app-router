"use client";

import React, { useState } from 'react'

const AdminProductPage = () => {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch('http://localhost:3000/api/revalidate?tag=products&secret=12345678', {
      method: "POST"
    });
    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };

  return (
    <div className='w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5'>
      <h1>{status}</h1>
      <button className='text-gray-300 border-[2px] border-gray-700 bg-gray-900 p-3 rounded-md hover:bg-gray-200 hover:text-gray-800 transition duration-300' onClick={() => revalidate()}>Revalidate</button>
    </div>
  )
}

export default AdminProductPage