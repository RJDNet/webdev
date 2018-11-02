import React from 'react';

import Banner from '../components/banner/banner';
import SingleInfo from '../components/singleinfo/singleinfo';
import Infotab from '../components/infotab/Infotab';

export default () => (
  <div className='homeContentContainer'>

    <Banner />

    <div className='mainInfoContainer'>
      <p className='whyTitle'>Why TANGLEWEB?</p>
      <div className='infoContainer'>
        <SingleInfo
          image='../static/smartphone.svg'
          title='Modern'
          text='Modern tools and techniques are used with modern designs, taking advantage of the latest technologies available.' />
        <SingleInfo
          image='../static/report.svg'
          title='Efficient'
          text='Your application is built to have high performance which including having quick loading times and a fast response to user interaction.' />
      </div>
      <div className='infoContainer'>
        <SingleInfo
          image='../static/responsive.svg'
          title='Responsive'
          text='Your website or web application is created to be fully responsive, this means it will adapt and fit to any size screen or device.' />
        <SingleInfo
          image='../static/gear.svg'
          title='SEO'
          text='With our Search Engine Optomization service, we work to consistently ensure top quality SEO for your website or web app.' />
      </div>
    </div>

    <div className='parapic'>
      <div className='paraShadow'>
        <p className='paraText'>Custom designs...</p>
      </div>
    </div>

    <div className='moreInfoContainer'>
      <p className='moreTitle'>More reasons to choose us!</p>
      <div className='infoContainer'>
        <Infotab 
          title='Great reviews'
          text='We have positive reviews from clients who have worked with us. We work to try and ensure that
          you get the service you would hope for.' />
        <Infotab 
          title='Fast development'
          text='Fast development is something the company strives for. We try and
          finish a project within a competitive timeframe while also ensuring
          great quality.' />
        <Infotab 
          title='Custom design'
          text='We can create a custom design for you based on the type of project you desire
          This includes providing examples and working with you to create the project 
          based on your specifications.' />
        <Infotab 
          title='Great performance' 
          text='We consistantly keep up with the latest techniques for enhancing performance
          to ensure your web app loads and performs as fast as possible.' />
      </div>
      <div className='infoContainer'>
        <Infotab 
          title='Free advice & support' 
          text='We provide free advice and support with regard to design, development
          and to help you succeed with your web based project.' />
        <Infotab 
          title='Quality assurance' 
          text='We have quality assurance in place to ensure all projects created by us 
          are complete and have a high level of quality.' />
        <Infotab 
          title='Personal approach' 
          text='The approach we take involves one that respects you and your project.
          We communicate personally with our clients without the jargon or pushy 
          sales pitches.' />
        <Infotab 
          title='Premium services' 
          text='We aim to provide premium high quality services in general development and SEO with good hosting
          and no issues.' />
      </div>
    </div>

    <style jsx>
      {`
      .homeContentContainer {
        width: 100%;
      }

      .parapic {
        position: relative;
        height: 300px; 
        background-image: url('../static/parapic.jpeg');
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
        background-attachment:fixed;   
        overflow: hidden;
      }

      .paraShadow {
        position: relative; 
        height: 330px;
        width: 100%;
        background-color: rgba(0,0,0,0.45);
        z-index: 1;
      }

      .paraText {
        position: relative;
        top: 125px;
        color: white;
        font-family: Sans-Serif;
        font-size: 30px;
        text-align: center;
      }

      .mainInfoContainer {
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .whyTitle {
        width: 100%;
        padding-bottom: 40px;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }

      .moreInfoContainer {
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        padding-top: 50px;
        padding-bottom: 80px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .infoContainer {
        position: relative;
        display: block;
        width: 300px; 
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        text-align: center;
      }

      .moreTitle {
        width: 100%;
        padding-bottom: 40px;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
    `}
    </style>
  </div >
);