import React from "react";
import { ThreeDots } from "react-loader-spinner";

const loader = () => {
  return (
    <div>
      <ThreeDots
        height="180"
        width="180"
        radius="9"
        color="#4DC5F0"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default loader;
