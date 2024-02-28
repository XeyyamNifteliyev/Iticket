import LoggedInContext from "../Context/LoggedInContext";
import { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import Form from "../Form/Index";

import "./style.css";
import {
  Layout,
  Menu,
  Button,
  Dropdown,
  Drawer,
  Input,
  Row,
  Col,
  Modal,
} from "antd";

import {
  GlobalOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import logo1 from "../../assets/Sekiller/Logo.png";
import logo2 from "../../assets/Sekiller/Logo2.png";
import axios from "axios";

const { Header } = Layout;

const { Search } = Input;

const languageMenu = (
  <Menu>
    <Menu.Item key="language1">En</Menu.Item>
    <Menu.Item key="language2">Ru</Menu.Item>
  </Menu>
);

const Navbar = () => {
  const location = useLocation();

  const getMenuBackground = () => {
    return location.pathname === "/" ? "white" : "black";
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [collapsed, setCollapsed] = useState(true);
  const [hoverLanguage, setHoverLanguage] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    setIsHomepage(location.pathname === "/");
  }, [location]);

  const getLogoSrc = () => {
    return isHomepage ? logo2 : logo1;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  toggleMenu;

  /// Search //////\

  const [axtar, setAxtar] = useState(null);
  const [data, setFilterData] = useState(null);

  useEffect(() => {
    axios
      .get("../../../data2 (1).json")
      .then((res) => setAxtar(res.data.tedbirler));
  }, []);

  const handleSearch = (value) => {
    if (!axtar || !value) {
      return;
    }

    const filteredData = axtar.filter((item) => {
      return item.ad.toLowerCase().includes(value.toLowerCase());
    });
    setFilterData(filteredData);
  };

  // Modal Search //

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    console.log("data", data);
  };

  // Modal

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Modal Register //

  const showRegister = () => {
    setRegisterModal(true);
  };
  const closeRegister = () => {
    setRegisterModal(false);
  };

  return (
    <Header className="Header">
      {/* Hamburger Menu */}

      {windowWidth <= 1255 && (
        <Button
          icon={<MenuOutlined className="btnMenu" />}
          style={{ marginRight: "20px" }}
          onClick={showDrawer}
          size={"large"}
        />
      )}

      {/* Logo */}

      <Link to="/">
        <img
          src={getLogoSrc()}
          alt="Logo"
          style={{
            width: "150px",
            display: windowWidth > 1255 ? "block" : "none",
            mixBlendMode: "color-burn",
          }}
        />
      </Link>

      {/* Mobile Menu */}

      {windowWidth <= 1255 && (
        <>
          <Drawer
            size={"large"}
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/">
                  <img
                    src={logo2}
                    alt="Logo"
                    style={{ width: "150px", margin: "10px" }}
                  />
                </Link>
                <Dropdown
                  placement="bottom"
                  open={hoverLanguage}
                  onOpenChange={(visible) => setHoverLanguage(visible)}
                  overlay={languageMenu}
                >
                  <Button
                    icon={<GlobalOutlined className="btnLanguage" />}
                    style={{
                      marginBottom: "10px",
                      display: "block",
                      textAlign: "center",
                    }}
                  />
                </Dropdown>
              </div>
            }
            placement="left"
            closable={true}
            onClose={onCloseDrawer}
            open={drawerVisible}
          >
            <div>
              <Input.Search onSearch={handleSearch} />
            </div>

            <Menu
              theme="light"
              className="fontHamburger"
              style={{ background: "transparent" }}
            >
              <Menu.Item key="tedbirler">
                <Link to="/butun-tedbirler" onClick={onCloseDrawer}>
                  Butun Tedbirler
                </Link>
              </Menu.Item>
              <Menu.Item key="konsert">
                <Link to="/konsert" onClick={onCloseDrawer}>
                  Konsert
                </Link>
              </Menu.Item>
              <Menu.Item key="tamasa">
                <Link to="/tamasa" onClick={onCloseDrawer}>
                  Tamasa
                </Link>
              </Menu.Item>
              <Menu.Item key="usaqlar">
                <Link to="/usaqlar" onClick={onCloseDrawer}>
                  Usaqlar
                </Link>
              </Menu.Item>
              <Menu.Item key="dreamFest">
                <Link to="/dream-fest-2024" onClick={onCloseDrawer}>
                  DREAM FEST 2024
                </Link>
              </Menu.Item>
              <Menu.Item key="hayalKahvesi">
                <Link to="/hayal-kahvesi" onClick={onCloseDrawer}>
                  Hayal Kahvesi
                </Link>
              </Menu.Item>
              <Menu.Item key="idman">
                <Link to="/idman" onClick={onCloseDrawer}>
                  Idman
                </Link>
              </Menu.Item>
              <Menu.Item key="muzey">
                <Link to="/muzey" onClick={onCloseDrawer}>
                  Muzey
                </Link>
              </Menu.Item>
              <Menu.Item key="turizm">
                <Link to="/turizm" onClick={onCloseDrawer}>
                  Turizm
                </Link>
              </Menu.Item>
              <Menu.Item key="seminar">
                <Link to="/seminar" onClick={onCloseDrawer}>
                  Seminar
                </Link>
              </Menu.Item>
              <Menu.Item key="masterKlass">
                <Link to="/master-klass" onClick={onCloseDrawer}>
                  Master Klass
                </Link>
              </Menu.Item>
              <Menu.Item key="diger">
                <Link to="/diger" onClick={onCloseDrawer}>
                  Diger
                </Link>
              </Menu.Item>
              <Menu.Item key="mehsullar">
                <Link to="/mehsullar" onClick={onCloseDrawer}>
                  Mehsullar
                </Link>
              </Menu.Item>
              <Menu.Item key="altMenu5">
                <Link to="/360-vr" onClick={onCloseDrawer}>
                  360/VR
                </Link>
              </Menu.Item>
            </Menu>

            <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
              <Col span={12}>
                <div style={{ textAlign: "left", fontSize: "20px" }}>
                  Biletin Satis Menteqesi
                </div>
              </Col>
              <Col span={12}>
                <div style={{ textAlign: "right", fontSize: "20px" }}>
                  {" "}
                  Elaqe
                </div>
              </Col>
            </Row>
          </Drawer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Link to="/">
              <img
                src={logo1}
                alt="Logo"
                style={{
                  width: "150px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              icon={<HeartOutlined className="btnHeart" />}
              className="btnHeart"
            />
            <Button
              icon={<ShoppingCartOutlined className="btnShopping" />}
              className="btnShopping"
            />
            <Button
              icon={<UserAddOutlined className="btnUserIcon" />}
              type="link"
              className="btnUser"
              onClick={showRegister}
            />
            <Modal open={registerModal} onCancel={closeRegister} footer={null}>
              <Form />
            </Modal>
          </div>
        </>
      )}

      {/* Desktop and Tablet Menu */}

      {windowWidth > 1255 && (
        <div className="nav">
          <Dropdown
            placement="bottom"
            open={hoverLanguage}
            onOpenChange={(visible) => setHoverLanguage(visible)}
            overlay={languageMenu}
          >
            <Button
              icon={<GlobalOutlined style={{ color: getMenuBackground() }} />}
            />
          </Dropdown>

          <Menu
            mode="horizontal"
            theme="light"
            style={{ color: getMenuBackground() }}
            className="sss"
          >
            <Menu.Item
              className={isHomepage ? "homeHover" : "elseHover"}
              key="tedbirler"
            >
              <Link to="/butun-tedbirler">Butun Tedbirler</Link>
            </Menu.Item>

            <Menu.Item
              className={isHomepage ? "homeHover" : "elseHover"}
              key="konsert"
            >
              <Link to="/konsert">Konsert</Link>
            </Menu.Item>

            <Menu.Item
              className={isHomepage ? "homeHover" : "elseHover"}
              key="tamasa"
            >
              <Link to="/tamasa">Tamasa</Link>
            </Menu.Item>

            <Menu.Item
              className={isHomepage ? "homeHover" : "elseHover"}
              key="usaqlar"
            >
              <Link to="/usaqlar">Usaqlar</Link>
            </Menu.Item>

            <Menu.Item
              className={isHomepage ? "homeHover" : "elseHover"}
              key="dreamFestSubMenu"
            >
              <Link to="/dream-fest-2024">DREAM FEST 2024</Link>
            </Menu.Item>

            <Menu.SubMenu key="dots" title="...">
              <Menu.Item key="hayalKahvesi">
                <Link to="/hayal-kahvesi">Hayal Kahvesi</Link>
              </Menu.Item>

              <Menu.Item key="idman">
                <Link to="/idman">Idman</Link>
              </Menu.Item>

              <Menu.Item key="muzey">
                <Link to="/muzey">Muzey</Link>
              </Menu.Item>

              <Menu.Item key="turizm">
                <Link to="/turizm">Turizm</Link>
              </Menu.Item>

              <Menu.Item key="seminar">
                <Link to="/seminar">Seminar</Link>
              </Menu.Item>

              <Menu.Item key="masterKlass">
                <Link to="/master-klass">Master Klass</Link>
              </Menu.Item>

              <Menu.Item key="diger">
                <Link to="/diger">Diger</Link>
              </Menu.Item>

              <Menu.Item key="mehsullar">
                <Link to="/mehsullar">Mehsullar</Link>
              </Menu.Item>

              <Menu.Item key="altMenu5">
                <Link to="/360-vr">360/VR</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Button
              icon={<HeartOutlined style={{ color: getMenuBackground() }} />}
              style={{ marginLeft: "10px" }}
            />
            <Button
              icon={
                <SearchOutlined
                  className="btnSearch"
                  style={{ color: getMenuBackground() }}
                />
              }
              style={{ marginLeft: "10px" }}
              onClick={showModal}
            />
            <Modal
              title="Axtar"
              open={isModalVisible}
              onCancel={handleCancel}
              footer={null}
            >
              <Search
                placeholder="Axtar"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </Modal>

            <Button
              icon={
                <ShoppingCartOutlined style={{ color: getMenuBackground() }} />
              }
              style={{ marginLeft: "10px" }}
            />

            <>
              <Button
                icon={<UserAddOutlined className="btnUSer" />}
                type="link"
                onClick={showRegister}
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#fd0",
                  borderRadius: "50%",
                }}
              />
              <Modal
                open={registerModal}
                onCancel={closeRegister}
                footer={null}
              >
                <Form />
              </Modal>
            </>
          </div>
        </div>
      )}
    </Header>
  );
};

export default Navbar;
