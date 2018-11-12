import React from 'react';

export default (props) => (
  <div className='singleInfo'>
    <img className='infoImage' src={props.image} />
    <p className='infoTitle'>{props.title}</p>
    <p className='infoText'>{props.text}</p>

    <style jsx>
      {`
        .singleInfo {
          height: 180px;
          padding: 20px;
          color: #3d3d3d;
          cursor: pointer;
          transition: ease 0.2s;
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

        .singleInfo:hover {
          -webkit-font-smoothing: subpixel-antialiased;
          box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.2);
        }
      `}
    </style>
  </div>
);