import React from 'react'
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Oval
        height={40}
        width={40}
        color="#8b5cf6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#e9d5ff"
        strokeWidth={6}
        strokeWidthSecondary={6}
      />
    </div>
  );
}

export default Loader