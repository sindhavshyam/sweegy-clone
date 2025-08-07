import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { NewContext } from "../context/Context";
import { useContext } from "react";



function Catagory() {
  const {categoryData, setCategoryData} = useContext(NewContext)
  // console.log(categoryData.data.cards[0].card.card.imageGridCards.info)
  

    

    
    

    
    
    const info = categoryData?.data?.cards?.[0]?.card?.card?.imageGridCards?.info;
    if (!info) {
    return <p className="m-4">Loading categories...</p>; // or a spinner
  }
    


  return (
    <div className="border-2 border-zinc-500 m-2 rounded-md" >
      <div className="flex items-center justify-between m-2 ">
        <h1 className="text-xl bg-zinc-200 px-2 w rounded w-full">Categories</h1>
      </div>
      <div className="none m-2 rounded flex gap-1 overflow-x-auto">
        {           
          categoryData.data.cards[0].card.card.imageGridCards.info.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="container flex flex-col justify-center p-2 w-fit rounded duration-700">
                  <div className="h-[80px] w-[80px]">
                    <img
                      className="object-cover h-full w-full rounded"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${item.imageId}`}
                      alt={`Category ${item}`}
                    />
                  </div>
                </div>
              );
            })
           
           
        }
      </div>
    </div>
  );
}

export default Catagory;
