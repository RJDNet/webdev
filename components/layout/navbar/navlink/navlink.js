import React from 'react';
import Link from 'next/link';

import Aux from '../../../hoc/auxx';

export default (props) => (
  <Aux>
    <Link href={props.to}>
      <a className='navLink'>{props.text}</a>
    </Link>

    <style jsx>
      {`
        .navLink {
          display: inline-block;
          margin-left: 30px;
          color: #112b4b;
          font-size: 15px;
          font-weight: 400;
          text-decoration: none;
        }

        .navLink {
          position: relative;
        }
        
        .navLink:after {
          content: '';
          display: block;
          border-bottom: 2px solid red;    
          width: 0px;
          position: absolute;
          left: 0px;
          top: 25px;    
          -webkit-transition: 0.1s ease;
          transition: 0.1s ease;
        }
        
        .navLink:hover:after {     
          width: 100%; 
          background-color: rgba(0, 0, 0, 0) !important;
          color: rgb(153, 153, 153) !important;    
          transition: 0.15s ease !important;
        }
      `}
    </style>
  </Aux>
);