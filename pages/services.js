import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

export default () => (
  <div className='servicesMainContainer'>
    <Fade>
      <p className='servicesTitle'>Services Page</p>

      <div className='servicesContainer'>

        <p className='servicesInfoText'>We have many web development services suited to a variety of different web based projects. These help to ensure modern and professional looking websites or web applications that fit our clients own unique specifications. We are always happy to discuss anything that is not listed, with an aim to ensure your requirements are met.
      </p>

        <p className='servicesInfoTitle'>- RESPONSIVE DESIGN -</p>
        <p className='servicesInfoText'>Due to the many different sized devices that people may use for viewing the world wide web, modern websites and web applications should be 'Responsive'. This means that our websites and web applications will efficiently respond to fit the screen size of different devices, whether it be a mobile phone, tablet, monitor, laptop screen or even a tv.</p>

        <p className='servicesInfoTitle'>- CUSTOM DESIGN -</p>
        <p className='servicesInfoText'>We work with clients to ensure that they get the design that they would like for their website or web application. We are therefore happy to discuss custom designs for a client and provide a client with different templates and examples to ensure they get a design that fits their vision.</p>

        <p className='servicesInfoTitle'>- ANALYTICS -</p>
        <p className='servicesInfoText'>We can include the ability to gather analytics. This can provide information such as how many people have viewed your website or web application, and other useful information.</p>

        <p className='servicesInfoTitle'>- E-COMMERCE -</p>
        <p className='servicesInfoText'>We also provide E-commerce in the form of shop integration to your website or web application, whether you are just looking to sell a few products, or many. This service includes an efficient shop in which to sell your products, grow your business, look at your shop's analytics and modify your products.</p>

        <p className='servicesInfoTitle'>- CMS (Content Management System) -</p>
        <p className='servicesInfoText'>We provide a CMS (content management system) service. This means that we can provide you with a way to modify the content on your website such as blog posts or news articles. This is achieved by logging into your personal account that would be provided if you wan to use CMS features. This great for people who do not want to deal with any code and for people who do not have technical knowledge of web development.</p>

        <p className='servicesInfoTitle'>- SEO (Search Engine Optimisation) -</p>
        <p className='servicesInfoText'>One of our services includes search engine optimisation, this is a pretty in-depth aspect of web development. This is for the purpose of allowing people to succesfully find your website on popular search engines, such as google.
      <br />
          <br />
          If you would like to find out more about our SEO service, click <Link href='/seo'>HERE</Link>.
      </p>
      </div>
    </Fade>

    <style jsx>
      {`
        .servicesMainContainer {
          margin-top: 200px;
        }

        .servicesContainer {
          max-width: 1000px;
          margin: 0px auto;
          padding-left: 170px;
          padding-right: 170px;
          padding-bottom: 90px;
        }

        .servicesTitle {
          width: 100%%;
          display: block;
          padding-bottom: 40px;
          font-size: 28px;
          font-weight: 700;
          text-align: center;
        }

        .servicesInfoTitle {
          width: 100%;
          box-sizing: border-box;
          padding-top: 10px;
          padding-bottom: 10px;
          font-size: 17px;
          font-weight: 700;
          text-align: left;
        }

        .servicesInfoText {
          width: 100%;
          padding-top: 10px;
          padding-bottom: 20px;
          box-sizing: border-box;
          font-size: 16px;
          text-align: left;
        }

        @media only screen and (max-width: 999px) {
          .servicesContainer {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}
    </style>
  </div>
);