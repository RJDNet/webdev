import React from 'react';

export default () => (
  <div className='seoMainContainer'>

    <div className='seoContainer'>
      <p className='seoTitle'>SEO</p>
      <p className='seoText'>If there is no SEO (Search Engine Optimization) on a website or web application, it means a website or web application will not be found on a search engine such as google very easily. Certainly not good for getting the word out about your site or application to others!</p>
      <p className='seoText'>By default we optimise all our web based projects, however, we also include an extra SEO service for constantly improving and keeping our clients websites and web applications up-to-date at all times. With the latest in SEO, we work to ensure that your website or web application will be able to be found on popular search engines. This means more people can find your website or web application when someone types in something related to your website or web application into a search engine, such as Google search.</p>
    </div>

    <style jsx>
      {`
        .seoMainContainer {
          margin-top: 200px;
        }

        .seoContainer {
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

        .seoText {
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