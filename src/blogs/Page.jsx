"use client";
import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../Assets/assets";
import "../Style.css";

const Page = ({ params }) => {
  const [data, setdata] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setdata(blog_data[i]);

        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="Page-one">
        <div className="Page-two">
          <img src={assets.logo} width={180} alt="" className="" />
          <button className="Page-two-btn">
            Get Started
            <img src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="page-three">
          <h1>{data.title}</h1>
          <img src={data.author_img} width={60} height={60} alt="" />
          <p>{data.author}</p>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Page;
