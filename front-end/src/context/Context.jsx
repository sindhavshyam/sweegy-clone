import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const NewContext = createContext();

function Context(props) {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/swiggy")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategoryData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <NewContext.Provider value={{ categoryData, setCategoryData }}>
      {props.children}
    </NewContext.Provider>
  );
}

export default Context;
