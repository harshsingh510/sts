import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYS2cqU3_eFcCTRGK6YXD_pTTEOlGbr4fs816ccQWmapx1ueU2rr1HomsKMmsZH6MG5dytZ7EYqIqEKtpXUguq5Pbw1n=w1920-h948)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[white] font-[600] capitalize`}
        >
          Be it any hardware <br /> Sanjeevni is a place
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[white]">
          A complete solution for your Tools and Services 
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
