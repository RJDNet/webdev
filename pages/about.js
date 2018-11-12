import React from 'react';

export default () => (
  <div className='aboutMainContainer'>
    <p className='aboutTitle'>ABOUT</p>

    <div className='aboutContainer'>

      <div className='leftAboutContainer'>
        <img className='aboutImage' src='../static/aboutpic.jpeg' />
      </div>
      <div className='rightAboutContainer'>
        <p className='aboutText'>TANGLEWEB is a small UK based web design and development company based in Weston-Super-Mare. We started up as a small team, a team with a passion for creating great modern, fast and efficient websites and web applications.
        <br />
          <br />
          We have an aim to provide top quality websites which fit the needs of our clients. By keeping up to date with the latest technologies and movements in the web development field, we strive to always be providing the best there is to offer.</p>
      </div>


    </div>

    <style jsx>
      {`
        .aboutMainContainer {
          margin-top: 200px;
        }

        .aboutContainer {
          position: relative;
          display: flex;
          height: 100%;
          width: 100%;
          padding-bottom: 90px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .aboutTitle {
          width: 100%%;
          display: block;
          padding-bottom: 40px;
          font-size: 28px;
          font-weight: 700;
          text-align: center;
        }

        .leftAboutContainer {
          position: relative;
          display: block;
          width: 100%; 
          max-width: 380px; 
          padding-top: 35px;
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
          text-align: center;
        }

        .rightAboutContainer {
          position: relative;
          display: block;
          width: 100%; 
          max-width: 380px; 
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
          text-align: center;
        }

        .aboutText {

        }

        .aboutImage {
          height: 200px;
          width: 260px;
        }
      `}
    </style>
  </div>
);
