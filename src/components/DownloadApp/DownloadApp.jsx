import React from 'react';
import "./DownloadApp.scss";
import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/appleStore.png";
import screens from "../../assets/screens.png";

const DownloadApp = () => {

  return (
    <section className="download-section">
        <div className="info">
            <h1>Download Now Ravel Community Apps</h1>
            <div className="downloads">
                <img src={googlePlay} alt="google-play" />
                <img src={appStore} alt="app-store" />
            </div>
        </div>
        <img src={screens} alt="screens" className="screens" />
    </section>
  )
};

export default DownloadApp;