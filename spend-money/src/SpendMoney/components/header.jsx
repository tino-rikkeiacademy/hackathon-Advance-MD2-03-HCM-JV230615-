import React from "react";

export default function Header( {selectQuantity, total, productArr, getTotal} ) {

  return (
    <div className="w-full fixed top-0 z-40 py-5 text-center text-white bg-[#d3163b]">
        To Spend&nbsp;
        ${getTotal()}
        &nbsp;
        You have money
    </div>
  );
}
