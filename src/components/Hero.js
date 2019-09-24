import React from "react";
import Navbar from "../components/Navbar";
import { FaArrowDown } from "react-icons/fa";

const Hero = ({ title, img, subtitle, className }) => {
  return (
    <>
      <div
        className='full-width-image-container margin-top-0 site-hero'
        style={{
          backgroundImage: `linear-gradient(180deg, #7a7a7a47 0%, #f2295b42 100%), url(${
            !!img.childImageSharp ? img.childImageSharp.fluid.src : img
          })`,
          backgroundAttachment: "fixed"
        }}
      >
        <Navbar />
        <h2 className='has-text-weight-bold is-size-2'>{title}</h2>
        {subtitle ? <h3>{subtitle}</h3> : <></>}
        <button className='button'>La oss diskutere ditt prosjekt</button>
        <FaArrowDown className='arrowDown' />
      </div>
    </>
  );
};

export default Hero;

/*style={{
  backgroundImage: `linear-gradient(180deg, #7a7a7a47 0%, #f2295b42 100%), url(${
    !!img.childImageSharp ? img.childImageSharp.fluid.src : img
  })`,
  backgroundAttachment: "fixed"
}}
*/
