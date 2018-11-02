import React from 'react';
import Link from 'next/link';

import Aux from '../../../hoc/auxx';

export default (props) => (
  <Aux>
    <Link href={props.to}>
      <a className='footerLinks'>{props.text}</a>
    </Link>

    <style jsx>
      {`
        .footerLinks {
          display: block;
          padding-top: 10px;
          color: white;
          font-size: 15px;
          text-decoration: none;
          text-align: left;
        }
      
        .footerLinks:hover {
          color: darkred;
          transition: linear 0.1s;
        }
      `}
    </style>
  </Aux>
);

