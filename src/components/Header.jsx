import React from "react";
import "../Style.css";
import { assets } from "../Assets/assets";

const Header = () => {
  return (
    <div className="headermain container">
      <div className=" headerSec ">
        <img
          src={assets.logo}
          width={180}
          className="w-[130px] sm:w-auto companyLogo"
          alt=""
        />
        <button className=" btnHeader ">
          Get Started <img src={assets.arrow} alt="" />
        </button>
      </div>
      <div className="Headerthree">
        <h1 >Latest Blogs</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dicta dolore exercitationem minus! Dolorum hic quidem dolor dicta inventore ad soluta, harum optio facere? Soluta saepe repudiandae culpa dignissimos explicabo.</p>
        <form className="form" >
            <input type="email" placeholder="enter your email" className="form-control" />
            <button type="submit" className=" active:bg-gray active:text-white">Subscribe</button>
        </form>


      </div>
    </div>
  );
};

export default Header;
