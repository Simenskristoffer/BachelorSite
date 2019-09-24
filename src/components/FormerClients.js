import React from "react";

import logo from "../img/kunderlogo/framtrafikkskole.png";
import logo2 from "../img/kunderlogo/hope.png";
import logo3 from "../img/kunderlogo/smartcity.png";

export default function FormerClients() {
  return (
    <section className='section is-medium formerClients'>
      <div className='container has-text-left'>
        <h2>Prosjekter jeg har jobbet på</h2>
        <div className='wrapper'>
          <div
            className='panel has-text-left'
            style={{
              marginTop: "auto",
              marginBottom: "auto"
            }}
          >
            <a href='/'>
              <figure className='image'>
                <img
                  src={logo}
                  alt='lol'
                  style={{
                    maxWidth: "135px",
                    minHeight: "40px"
                  }}
                />
              </figure>
            </a>
          </div>
          <div
            className='panel has-text-left'
            style={{
              marginTop: "auto",
              marginBottom: "auto"
            }}
          >
            <a href='/'>
              <figure class='image'>
                <img
                  src={logo2}
                  alt='lol'
                  style={{
                    maxWidth: "135px",
                    minHeight: "40px"
                  }}
                />
              </figure>
            </a>
          </div>
          <div
            className='panel has-text-left'
            style={{
              marginTop: "auto",
              marginBottom: "auto"
            }}
          >
            <a href='/'>
              <figure class='image'>
                <img
                  src={logo3}
                  alt='lol'
                  style={{
                    maxWidth: "135px",
                    minHeight: "40px"
                  }}
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
