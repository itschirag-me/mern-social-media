import React from 'react'
import { TbError404 } from "react-icons/tb"

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-lg font-medium text-violet-500">
      <TbError404 className="text-6xl" />
    </div>
  );
}

export default NotFound