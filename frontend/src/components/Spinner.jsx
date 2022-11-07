import React from "react";
import { Bars } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Bars
        color="#f87171"
        height={50}
        width={200}
        visible={true}
        ariaLabel="bars-loading"
        className="m-5"
      />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
