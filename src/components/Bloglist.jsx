import React, { useState } from "react";
import "../Style.css";
import { blog_data } from "../Assets/assets";
import Blogitem from "./Blogitem";


const Bloglist = () => {

    const[menu,setmenu]=useState("All")
  return ( 
    <div>
      <div className="bloglistmain">
        <button onClick={()=>setmenu("All")} className={menu==="All"?"btn-one":""}>All</button>
        <button onClick={()=>setmenu("Technology")} className={menu==="Technology"?"btn-one":""}>Technology</button>
        <button onClick={()=>setmenu("Startup")} className={menu==="Startup"?"btn-one":""}>Startup</button>
        <button onClick={()=>setmenu("Lifestyle")} className={menu==="Lifestyle"?"btn-one":""}>Lifestyle</button>
      </div>
      <div className="bloglist-one">
        {blog_data.filter((item)=>menu==="All"?true:item.category===menu).map((item, index) => {
          return (
            <Blogitem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bloglist;
