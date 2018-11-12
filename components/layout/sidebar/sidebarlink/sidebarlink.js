import React from 'react';
import Link from 'next/link';

import Aux from '../../../hoc/auxx';

export default (props) => (
  <Aux>
    <Link href={props.to}>
      <a className='sideNavLink' onClick={props.onClick}>{props.text}</a>
    </Link>

    <style jsx>
      {`
        .sideNavLink {
          display: block;
          box-sizing: border-box;
          padding-top: 13px;
          padding-left: 15px;
          padding-bottom: 13px;
          color: black;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: 0.2s;
        }

        .sideNavLink:after {
          content: '';
          display: block;
          border-bottom: 2px solid red;   
          width: 0px;
          position: absolute;   
          -webkit-transition: 0.1s ease;
          transition: 0.15s ease;
        }

        .sideNavLink:hover:after {     
          width: 10%; 
          background-color: rgba(0, 0, 0, 0) !important;
          color: rgb(153, 153, 153) !important;    
          transition: 0.15s ease !important;
        }
      `}
    </style>
  </Aux>
);