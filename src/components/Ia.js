import React from "react";
import { FaArrowDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Countdown from "./Countdown";

export default function Ia() {
  return (
    <>
      <section className='section is-large' id='ia'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8 is-8-desktop has-text-left'>
              <h2>Viktige datoer for Informasjonsteknologi</h2>
              <p className='countdownSubtitle' style={{ color: "white" }}>
                Prosjekt 1: Evalueringsrapport for nettside
              </p>
              <Countdown date={`2020-02-10T23:59:00`} />
              <p className='countdownSubtitle' style={{ color: "white" }}>
                Prosjekt 2
              </p>
              <Countdown date={`2020-03-18T23:59:00`} />
              <p className='countdownSubtitle' style={{ color: "white" }}>
                Prosjekt 3
              </p>
              <Countdown date={`2020-04-30T23:59:00`} />
            </div>
          </div>
        </div>
        <AnchorLink href='#sikkerhet'>
          <FaArrowDown className='arrowDown' />
        </AnchorLink>
      </section>
    </>
  );
}
