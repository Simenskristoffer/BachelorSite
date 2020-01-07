import React from "react";
import { Link } from "gatsby";
import Logo from "../img/Logo1.png";
import "./all.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className='navbar is-transparent'
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' title='Logo'>
              <h2>Nabolaget</h2>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu is-white'
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className='navbar-end has-text-centered'>
              <Link className='navbar-item nav-links' to='/'>
                Hjem
              </Link>
              <Link className='navbar-item nav-links' to='/tjenester'>
                Prosjektet
              </Link>
              <Link className='navbar-item nav-links' to='/'>
                Om oss
              </Link>
              <Link className='navbar-item nav-links' to='/'>
                Dokumentasjon
              </Link>
              <Link className='navbar-item nav-links' to='/'>
                Kildekode
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
