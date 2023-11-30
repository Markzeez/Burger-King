import React from "react";
import { data } from "./data/data.js";
import { useState } from "react";


  const Search = () => {
    // console.log(data)
    console.log(data);
    const [foods, setFoods] = useState(data);

    // Filter Search Name of the item
    const filterType = (category) => {
      setFoods(
        data.filter((item) => {
          return item.category === category;
        })
      );
    };
    const search = (e)=>{
      
    }

    return (
      <div>
        <div>
          <input type="text" onChange={e=>{filterType(e.target.value)}} placeholder="Search" />
        </div>
      </div>
    );
  };


export default Search;
