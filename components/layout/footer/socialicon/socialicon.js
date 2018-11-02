import React from 'react';

import Aux from '../../../hoc/auxx';

export default (props) => (
  <Aux>
    <a href={props.socialTo}>
      <img className='socialIcon' src={props.icon} />
    </a>

    <style jsx>
      {`
        .socialIcon {
          width: 32px;
          height: 32px;
          margin-left: 7px;
        }
      `}
    </style>
  </Aux>
);