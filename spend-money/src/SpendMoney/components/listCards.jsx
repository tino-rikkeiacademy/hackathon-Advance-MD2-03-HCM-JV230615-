import React from 'react';
import { Card, List } from 'antd';

const ListCards = ( {selectQuantity, handleChange, productArr, handleAdd } ) => (
  <List
  className=' m-9 mt-20'
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      xxl: 6,
    }}
    dataSource={productArr}
    renderItem={(item) => (
      <List.Item>
        <Card
      style={{
        width: 240,
        boxShadow: "1px 2px 9px #F4AAB9",
      }}
      cover={
        <img
          className=" w-full"
          style={{
            height: 270,
          }}
          alt="example"
          src={item.image}
        />
      }
    >
      <div className="flex justify-between font-bold">
        <div>{item.title}</div>
        <div>${item.price}</div>
      </div>

      <div
        className="flex justify-center mt-2 rounded-md shadow-sm"
        role="group"
      >
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium  rounded-l-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white"
        >
          Interest
        </button>
        <input
          type="text"
          size={5}
          className="border text-center"
          value={1}
          onChange={(event) => handleChange(event)}
        />
        <button
          onClick={() => handleAdd(item)}
          type="button"
          className="px-4 py-2 text-sm font-medium rounded-r-md  hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 bg-red-700 dark:border-red-600 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-500 dark:focus:text-white"
        >
          Add
        </button>
      </div>
    </Card>
      </List.Item>

    )}
    
  />
);
export default ListCards;