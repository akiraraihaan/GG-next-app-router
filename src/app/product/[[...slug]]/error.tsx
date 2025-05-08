"use client";

import { useEffect } from "react";

import React from 'react'

const Error = ( { error, reset }: { error: Error, reset: () => void } ) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold text-red-700">Something went wrong!</h2>
      <button className="bg-blue-200 text-blue-900 px-4 py-1 rounded-md hover:shadow-xl mt-4 transition duration-300" onClick={() => reset()}>Try Again</button>
    </div>
  )
}

export default Error
