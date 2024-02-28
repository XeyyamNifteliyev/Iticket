import "./style.css";
import { Layout, Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";

import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import logo from "../../assets/Sekiller/Logo.png";

const { Footer } = Layout;

const Index = () => {
  return (
    <Footer className="footer">
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} xl={{ span: 6 }} className="pad">
          <Row className="flex">

            <Col>
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="logo"
                  style={{ width: "180px" }}
                />
              </Link>
            </Col>

            <Col className="destekXidmeti">
              <div className="fs" style={{ fontSize: "18px" }}>
                Dəstək xidməti
                <div>
                  <a href="#">994 12 424 24 24</a>
                </div>
              </div>
            </Col>

          </Row>

        </Col>
        

        <Divider className="divider" />

        <Col xs={{ span: 12 }} xl={{ span: 6 }} className="pad">
          <Row>
            <div className="title">Məlumat</div>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              1.Ən çox verilən suallar
            </Link>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              2.Dəstək
            </Link>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              3.Şərtlər və Qaydalar
            </Link>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              4.Elektron bilet
            </Link>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              5.Biletin qaytarılması və dəyişdirilməsi
            </Link>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              6.Məxfilik
            </Link>
          </Row>
        </Col>

        <Col xs={{ span: 12 }} xl={{ span: 6 }} className="pad">
          <Row>
            <div className="title">iTicket</div>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              1.Haqqımızda
            </Link>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              2.Məkanlar
            </Link>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              3.Biletlərin Satış Məntəqələri
            </Link>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              4.Qarabağ Dirçəliş Fondu
            </Link>
          </Row>
          <Row>
            <Link to="/haqqimizda" className="fs">
              5.Əlaqə
            </Link>
          </Row>
        </Col>

        <Col xs={{ span: 24 }} xl={{ span: 6 }} className="pad">
          <Row>
            <div className="title">Təhlükəsizlik</div>
          </Row>
          <Row>
            <div className="Tehlukesizlik">
              <div className="fs">
                Bütün ödənişlər Visa, Visa Electron, Maestro və MasterCard-dan
                3D Secure ilə qorunur.
              </div>
              <img
                className="img"
                src="https://iticket.az/images/cards.svg"
                alt="sekil"
              />
            </div>
          </Row>
        </Col>
      </Row>

      <Row className="linkFooter">
        <Divider className="divider" />

        <Col className="pad mar">
          <div className="fs">
            ITICKET®, «İTİCKET» MMC-nin qeydə alınmış əmtəə nişanıdır.
          </div>
        </Col>
        <Col className="pad">
          <div className="sosial_links">
            <a
              href="https://github.com/XeyyamNifteliyev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined className="icon" />
            </a>
            <a
              href="https://www.facebook.com/sizin-facebook-hesabınız"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined className="icon" />
            </a>
            <a
              href="https://www.instagram.com/sizin-instagram-hesabınız"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined className="icon" />
            </a>

            <a
              href="https://www.twitter.com/sizin-twitter-hesabınız"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/sizin-linkedin-hesabınız"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined className="icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default Index;
