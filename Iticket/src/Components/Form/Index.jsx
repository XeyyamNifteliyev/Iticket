import "./style.css";
import { Button, Form, Input, Space, message, Menu, Dropdown } from "antd";
import { FacebookFilled, GoogleSquareFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import {  SignInButton } from "@clerk/clerk-react"

const App = () => {
  const [form] = Form.useForm();
  const [register, setRegister] = useState(false);
  const [mail, setMail] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [inputData, setInputData] = useState({
    ad: "",
    soyad: "",
    mobil: "",
    e_poct: "",
    sifre: "",
    sifreTesdiq: "",
    id: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:2500/users")
      .then((res) => setInputData(res.data));
  }, []);

  const handleMenuVisibleChange = (visible) => {
    setIsMenuVisible(visible);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setIsMenuVisible(false);
  };

  const onFinish = async (values) => {
    if (register) {
      // Post
      axios.post("http://localhost:2500/users", { ...inputData, id: nanoid() });
    } else {
      // Get
      try {
        const response = await axios.get(
          `http://localhost:2500/users?e_poct=${values.e_poct}&sifre=${values.sifre}`
        );
        const users = response.data;
        if (users.length === 1) {
          setLoggedIn(true);
          message.success("Giriş Ugurlu!");
        } else {
          message.error("E-poct  ve ya şifre xetali!");
        }
      } catch (error) {
        console.error("Giriş xetasi:", error);
        message.error("Giriş olanda xeta oldu");
      }
    }
  };

  const regist = (e) => {
    e.preventDefault();
    setRegister(!register);
    setMail(true);

    setInputData({
      ad: "",
      soyad: "",
      mobil: "",
      e_poct: "",
      sifre: "",
      sifreTesdiq: "",
      id: "",
    });
  };

  const reset = (e) => {
    e.preventDefault();
    setMail(false);
  };

  const userMenu = [
    {
      key: "profile",
      label: (
        <a key="profile" href="">
          Profile
        </a>
      ),
    },
    {
      key: "orderHistory",
      label: (
        <a key="orderHistory" href="">
          Order History
        </a>
      ),
    },
    {
      key: "deliveryAddresses",
      label: (
        <a key="deliveryAddresses" href="">
          Delivery Addresses
        </a>
      ),
    },
    {
      key: "myCards",
      label: (
        <a key="myCards" href="">
          My Cards
        </a>
      ),
    },
    {
      key: "affiliateProgram",
      label: (
        <a key="affiliateProgram" href="">
          Affiliate Program
        </a>
      ),
    },
    {
      key: "wallet",
      label: (
        <a key="wallet" href="">
          Wallet
        </a>
      ),
    },
    {
      key: "giftCard",
      label: (
        <a key="giftCard" href="">
          Gift Card
        </a>
      ),
    },
    {
      key: "updatePassword",
      label: (
        <a key="updatePassword" href="">
          Update Password
        </a>
      ),
    },
    {
      key: "logout",
      label: (
        <a key="logout" href="" onClick={handleLogout}>
          Logout
        </a>
      ),
    },
  ];

  const menuItems = userMenu.map((item) => (
    <Menu.Item key={item.key}>{item.label}</Menu.Item>
  ));

  return (
    <>
      {loggedIn ? (
        <>
          <Dropdown
            overlay={<Menu>{menuItems}</Menu>}
            placement="bottomLeft"
            // visible={isMenuVisible}
            open={isMenuVisible}
            // onVisibleChange={handleMenuVisibleChange}
            onOpenChange={handleMenuVisibleChange}
          >
            <Button type="primary">User Menu</Button>
          </Dropdown>
        </>
      ) : (
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item>
            <div className="daxil-ol">
              {register ? "Qeydiyyat" : "Daxil ol"}
            </div>
            <div>
              <Space>
                <Button
                  href="https://www.facebook.com/"
                  target="_blank"
                  icon={<FacebookFilled />}
                  className="facebook-login-button"
                ></Button>
                <Button
                  href="https://www.google.com/"
                  target="_blank"
                  icon={<GoogleSquareFilled />}
                  className="google-login-button"
                ></Button>
                
           {/* Avtomatik qeydiyyat ucun  */}
           {/* <SignInButton  />  */}

              </Space>
            </div>
          </Form.Item>

          {register && (
            <>
              <Form.Item
                name="ad"
                rules={[{ required: true, message: "ad mutleqdir" }]}
              >
                <Input
                  value={inputData.ad}
                  size="large"
                  placeholder="ad"
                  onChange={(e) =>
                    setInputData({ ...inputData, ad: e.target.value })
                  }
                />
              </Form.Item>

              <Form.Item
                name="soyad"
                rules={[{ required: true, message: "soyad mutleqdir" }]}
              >
                <Input
                  value={inputData.soyad}
                  size="large"
                  placeholder="soyad"
                  onChange={(e) =>
                    setInputData({ ...inputData, soyad: e.target.value })
                  }
                />
              </Form.Item>

              <Form.Item
                name="mobil"
                rules={[{ required: true, message: "mobil mutleqdir" }]}
              >
                <Input
                  value={inputData.mobil}
                  type="number"
                  size="large"
                  placeholder="mobil"
                  onChange={(e) =>
                    setInputData({ ...inputData, mobil: e.target.value })
                  }
                />
              </Form.Item>
            </>
          )}

          <Form.Item
            name="e_poct"
            rules={[{ required: true, message: "E-poct mutleqdir" }]}
          >
            <Input
              value={inputData.e_poct}
              size="large"
              type="email"
              placeholder="E-poct"
              onChange={(e) =>
                setInputData({ ...inputData, e_poct: e.target.value })
              }
            />
          </Form.Item>

          {mail && (
            <Form.Item
              name="sifre"
              rules={[{ required: true, message: "Sifre mutleqdir" }]}
            >
              <Input
                value={inputData.sifre}
                size="large"
                type="password"
                placeholder="Sifre"
                suffix={
                  mail &&
                  !register && (
                    <a onClick={reset} className="login-form-forgot" href="">
                      Unutmusunuz??
                    </a>
                  )
                }
                onChange={(e) =>
                  setInputData({ ...inputData, sifre: e.target.value })
                }
              />
            </Form.Item>
          )}

          {register && (
            <Form.Item
              name="sifreTesdiq"
              rules={[{ required: true, message: "Sifreni Tesdiqle" }]}
            >
              <Input
                value={inputData.sifreTesdiq}
                size="large"
                type="password"
                placeholder="Sifreni Tesdiqle"
                onChange={(e) =>
                  setInputData({ ...inputData, sifreTesdiq: e.target.value })
                }
              />
            </Form.Item>
          )}

          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              block
              className="login-form-button"
            >
              {mail ? (register ? "Qeydiyyat" : "Daxil ol") : "Sifirla"}
            </Button>
          </Form.Item>

          <Form.Item>
            <div className="qeydiyyat-form">
              iTicket.AZ-da yenisiniz?{" "}
              {register ? (
                <Button htmlType="submit" type="primary" onClick={regist}>
                  Daxil ol
                </Button>
              ) : (
                <Button type="primary" htmlType="submit" onClick={regist}>
                  Qeydiyyatdan Kec{" "}
                </Button>
              )}
            </div>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default App;
