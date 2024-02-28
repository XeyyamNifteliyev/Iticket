import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import dayLocaleData from "dayjs/plugin/localeData";
import { Calendar, Drawer, Button } from "antd";
import axios from "axios";
import "./Calendar.css";
import { useParams } from "react-router-dom";

dayjs.extend(dayLocaleData);

const TripDetails = ({ date, onAddToCart }) => {
  const initialTickets = [
    { type: "Yerli Vatandaşlar", count: 1, price: 2 },
    { type: "Xarici Vatandaşlar", count: 1, price: 9 },
    { type: "Tələbə", count: 1, price: 1 },
  ];

  const [tickets, setTickets] = useState(initialTickets);
  const { id } = useParams();
  const [jsonNum, setJsonNum] = useState([]);
  const [sekil, setSekil] = useState("");

  useEffect(() => {
    const dataAl = async () => {
      try {
        const cavap = await axios.get("../../../data2 (1).json");
        setJsonNum(cavap.data);
      } catch (hata) {
        console.error("Veri getirme hatası:", hata);
      }
    };

    dataAl();
  }, [id]);

  useEffect(() => {
    if (jsonNum && jsonNum.tedbirler) {
      const jsonId = jsonNum.tedbirler.find((x) => x.id === id);
      setSekil(jsonId || ""); // Eğer resim mevcut değilse, boş bir string olarak ayarla
    }
  }, [id, jsonNum]);

  const handleAddTicket = (index) => {
    if (tickets[index].count >= 10) return;

    setTickets((prevTickets) =>
      prevTickets.map((ticket, i) =>
        i === index ? { ...ticket, count: ticket.count + 1 } : ticket
      )
    );
  };

  const handleRemoveTicket = (index) => {
    if (tickets[index].count <= 0) return;

    setTickets((prevTickets) =>
      prevTickets.map((ticket, i) =>
        i === index && ticket.count > 1
          ? { ...ticket, count: ticket.count - 1 }
          : ticket
      )
    );
  };

  const handleAddToCart = () => {
    const cartItems = tickets.filter((ticket) => ticket.count > 0);
    onAddToCart(date, cartItems);
  };

  return (
    <div className="open-calendar-card">
      {tickets.map((ticket, index) => (
        <div key={index} className="calendar-card">
          <h3>{sekil.ad}</h3>
          <div className="card-people">
            <p>{ticket.type}</p>
            <p>{`${ticket.price * ticket.count} ₼`}</p>
          </div>
          <div className="card-button">
            <button
              className="left-btn"
              onClick={() => handleRemoveTicket(index)}
            >
              -
            </button>
            <p>{ticket.count}</p>
            <button
              className="right-btn"
              onClick={() => handleAddTicket(index)}
            >
              +
            </button>
          </div>
          <div className="ticket">
            <span>Mövcuddur: {Math.max(10 - ticket.count, 0)}</span>
          </div>
        </div>
      ))}
      <div className="addbutton">
        <Button onClick={handleAddToCart}>Əlavə Edin</Button>
      </div>
    </div>
  );
};

const App = () => {
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (date, items) => {
    console.log(
      `Sepete Eklendi: ${date.format("YYYY-MM-DD")}, ${items
        .map((item) => `${item.count} ${item.type}`)
        .join(", ")} bilet`
    );
    setCartItems(items);
    setVisible(true);
  };

  const wrapperStyle = {
    border: `1px solid #ebedf0`,
    borderRadius: 20,
    padding: 20,
    margin: 20,
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const disabledDate = (current) => {
    return current && current < dayjs().startOf("day");
  };

  const handleDateClick = (value) => {
    setSelectedDate(dayjs(value));
    setVisible(true);
  };

  const handleDrawerClose = () => {
    setVisible(false);
  };

  return (
    <div style={wrapperStyle} className="calendar">
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        disabledDate={disabledDate}
        onSelect={handleDateClick}
      />
      <Drawer
        title={`Tarih: ${
          selectedDate ? selectedDate.format("YYYY-MM-DD") : ""
        }`}
        placement="right"
        closable={true}
        onClose={handleDrawerClose}
        visible={visible}
        width={300}
      >
        {selectedDate && (
          <TripDetails date={selectedDate} onAddToCart={handleAddToCart} />
        )}
        <div>
          <h2>Sepetiniz</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.count} {item.type} - {item.price * item.count} ₼
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default App;
