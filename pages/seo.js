import React from 'react';
import Fade from 'react-reveal/Fade';

export default () => (
  <div className='seoMainContainer'>

    <div className='seoContainer'>
      <Fade>
        <p className='seoTitle'>SEO</p>
        <p className='seoTextOne'>If there is no SEO (Search Engine Optimization) on a website or web application, it could mean a website or web application will not be found on a search engine. Certainly not good for getting the word out about your site or application to others!</p>
        <p className='seoTextTwo'>By default, we optimise all our web based projects, however, we also include an extra SEO service for constantly improving and keeping our clients websites and web applications up-to-date at all times. With the latest in SEO, we work to ensure that your website or web application will be found on popular search engines.</p>
      </Fade>
    </div>

    <style jsx>
      {`
        .seoMainContainer {
          margin-top: 200px;
        }

        .seoContainer {
          max-width: 1000px;
          margin: 0px auto;
          padding-left: 170px;
          padding-right: 170px;
          padding-bottom: 70px;
        }

        .seoTitle {
          width: 100%%;
          display: block;
          padding-bottom: 40px;
          font-size: 28px;
          font-weight: 700;
          text-align: center;
        }

        .seoTextOne {
          width: 100%;
          box-sizing: border-box;
          padding-top: 30px;
          padding-bottom: 20px;
          text-align: left;
        }

        .seoTextTwo {
          width: 100%;
          box-sizing: border-box;
          padding-top: 30px;
          padding-bottom: 40px;
          text-align: left;
        }

        @media only screen and (max-width: 999px) {
          .seoContainer {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}
    </style>
  </div>
);