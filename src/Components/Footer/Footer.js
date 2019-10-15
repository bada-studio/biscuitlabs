import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import sb from '../../Services/StringBundleService';
import './Footer.css';

const Footer = ({language, flagCode, languageOptions, onChangeLang}) => (
    <div className="Footer">

      <div className="FooterHeading">
        <div className="BizDesc">
          <div className="LangBox">
            <i className={flagCode + " flag"}/>
            <Dropdown
                text={language}
                inline
                options={languageOptions}
                onChange={onChangeLang}>
            </Dropdown>

          </div>
          373 Gangnam-daero, Seocho-gu, Seoul, Korea<br/>
        </div>
        <div className="CompanyName">
          ©Biscuitlabs Co. Ltd.
        </div>
      </div>
    </div>
)

export default Footer;