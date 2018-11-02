import React, { Component } from 'react';

import Aux from '../hoc/auxx';
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <Aux>
        <Navbar />
        <Sidebar />
        <div className='layout'>
          {children}
        </div>
        <Footer />

        <style jsx global>
          {`
            .layout {
              position: relative;
              height: 100%;
              width: 100%;
              box-sizing: border-box;
              margin-top: 0px;
            }

            @media only screen and (max-width: 999px) {
              .layout {
                margin-top: 55px;
              }
            }
          `}
        </style>
      </Aux>
    );
  };
};

export default Layout;