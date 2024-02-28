import React,{useState,useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css"; // Stil dosyanızı ekleyin
import SmallCard2 from "../SmallCard/Index";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
      partialVisibilityGutter: 20, // Parça görünürlük boşluğu
    },
  };

  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="custom-button-group">
        <button className="prev2" onClick={() => previous()}>
          {"<"}
        </button>
        <button className="next2" onClick={() => next()}>
          {">"}
        </button>
      </div>
    );
  };

  const [veriler, setVeriler] = useState([]);

  useEffect(() => {
    axios.get("../../../data2 (1).json")
      .then(res => setVeriler(res.data.tamasalar))
      .catch(error => console.error("Veri getirme hatası:", error));
  }, []);

  return (
    <div className="productSlider">
      <h1 className="pop">Tamasalar</h1>
      <Carousel
        responsive={responsive}
        infinite={true} // Sonsuz döngü
        autoPlay={true} // Otomatik oynatma
        autoPlaySpeed={2000} // Otomatik oynatma hızı (ms)
        containerClass="carouselContainer" // Carousel konteyner sınıfı
        itemClass="carouselItem" // Carousel öğesi sınıfı
        customButtonGroup={<CustomButtonGroup />}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
         {veriler.map((item, index) => (
          <div key={index} className="carouselCard">
            <Link to="/opencard">
              <SmallCard2 {...item} />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
