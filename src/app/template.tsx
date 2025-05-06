"use client"
import { useState } from "react";

const Template = ( {children} : {children: React.ReactNode} ) => {
  const [varz, setVarz] = useState(0);

  return (
    <>
      <h1>Template</h1>
      {children}
      <div className="m-8 text-4xl">
        {varz} (template)
      </div>
      <button className="m-2 font-bold text-green-800" onClick={() => setVarz(varz + 1)}>Increment</button>
      <button className="m-2 font-bold text-red-800" onClick={() => setVarz(varz - 1)}>Decrement</button>
    </>
  )
}

export default Template;