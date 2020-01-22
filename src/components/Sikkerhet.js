import React from "react";
import { FaArrowUp } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Countdown from "./Countdown";

export default function Sikkerhet() {
  return (
    <>
      <section className='section is-large' id='sikkerhet'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8 is-8-desktop has-text-left'>
              <h2>Viktige datoer for Innføring i datasikkerhet</h2>
              <p className='countdownSubtitle'>
                Prosjekt 1 - "Dumpster diving"
              </p>
              <Countdown date={`2020-02-08T23:59:00`} />
            </div>
          </div>
        </div>
        <AnchorLink href='#heroo'>
          <FaArrowUp className='arrowUp' />
        </AnchorLink>
      </section>
    </>
  );
}
