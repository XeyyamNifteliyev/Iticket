import "./style.css";
const { Header, Footer, Content } = Layout;
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import MenularCard3 from '../MenularCard3/Index'
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Select,
  DatePicker,
  Slider,
  Input,
  Row,
  Col,
  Typography,
  Layout,
  Flex,
} from "antd";
const { Title } = Typography;

import Menu from "../Menu/Index";
import Foot from "../Footer/Index";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 150,
  paddingInline: 0,
  lineHeight: "64px",
  backgroundColor: "#fff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 500,
  margin: "0 50px",
  backgroundColor: "transparent",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};

const Index = () => {
  const { Option } = Select;

  const placeholderText = "Mekani Sec";

  const tarix = "Tarix araligini secin";

  const generateOptions = () => {
    const options = [
      "Heydər Əliyev Sarayı",
      "Milli Gimnastika Arenası - Bakı",
      "Akademik Milli Dram Teatrı",
      "Beynəlxalq Muğam Mərkəzi",
      "Azərbaycan Dövlət Akademik Filarmoniyası",
      "Gənc Tamaşaçılar Teatrı",
      "Kamera və orqan musiqisi zalı",
      "Akademik Rus Dram Teatrı",
      "Badamdar Estates",
      "Bakı Musiqi Akademiyası nəzdində Opera Studiyasının Konsert salonu",
      "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
      "Azərbaycan Dövlət Akademik Musiqili Teatrı",
      "Gənc Tamaşaçılar kiçik səhnə",
      "Nizami Kino Mərkəzi",
      "Bakı Konqres Mərkəzi",
      "Neftçi Arena",
      "Marionet Teatrı",
      "Bakı İdman Sarayı",
      "Sea Breeze Resort",
      "Heydər Əliyev Mərkəzi",
      "Avropa Azərbaycan məktəbi (Badamdar)",
      "Azərbaycan Dövlət Kukla Teatrı",
      "Şəhriyar Adına Mədəniyyət Mərkəzi",
      "Sumqayıt şəhəri Kimyaçı Mədəniyyət Sarayı",
      "Azərbaycan İstiqlal Muzeyi",
      "Azərbaycan Musiqi Mədəniyyəti Dövlət Muzeyi",
      "C.Cabbarlı adına Azərbaycan Dövlət Teatr Muzeyi",
      "Üzeyir Hacıbəylinin ev-muzeyi",
      "Atəşgah məbədi",
      "“Yanar dağ” Dövlət Tarix-Mədəniyyət və Təbiət Qoruğu",
      "Restoran Atelye 61",
      "Pizza Hut",
      "Yanardağ & Atəşgah",
      "Şəkixanovlar evi",
      "Kiş Alban Məbədi",
      "Şəki Xan Sarayı",
      "Fikrət Əmirov adına Gəncə Dövlət Filarmoniyası",
      "Free Childre",
      "Şuşa Dövlət Musiqili Dram Teatrı",
      "Bakı Zooloji Parkı",
      "Suraxanı Gəmi-Muzey",
      "Hərbi Qənimətlər Parkı",
      "Flora Hostel",
      "Hədəf Liseyi",
      "27qm-Tarana's small gallery and cafe",
      "M Tea",
      "Gəncə Dövlət Dram Teatrı",
      "START IT",
      "Excelsior Hotel Baku",
      "Aida's Collection, Caspian Plaza",
    ];

    return options.map((option, index) => (
      <Option key={index}>{option}</Option>
    ));
  };

  // Tarixi Disable Etmek

  const disabledDate = (current) =>
    current && current < moment().startOf("day");

  const [value, setValue] = useState([0, 550]);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (index, val) => {
    const clampedValue = Math.max(0, Math.min(550, val));
    const updatedValue = [...value];
    updatedValue[index] = clampedValue;

    setValue(updatedValue);
  };

  // UseParams ile Basliq verme

  const params = useParams();


  const [veriler, setVeriler] = useState([]);

  useEffect(() => {
    axios.get("../../../data2 (1).json")
      .then(res => setVeriler(res.data.qarisiq))
      .catch(error => console.error("Veri getirme hatası:", error));
  }, []);

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle} className=".layoutStyle">
        <Header style={headerStyle}>
          <Menu />
        </Header>
        <Content style={contentStyle} className="contentStyle">
          <Row>
            <Title>{params.id}</Title>
          </Row>
          <Row gutter={[16, 16]} className="inputs">
            <Col span={24} lg={8}>
              <Select className="inputSelect" placeholder={placeholderText}>
                {generateOptions()}
              </Select>
            </Col>

            <Col span={24} lg={8}>
              <DatePicker
                className="inputDate"
                placement="bottomRight"
                placeholder={tarix}
                disabledDate={disabledDate}
              />
            </Col>

            <Col span={24} lg={8}>
              <div className="filter">
                <Input.Group className="inputGroup">
                  <Input
                    placeholder={`Qiymet ${value[0]}.00 m-dan`}
                    style={{ width: "50%", fontWeight: "600" }}
                    onChange={(val) => handleInputChange(0, val)}
                    readOnly
                    min={0}
                    max={550}
                    variant="borderless"
                  />

                  <Input
                    placeholder={` ${value[1]}.00 m-dek`}
                    style={{ width: "50%", fontWeight: "600" }}
                    onChange={(val) => handleInputChange(1, val)}
                    readOnly
                    min={0}
                    max={550}
                    variant="borderless"
                  />
                </Input.Group>

                <Slider
                  style={{ width: "90%", margin: " 15px auto 0" }}
                  range={{ draggableTrack: true }}
                  defaultValue={value}
                  onChange={onChange}
                  max={550}
                />
              </div>
            </Col>
          </Row>
         
        </Content>
       <div className="flexmenu">
       {veriler.map((item, index) => (
          <div key={index} className="menularcard">
            <Link to="/opencard">
              <MenularCard3 {...item} />
            </Link>
          </div>
        ))}
       </div>
        <Footer style={footerStyle}>
          <Foot />
        </Footer>
      </Layout>
    </Flex>
  );
};

export default Index;
