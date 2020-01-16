import React from "react";
import { FaArrowDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Countdown from "./Countdown";

export default function Intro() {
  return (
    <>
      <section className='section is-large' id='offers'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8 is-8-desktop has-text-left'>
              <h2>Viktige datoer for prosjektet</h2>
              <p className='countdownSubtitle'>Forprosjektrapporten</p>
              <Countdown date={`2020-01-20T23:59:00`} />
              <p className='countdownSubtitle'>
                Første versjon av hoveddokumentet
              </p>
              <Countdown date={`2020-03-09T23:59:00`} />
              <p className='countdownSubtitle'>
                Andre versjon av hoveddokumentet
              </p>
              <Countdown date={`2020-04-24T23:59:00`} />
              <p className='countdownSubtitle'>
                Siste innlevering av hoveddokumentet
              </p>
              <Countdown date={`2020-05-15T23:59:00`} />
              <p className='countdownSubtitle'>
                Opphenging av prosjektplakat og presentasjon
              </p>
              <Countdown date={`2020-05-29T23:59:00`} />
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
