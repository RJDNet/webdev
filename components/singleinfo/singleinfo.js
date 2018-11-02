import React from 'react';

export default (props) => (
  <div className='singleInfo'>
    <img className='infoImage' src={props.image} />
    <p className='infoTitle'>{props.title}</p>
    <p className='infoText'>{props.text}</p>

    <style jsx>
      {`
        .singleInfo {
          height: 200px;
          padding-top: 10px;
          color: #3d3d3d;
        }

        .infoImage {
          width: 40px;
          height: 40px;
          opacity: 0.7;
          margin-bottom: 10px;
        }

        .infoTitle {
          font-weight: 700;
        }

        .infoText {
          padding-top: 10px;
        }
      `}
    </style>
  </div>
);