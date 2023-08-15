import React from "react";

export default function ShoppingCart() {
    return (
        <div className="pb-10">
            <div className=" w-full mt-10">
                <div className="flex justify-center shadow-md my-10">
                    <div className="w-[90%] bg-white px-10 py-10">
                        <div className="flex justify-between pb-8">
                            <h1 className="font-semibold text-2xl">
                                Shopping Cart
                            </h1>
                            <h2 className="font-semibold text-2xl">1 Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                Product Details
                            </h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                Quantity
                            </h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                Price
                            </h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                Total
                            </h3>
                        </div>
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img
                                        className="h-24"
                                        src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                                        alt='true'
                                    />
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">
                                        Iphone 6S
                                    </span>
                                    <a
                                        href="#"
                                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                    >
                                        Remove
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5">
                                <div className="cursor-pointer">
                                    <svg
                                        className="fill-current text-gray-600 w-3 "
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </div>
                                <p className="mx-2 border text-center w-8 -mt-1">
                                    1
                                </p>
                                <div className="cursor-pointer">
                                    <svg
                                        className="fill-current text-gray-600 w-3 cursor-pointer"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">
                                $400.00
                            </span>
                            <span className="text-center w-1/5 font-semibold text-sm">
                                $400.00
                            </span>
                        </div>
                        {/* <p className="text-center mt-5">Không có sản phẩm nảo hết chơn !!!!</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
