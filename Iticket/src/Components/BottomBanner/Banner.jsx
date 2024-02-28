import React from "react";
import "./Banner.css";
import android from "../../assets/Sekiller/android@2x.png";
import apple from "../../assets/Sekiller/ios@2x.png";
import phone from "../../assets/Sekiller/app@2x.png";

const Banner = () => {
  return (
    <div className="bottomBanner">
      <div className="banner-text">
        <h1>NÖVBƏTİ VİZUAL SƏYAHƏTİNİZİ TAPIN</h1>
        <p>
          iTicket.AZ tətbiqi bütün növ tədbirlərə (teatr, idman, konsertlər,
          sərgilər və s.) biletləri əldə etməyi asan və sürətli edir.
        </p>
        <div className="mobil-app">
          <div className="android">
            <img src={android} alt="" />
          </div>
          <div className="apple">
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
      <img className="phone" src={phone} alt="" />
      <marquee className="marquee">
        <p>İndi Yüklə İndi Yüklə İndi Yüklə</p>
      </marquee>
    </div>
  );
};

export default Banner;
