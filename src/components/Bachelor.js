import React from "react";
import { FaArrowDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Countdown from "./Countdown";

export default function Bachelor() {
  return (
    <>
      <section className='section is-large' id='offers'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8 is-8-desktop has-text-left'>
              <h2>I dag var Daniel jævlig irriterende</h2>
            </div>
          </div>
        </div>
        <AnchorLink href='#ia'>
          <FaArrowDown className='arrowDown' />
        </AnchorLink>
      </section>
    </>
  );
}
