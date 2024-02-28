import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";

const Cart = () => {
  // Sepete eklenen ürünlerin listesi ve toplam ürün sayısı
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Tarayıcının yerel depolama alanından sepet verilerini al
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const storedCartCount = parseInt(localStorage.getItem("cartCount")) || 0;

    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
    if (storedCartCount) {
      setCartCount(storedCartCount);
    }
  }, []);

  useEffect(() => {
    // Herhangi bir değişiklik olduğunda, sepet verilerini yerel depolama alanına kaydet
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", cartCount.toString());
  }, [cartItems, cartCount]);

  // Sepete ürün ekleme işlevi
  const addToCart = () => {
    const newCartItems = [
      ...cartItems,
      { id: cartItems.length + 1, name: "Ürün" },
    ];
    setCartItems(newCartItems);
    setCartCount(cartCount + 1); // Toplam adeti artır
  };

  // Sepetten ürünü kaldırma işlevi
  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    setCartCount(cartCount - 1); // Toplam adeti azalt
  };

  // Sepet detaylarını gösterme işlevi
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {/* Sepet ikonu ve sayacı */}
      <div
        className="cart-container"
        style={{ position: "fixed", bottom: 20, right: 20, zIndex: 999 }}
      >
        <button
          style={{
            backgroundColor: "yellow",
            padding: 25,
            borderRadius: 50,
            border: "none",
            cursor: "pointer",
          }}
          className="cart-button"
          onClick={showDrawer}
        >
          <ShoppingCartOutlined style={{ fontSize: 20 }} />
        </button>
        {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
      </div>

      {/* Sepet detayları için Drawer */}
      <Drawer
        title="Sepet"
        placement="right"
        closable={false}
        onClose={onClose}
        open={visible}
        width={300}
      >
        <div>
          {/* Sepet içeriği */}
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <Button onClick={() => removeFromCart(item.id)}>Sil</Button>
            </div>
          ))}
        </div>
        {/* Sepet işlemleri */}
        <Button onClick={() => setCartItems([])}>Sepeti Temizle</Button>
      </Drawer>
    </div>
  );
};

export default Cart;
