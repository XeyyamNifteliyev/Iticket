import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css"; 
import Card from "../Card/Index";
import { Link,useParams } from "react-router-dom";
import axios from "axios";

const ProductSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      partialVisibilityGutter: 20, 
    },
  };

  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="custom-button-group">
        <button className="prevv2" onClick={() => previous()}>
          {"<"}
        </button>
        <button className="nextt2" onClick={() => next()}>
          {">"}
        </button>
      </div>
    );
  };

  const [veriler, setVeriler] = useState([]);

  useEffect(() => {
    axios.get("../../../data2 (1).json")
      .then(res => setVeriler(res.data.tedbirler))
      .catch(error => console.error("Veri getirme hatası:", error));
  }, []);

  

  return (
    <div className="product-slider">
      <h1 className="pop">Populyar Tətbiqlər</h1>
      <Carousel
        responsive={responsive}
        infinite={true} // Sonsuz döngü
        autoPlay={true} // Otomatik oynatma
        autoPlaySpeed={2000} // Otomatik oynatma hızı (ms)
        containerClass="carousel-container" // Carousel konteyner sınıfı
        itemClass="carousel-item" // Carousel öğesi sınıfı
        customButtonGroup={<CustomButtonGroup />}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {veriler.map((item, index) => (
          <div key={index} className="carousel-card">
            <Link to={`/opencard/${item.id}`}>
              <Card {...item} />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
