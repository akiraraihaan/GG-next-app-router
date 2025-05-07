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
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>{status}</h1>
      <button className='text-gray-300 bg-gray-900 p-3 rounded-md hover:bg-gray-200 hover:text-gray-800 transition duration-300' onClick={() => revalidate()}>Revalidate</button>
    </div>
  )
}

export default AdminProductPage