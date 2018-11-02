import React, { Component } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import SidebarLink from './sidebarlink/sidebarlink';

class sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: false
    };

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({
      toggler: !this.state.toggler
    });
  };

  render() {
    const { toggler } = this.state;

    return (
      <div>
        <div className={classnames('sideModal', { 'sideModalToggle': toggler })} onClick={this.handleClick} />
        <div className={classnames('sidebar', { 'sidebarToggle': toggler })}>
          <div className='sideLinksContainer'>
            <SidebarLink to='/' text='HOME' onClick={this.handleClick} />
            <SidebarLink to='/about' text='ABOUT' onClick={this.handleClick} />
            <SidebarLink to='/services' text='SERVICES' onClick={this.handleClick} />
            <SidebarLink to='/seo' text='SEO' onClick={this.handleClick} />
            <SidebarLink to='/contact' text='CONTACT' onClick={this.handleClick} />
          </div>
        </div>

        <div className={classnames('barButton', { 'change': toggler })} onClick={this.handleClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <style jsx>
          {`
            /* The Side Navigation Button */
            .barButton {
              position: fixed;
              height: 26px;
              width: 26px;
              float: right;
              top: 13px;
              right: 20px;
              z-index: 500;
              cursor: pointer;
            }
  
            .bar1, .bar2, .bar3 {  
              position: relative;
              width: 24px;
              height: 2px;
              background-color: black;
              margin: 6px 0px;
              z-index: 300;
              transition: 0.4s;  
            }
            
            .change .bar1 {
              -webkit-transform: rotate(-45deg) translate(-6px, 5px);
              transform: rotate(-45deg) translate(-6px, 5px);
              background-color: white;
            }

            .change .bar2 {
              opacity: 0;           
            }

            .change .bar3 {
              -webkit-transform: rotate(45deg) translate(-6px, -5px);
              transform: rotate(45deg) translate(-6px, -5px);
              background-color: white;
            }

            /* The Side Navigation Bar */ 
            .sidebar {
            position: fixed; 
            height: 100%; 
            width: 0px; 
            top: 0px; 
            right: 0px;
            padding-top: 30px; 
            background-color: rgba(0,0,0,0.8); 
            overflow-x: hidden; 
            z-index: 400; 
            transition-duration: 0.1s;
            transition-timing-function: ease;
            transition-delay: 0.15s;
            }

            .sidebar.sidebarToggle {
              width: 220px;
            }

            .sideLinksContainer {
              padding-top: 70px;
            }
          
            .sideModal {
              position: fixed;
              display: none;
              height: 100%;
              width: 100%;
              top: 0px;
              left: 0px;
              margin: 0px auto;
              padding: 0px;
              background-color: rgba(0,0,0,0.2);      
              z-index: 200;
            }

            .sideModal.sideModalToggle {
              display: block;
            }

            @media only screen and (min-width: 1000px) {
              .barButton {
                display: none;
              }
            }
          `}
        </style>
      </div>
    );
  };
};

export default sidebar;
