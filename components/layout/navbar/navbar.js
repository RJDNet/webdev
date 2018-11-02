import React, { Component } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import Navlink from './navlink/navlink';
import SocialIcon from './socialicon/socialicon';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      navToggle: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    if (window.pageYOffset > 55 && window.outerWidth > 999) {
      this.setState({
        navToggle: true
      });
    } else if (window.pageYOffset < 200) {
      this.setState({
        navToggle: false
      });
    }
  };

  render() {
    const { navToggle } = this.state;

    return (
      <div className={classnames('navbarContainer', { 'navContainerToggler': navToggle })}>

        <div className={classnames('logoContainer', { 'logoContainerToggler': navToggle })}>
          <Link href='/'>
            <img className='logoLink' src='/static/logo1.png' alt="Logo" />
          </Link>
        </div>

        <div className={classnames('linksContainer', { 'linksContainerToggler': navToggle })}>
          <Navlink to='/' text='HOME' />
          <Navlink to='/about' text='ABOUT' />
          <Navlink to='/services' text='SERVICES' />
          <Navlink to='/seo' text='SEO' />
          <Navlink to='/contact' text='CONTACT' />
        </div>

        <div className={classnames('rightSideContainer', { 'rightSideContainerToggler': navToggle })}>
          <div className='socialButtonContainer'>
            <SocialIcon socialTo='#' icon='/static/face.svg' />
            <SocialIcon socialTo='#' icon='/static/yt.svg' />
            <SocialIcon socialTo='#' icon='/static/twit.svg' />
          </div>
          <p className={classnames('rightSideText', { 'rightSideTextToggler': navToggle })}>Phone: 07976 456 567</p>
          <p className={classnames('rightSideText', { 'rightSideTextToggler': navToggle })}>Email: info@tangleweb.co.uk</p>
        </div>

        <style jsx>
          {`
          .navbarContainer {
            position: fixed;
            height: 110px;
            width: 100%;
            max-width: 1920px;
            top: 0px;
            background-color: white;
            border-bottom: 1px solid black;
            box-shadow: 0px 0px 20px 0px #565656;
            z-index: 100;
            transition: 0.3s;
            overflow: hidden;
          }

          .navbarContainer.navContainerToggler {
            height: 55px;
          }

          .logoContainer {
            float: left;
            width: 240px;
            height: 110px;
            padding-left: 50px;
            padding-top: 28px;
            box-sizing: border-box;
            transition: 0.3s;
          }

          .logoContainer.logoContainerToggler {
            padding-top: 0px;
          }

          .logoLink {
            width: 180px;
            height: 55px;
          }

          .linksContainer {
            position: relative;
            display: inline-block;
            height: 110px;
            padding-top: 48px;
            padding-left: 60px;
            box-sizing: border-box;
            transition: 0.3s;
          }

          .linksContainer.linksContainerToggler {
            height: 55px;
            padding-top: 18px;
          }

          .rightSideContainer {
            position: relative;
            height: 110px;
            width: 200px;
            float: right;
            box-sizing: border-box;
          }

          .rightSideContainer.rightSideContainerToggler {
            height: 55px;
          }

          .socialButtonContainer {
            padding-top: 10px;
            padding-left: 0px;
            padding-bottom: 5px;
          }

          .rightSideText {
            margin-top: 5px;
            color: #112b4b;
            font-size: 15px;
            font-weight: 400;
            text-decoration: none;
            text-align: left;
          }

          @media only screen and (max-width: 999px) {
            .navbarContainer {
              height: 55px;
            }

            .logoContainer {
              width: 180px;
              height: 55px;
              padding-left: 0px;
              padding-top: 0px;
            }

            .linksContainer {
              display: none;
            }

            .rightSideContainer {
              display: none;
            }
          }
        `}
        </style>
      </div>
    );
  };
};

export default Navbar;
