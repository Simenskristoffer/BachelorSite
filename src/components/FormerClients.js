import React from "react";

import logo from "../img/kunderlogo/framtrafikkskole.png";
import logo2 from "../img/kunderlogo/hope.png";
import logo3 from "../img/kunderlogo/smartcity.png";

export default function FormerClients() {
  return (
    <section className='section is-large formerClients' id='aboutUs'>
      <div className='container has-text-left'>
        <h2>Deltakere og kontaktinfo</h2>
        <div className='column is-4'>
          <img
            src='https://bulma.io/images/placeholders/1280x960.png'
            alt='Placeholder image'
          />
          <h3 className='subtitle has-text-centered'>Simen Stubsjøen</h3>
          <p className='employeeInfo'>Bachelor i informasjonssystemer</p>
          <a href={"tel:" + "97662058"}>
            <p className='phoneNumber'>TLF: 97662058</p>
          </a>
        </div>
      </div>
    </section>
  );
}
