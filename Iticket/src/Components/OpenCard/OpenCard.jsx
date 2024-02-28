import { useEffect, useState } from "react";
import axios from "axios";
import "./OpenCard.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiArrowForwardOutline } from "react-icons/ti";
import { ImLocation } from "react-icons/im";
import { GoClockFill } from "react-icons/go";
import { GiWorld } from "react-icons/gi";
import { IoTicketOutline } from "react-icons/io5";
import { BsInfoLg } from "react-icons/bs";
import Calendar from "../Calendar/Calendar";
import Menu from "../Menu/Index";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Index";

const OpenCard = () => {
  const { id } = useParams();
  const [jsonNum, setJsonNum] = useState([]);
  const [sekil, setSekil] = useState("");

  useEffect(() => {
    const dataAl = async () => {
      try {
        const cavap = await axios.get("../../../data2 (1).json");
        setJsonNum(cavap.data);
      } catch (hata) {
        console.error("Veri getirme hatası:", hata);
      }
    };

    dataAl();
  }, [id]);

  useEffect(() => {
    if (jsonNum && jsonNum.tedbirler) {
      const jsonId = jsonNum.tedbirler.find((x) => x.id === id);
      setSekil(jsonId || ""); // Eğer resim mevcut değilse, boş bir string olarak ayarla
    }
  }, [id, jsonNum]); // Bağımlılık dizisine jsonNum'u ekleyin

  const cardHeaderStyle = {
    backgroundImage: sekil ? `url(${sekil.boyuksekil})` : "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  console.log(sekil);

  return (
    <div style={{ position: "absolute", top: "55px" }} className="opencard">
      <div style={{ position: "relative", top: "-100px", right: "20px" }}>
        <Menu style={{ position: "relative" }} />
      </div>
      <div className="card-header" style={cardHeaderStyle}>
        <div className="header-button">
          <div>
            <button>50 ₼-dan</button>
          </div>
          <div className="header-button-icon">
            <IoMdHeartEmpty
              style={{
                fontSize: "25px",
                marginLeft: "11px",
                marginTop: "12px",
                color: "white",
              }}
            />
          </div>
          <div className="header-button-icon">
            <TiArrowForwardOutline
              style={{
                fontSize: "25px",
                marginLeft: "11px",
                marginTop: "11px",
                color: "white",
              }}
            />
          </div>
        </div>
      </div>

      <div className="icon-flex">
        <div className="header-icon">
          <div className="firsticon location">
            <ImLocation
              style={{ fontSize: "30px", color: "white", marginTop: "9px" }}
            />
          </div>
          <div className="lasticon clock">
            <GoClockFill
              style={{ fontSize: "30px", color: "white", marginTop: "9px" }}
            />
          </div>
          <div className="icon-text">
            <p>{sekil.yer}</p>
            <p>{sekil.tarix}</p>
          </div>
        </div>
        <div className="header-icon">
          <div className="firsticon age" style={{ backgroundColor: "#7A83CE" }}>
            <p style={{ fontSize: "20px", color: "white", marginTop: "9px" }}>
              0+
            </p>
          </div>
          <div style={{ backgroundColor: "#7AC9CE" }} className="lasticon">
            <GiWorld
              style={{ fontSize: "30px", color: "white", marginTop: "9px" }}
            />
          </div>
          <div className="icon-text">
            <p>Dil</p>
            <p>Yaş Məhdudiyyəti</p>
          </div>
        </div>
        <div className="header-icon">
          <div
            className="firsticon valyuta"
            style={{ backgroundColor: "#7A83CE" }}
          >
            <p style={{ fontSize: "20px", color: "white", marginTop: "9px" }}>
              ₼
            </p>
          </div>
          <div style={{ backgroundColor: "#FFA800" }} className="lasticon">
            <IoTicketOutline
              style={{ fontSize: "30px", color: "white", marginTop: "9px" }}
            />
          </div>
          <div className="icon-text">
            <p>Qiymət</p>
            <p>Biletlər Haqda</p>
          </div>
        </div>
        <div className="header-icon">
          <div
            style={{ backgroundColor: "#FFDD00" }}
            className="firsticon info"
          >
            <BsInfoLg
              style={{ fontSize: "30px", color: "white", marginTop: "9px" }}
            />
          </div>
          <div className="icon-text">
            <p style={{ marginLeft: "30px" }}>Tədbir Haqqında</p>
          </div>
        </div>
      </div>
      <div style={{ height: "80vh" }} class="sketchfab-embed-wrapper">
        <iframe
          title="Music Theatre"
          frameborder="0"
          src="https://sketchfab.com/models/9c2f4ea63b7f4b3f86baf0f12b85047a/embed/ "
          height="100%"
          width="100%"
        ></iframe>
      </div>

      <div className="calendarr">
        <Calendar />
      </div>
      <div className="opencard-about">
        <div className="opencard-btn">
          <button>Tədbir Haqqında</button>
          <p>{sekil.haqqinda}</p>
        </div>
        <div className="about-text">
          <button>Yaş Məhdudiyyəti/Dil</button>
          <p className="age2">0+</p>
          <div className="about-img">
            <img src={sekil.yansekil} alt="" />
          </div>
        </div>
      </div>
      <div className="opencard-footer">
        <div className="map">
          <h4>Məkan Yeri</h4>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4047027339398!2d49.83920830995948!3d40.37772227132672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da431270ccf%3A0xd1c2b3e9a7748f50!2zSGV5ZMmZciDGj2xpeWV2IFNhcmF5xLE!5e0!3m2!1saz!2saz!4v1708808485717!5m2!1saz!2saz"
          ></iframe>
        </div>
        <div className="opencard-footer-text">
          <div className="text-footer">
            <h4>{sekil.mekanyeri}</h4>
            <p>{sekil.mekanadress}</p>
            <h4>Mobil</h4>
            <p>+994(012) 565-12-88</p>
            <button>İstiqamət</button>
          </div>
          <img src={sekil.kiciksekil} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OpenCard;
