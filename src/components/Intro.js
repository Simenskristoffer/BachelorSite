import React from "react";
import { FaArrowDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Intro() {
  return (
    <>
      <section className='section is-large' id='offers'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8 is-8-desktop has-text-left'>
              <h2>Prosjektet</h2>
              <p>
                Vi har fått i oppgave å utvikle en applikasjon som skal knytte
                sammen beboere i borettslag
              </p>
              <button className='button is primary'>Ta kontakt i dag</button>
            </div>
          </div>
        </div>
        <AnchorLink href='#aboutUs'>
          <FaArrowDown className='arrowDown' />
        </AnchorLink>
      </section>
    </>
  );
}
