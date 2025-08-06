import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { NewContext } from "../context/Context";
import { useContext } from "react";



function Catagory() {
  const {categoryData, setCategoryData} = useContext(NewContext)
  

    const product = [1,2,3,4,5,6,7,8];

    //slide changing state
    const [slide,setSlide] = useState(0)
    

    const next = ()=>{
      if(slide < product.length - 2 ){
        setSlide(slide + 1);
      }else{}
    }
    const prev = ()=>{
      if(slide > 0){
        setSlide(slide - 1);
      }else{
      }
    }
    

    


  return (
    <div className="border-2 border-zinc-500 m-2 p-1 rounded-md" >
      <div className="flex items-center justify-between m-2 ">
        <h1 className="text-xl">Categories</h1>
        <div className="flex gap-4">
          <div onClick={prev} className="bg-zinc-400 w-fit p-1.5 rounded-full ">
            <FaArrowLeft />
          </div>
          <div onClick={next} className="bg-zinc-400 w-fit p-1.5 rounded-full">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="none m-2 p-3 rounded flex gap-1 overflow-x-auto">
        { 
          categoryData?.cards?.[0]?.card?.card?.imageGridCards?.info &&
          Array.isArray(categoryData?.cards?.[0]?.card?.card?.imageGridCards?.info) &&
          categoryData?.cards?.[0]?.card?.card?.imageGridCards?.info.length > 0 ? (
            categoryData.cards[0].card.card.imageGridCards.info.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="container flex flex-col justify-center p-2 w-fit rounded duration-700"
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                  <div className="h-[80px] w-[80px]">
                    {item.imageId ? (
                      <img
                        className="object-cover h-full w-full rounded"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                        alt={item.accessibility?.altText || "category"}
                      />
                    ) : (
                      <div className="bg-gray-200 h-full w-full flex items-center justify-center rounded">
                        <span>No Image</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h1 className="w-fit">{item.accessibility?.altText || "item name"}</h1>
                  </div>
                </div>
              );
            })
          ) 
          : (
            <div className="text-gray-500">No categories found.</div>
          )   
        }
      </div>
    </div>
  );
}

export default Catagory;
