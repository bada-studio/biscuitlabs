import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import sb from '../../Services/StringBundleService';
import './Footer.css';

const Footer = ({language, flagCode, languageOptions, onChangeLang}) => (
    <div className="Footer">
      <div className="FooterBox">
        <div className="FooterHeading">
          <div className="BizDesc">

            373 Gangnam-daero, Seocho-gu, Seoul, Korea<br/>
          </div>
          <div className="CompanyName">
            ©Biscuitlabs Co. Ltd.
          </div>
        </div>
      </div>
    </div>
)

export default Footer;