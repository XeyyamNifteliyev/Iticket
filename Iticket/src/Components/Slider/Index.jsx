import React from "react";
import "./style.css";
import Menu from "../Menu/Index";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import sekil1 from "../../assets/Sekiller/i-sekil1.jpg";
import sekil3 from "../../assets/Sekiller/i-sekil3.jpg";
import sekil4 from "../../assets/Sekiller/i-sekil4.jpg";

const ImageSlider = () => {
  const carouselRef = React.createRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          right: "20px",
          top: "-30px",
        }}
      >
        <Menu />
      </div>
      <div className="carousel">
        <Carousel ref={carouselRef} autoplay>
          <div>
            <img
              src={sekil1}
              alt="Resim 1"
              loading="lazy"
              className="imgCarousel"
            />
          </div>
          <div>
            <img
              src={sekil4}
              alt="Resim 2"
              loading="lazy"
              className="imgCarousel"
            />
          </div>
          <div>
            <img
              src={sekil3}
              alt="Resim 3"
              loading="lazy"
              className="imgCarousel"
            />
          </div>
        </Carousel>
        <div className="prev" onClick={prev}>
          <LeftOutlined className=" left" style={{ fontSize: 40 }} />
        </div>
        <div className="next" onClick={next}>
          <RightOutlined className=" right" style={{ fontSize: 40 }} />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
