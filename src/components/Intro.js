import React from "react";

export default function Intro() {
  return (
    <>
      <section className='section is-medium' id='offers'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8 is-8-desktop has-text-left'>
              <h2>Din visjon - vårt mål!</h2>
              <p>
                Gjennom god kommunikasjon og tett samarbeid har jeg troen på at
                vi kan oppnå alt. Å lytte til kundens behov er nøkkelen for å
                komme med smarte løsninger som tilfredsstiller alle parter. Her
                jobber kunde og utvikler sammen for å finne den beste måten å
                tilfredsstille dine behov.
              </p>
              <button className='button is primary'>Ta kontakt i dag</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
