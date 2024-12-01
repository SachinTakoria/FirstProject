import React from "react";
import "../Style.css";
import { assets } from "../Assets/assets";
import {Link} from "react-router-dom"


const Blogitem = ({title,description,category,image,id}) => {
  return (
    <div className="Blogmain">
      <Link to={`/blogs/${id}`}>
      <img  
        src={image}
        width={400}
        height={400}
        className=""
        alt=""
      /></Link>
      
      <p className="p-one">{category}</p>
      <div className="blogmainone">
        <h5>{title}</h5>
        <p className="p-two">{description}</p>
        <Link to={`/blogs/${id}`} className="blogs">
          
          Read more <img src={assets.arrow} alt="" width={12}/>
        </Link>
      </div>
    </div>
  );
};

export default Blogitem;
