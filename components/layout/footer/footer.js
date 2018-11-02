import React from 'react';

import FooterLink from './footerlink/footerlink';
import SocialIcon from './socialicon/socialicon';

export default () => {

  return (
    <div className='footerContainer'>

      <div className='footerInfoContainer'>
        <p className='leftInfo'>Phone: 078 456 567 56</p>
        <p className='leftInfo'>Email: info@tangleweb.co.uk</p>
        <div className='leftSocialIcons'>
          <SocialIcon socialTo='#' icon='/static/face.svg' />
          <SocialIcon socialTo='#' icon='/static/yt.svg' />
          <SocialIcon socialTo='#' icon='/static/twit.svg' />
        </div>
        <p className='leftInfo'>UK based web design & development company.</p>
      </div>

      <div className='footerInfoContainer'>
        <FooterLink to='/' text='Home' />
        <FooterLink to='/' text='Web Design & Development Terms & Conditions' />
        <FooterLink to='/' text='Hosting Terms & Conditions' />
        <FooterLink to='/' text='SEO (Search Engine Optimisation) Terms & Conditions' />
        <FooterLink to='/' text='Privacy Policy' />
        <FooterLink to='/' text='Contact Us' />
      </div>

      <div className='footerCopyContainer'>
        © 2018 TANGLEWEB.
      </div>

      <style jsx>
        {`
          .footerContainer {
            position: relative;
            display: flex;
            height: 100%;
            width: 100%;
            background-color: #262626;
            justify-content: center;
            flex-wrap: wrap;
          }

          .footerInfoContainer {
            position: relative;
            display: block;
            width: 280px; 
            padding: 40px;
          }

          .leftInfo {
            padding-top: 20px;
            color: white;
            font-size: 15px;
          }

          .leftSocialIcons {
            padding-top: 20px;
          }

          .footerCopyContainer {
            position: relative;
            width: 100%;
            padding: 15px;
            color: white;
          }
        `}
      </style>
    </div >
  );
};
