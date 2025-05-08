import React from 'react'
const key = [0, 1, 2, 3, 4, 5];

const Loading = () => {
  return (
    <div className='grid grid-cols-3 mt-5 place-items-center'>     
      {key.map((item) => (
        <div key={item} className="w-full max-w-sm bg-white rounded-lg shadow-sm dark:bg-gray-400 my-2">
            <a href="#">
                <img className="p-8 rounded-t-lg object-cover h-96 w-full" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGo4aTd2cGZ4bWJ6M24yOTllYmQwYnJkYXp1NTVoeml1NjhkZng4ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/giphy.webp" alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                      Loading ...
                    </h5>
                </a>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Loading ...</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Buy
                    </a>
                </div>
            </div>
        </div>
      ))};
    </div>
  )
}

export default Loading