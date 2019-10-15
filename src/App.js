import React, { Component } from "react";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import "./App.css";
import { Abstract, Mission, Products, Partners, Footer } from "./Components";
import { TopNav, SimpleLoader } from "./Containers";
import sb from './Services/StringBundleService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flagCode: sb.flagCode,
      language: sb.language,
    };
    this.languageOptions = [
      {key: 'en', text: 'English', value: 'en'},
      {key: 'ko', text: '한국어', value: 'ko'},
      {key: 'ja', text: '日本語', value: 'ja'},
      {key: 'zh', text: '中文', value: 'zh'},
      {key: 'ru', text: 'Русский', value: 'ru'},
    ];

    sb.addEventHandler('updated', this.onLangChanged);
  };

  onLangChanged = () => {
    this.setState({
      flagCode: sb.flagCode,
      language: sb.language
    });
  };

  onChangeLang = (e, data) => {
    sb.changeLang(data.value);
  };

  render() {
    const { flagCode, language } = this.state;

    return (
      <div>
        <TopNav/>
        <div className="Container">
          <div className="Content">
            <Abstract/>
            <Mission/>
            <Products/>
            <Partners/>
          </div>
        </div>
        <Footer
            flagCode = {flagCode}
            language = {language}
            languageOptions = {this.languageOptions}
            onChangeLang = {this.onChangeLang}
        />
        <SimpleLoader />
      </div>
    );
  }
}

export default App;
