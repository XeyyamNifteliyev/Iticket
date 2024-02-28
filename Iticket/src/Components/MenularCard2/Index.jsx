import  { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Index";
import "./style.css";

const ProductSlider = () => {
  const [veriler, setVeriler] = useState([]);

  const params = useParams()
  
  useEffect(() => {
    axios
      .get("../../../data2 (1).json")
      .then((res) => setVeriler(res.data.tedbirler))
      .catch((error) => console.error("Veri getirme hatası:", error));
  }, []);

  return (
    <div>
      {veriler.map((item, index) => (
        <div key={index}>
          <Link to="/opencard">
            <Card {...item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
