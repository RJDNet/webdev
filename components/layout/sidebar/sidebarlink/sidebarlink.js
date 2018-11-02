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
          padding-top: 20px;
          padding-left: 15px;
          color: #c4c4c4;
          font-size: 15px;
          text-decoration: none;
          transition: 0.2s;
        }

        .sideNavLink:hover {
          color: #f1f1f1;
        }
      `}
    </style>
  </Aux>
);