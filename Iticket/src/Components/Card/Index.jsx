import "./style.css";

const Index = ({ ...data }) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-image">
            <img className="firstImg" src={data.sekil} alt="" />
            <img className="secondImg" src={data.arxafon} alt="" />
          </div>
          <div className="card-text">
            <p>{data.tarix}</p>
            <button>{data.qiymet.max} ₼-dan</button>
          </div>
          <div className="hover-text">
            <h6>{data.ad}</h6>
            <p>{data.yer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
