

import "./style.css";
const Index = ({ ...data }) => {
  return (
    <div className="o-cards">
      <div className="o-card">
        <div className="o-image">
          <img className="o-first" src={data.sekil} alt="" />
          <img className="o-second" src={data.arxafon} alt="" />
          <div className="o-text">
            <p>{data.tarix}</p>
            <button>{data.qiymet.min} ₼-dan</button>
          </div>
          <div className="o-hover">
          <h6>{data.ad}</h6>
          <p>{data.yer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
