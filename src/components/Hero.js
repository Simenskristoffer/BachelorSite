import React from "react";
import Navbar from "../components/Navbar";
import { FaArrowDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = ({ title, img, subtitle, className }) => {
  return (
    <>
      <div
        id='heroo'
        className='full-width-image-container margin-top-0 site-hero'
        style={{
          backgroundImage: `linear-gradient(180deg, #7a7a7a47 0%, #f2295b42 100%), url(${
            !!img.childImageSharp ? img.childImageSharp.fluid.src : img
          })`,
          backgroundAttachment: "fixed"
        }}
      >
        <Navbar />
        <h2 className='has-text-weight-bold is-size-2'>Nabovarsel</h2>
        <h3>En app for borettslag og naboer</h3>
        <button className='button'>Les mer om vårt prosjekt</button>
        <AnchorLink href='#offers'>
          <FaArrowDown className='arrowDown' />
        </AnchorLink>
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
