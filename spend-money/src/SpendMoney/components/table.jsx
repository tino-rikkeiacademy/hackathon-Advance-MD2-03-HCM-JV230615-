// import React from 'react'

import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Table({
  productArr,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  getTotal,
  removeItem
}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="flex justify-between">
                <h1 className=" text-lg font-medium">Shopping Cart</h1>
                <div>
                  <span>{productArr.length}</span>&nbsp; items
                </div>
              </div>
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      &nbsp;
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      &nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productArr.length > 0 ? (
                    productArr.map((item, index) => (
                      <tr
                        key={item.id}
                        className={` ${
                          item.id % 2 ? "bg-white-100" : "bg-gray-100"
                        } border-b`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img className=" w-14" src={item.image} alt="" />
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          ${item.price}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="flex justify-center w-1/5">
                            <div
                              onClick={() => decreaseQuantity(item, index)}
                              className="cursor-pointer"
                            >
                              <svg
                                className="fill-current text-gray-600 w-3 "
                                viewBox="0 0 448 512"
                              >
                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                              </svg>
                            </div>
                            <p className="mx-2 px-2 border text-center w-8 -mt-1">
                              {item.quantity}
                            </p>
                            <div
                              onClick={() => increaseQuantity(item, index)}
                              className="cursor-pointer"
                            >
                              <svg
                                className="fill-current text-gray-600 w-3 cursor-pointer"
                                viewBox="0 0 448 512"
                              >
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          ${item.price * item.quantity}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div 
                          className="cursor-pointer text-center"
                          onClick={() => removeItem(item, index)}
                          >
                            <DeleteIcon />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center">
                        Không có sản phẩm nào được mua !!!!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="flex justify-end my-5">
                <button className="text-red-700" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
