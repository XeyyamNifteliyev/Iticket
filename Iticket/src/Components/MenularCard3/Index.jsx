import "./style.css";
const Index = ({ ...data }) => {
  return (
    <div className="flex">
      <div className="menu-cards">
      <div className="menu-card">
        <div className="menu-image">
          <img className="menu-first" src={data.sekil} alt="" />
          <img className="menu-second" src={data.arxafon} alt="" />
          <div className="menu-text">
            <p>{data.tarix}</p>
            <button>{data.qiymet.min} ₼-dan</button>
          </div>
          <div className="menu-hover">
            <h6>{data.ad}</h6>
            <p>{data.yer}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Index;
