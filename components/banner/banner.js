import React from 'react';
import Link from 'next/link';

export default () => {
  return (
    <div className='bannerImage'>
      <div className='shadow'>
        <div className='bannerTextContainer'>
          <p className='bannerText'>Modern, professional...</p>
          <p className='bannerTextTwo'>WEB DESIGN & DEVELOPMENT</p>
          <Link href='/services'>
            <button className='bannerButton'>SERVICES</button>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          .bannerImage {
            width: 100%;
            min-height: 700px;
            max-height: 700px;
            background-image: url('../../static/headcity.jpg'); 
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }

          .shadow {
            height: 700px;
            width: 100%;
            background-color: rgba(0,0,0,0.45);
          }

          .bannerTextContainer {
            height: 700px;
            width: 100%;
            margin: 0px auto;
            padding-top: 220px;
            box-sizing: border-box;
          }

          .bannerText {
            color: white;
            font-size: 16px;
            text-align: center;
          }

          .bannerTextTwo {
            padding-top: 130px;
            padding-bottom: 120px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            text-align: center;
          }

          .bannerButton {
            position: relative;
            display: block;
            height: 40px;
            width: 120px;
            margin: 0px auto;
            background-color: darkred;
            border: none;
            border-radius: 3px;
            color: white;
            cursor: pointer;
          }

          .bannerButton:hover {
            background-color: #961313;
          }

          @media only screen and (max-width: 999px) {
            .bannerTextContainer {
              padding-top: 160px;
            }
          }
        `}
      </style>
    </div>
  )
}
