import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  // const [time, setTime] = React.useState();

  // React.useEffect(() => {
  //   setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);
  // }, []);

  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 20;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className='container'>
      <Header title='Fast React Pizza Co.' />

      <Menu
        title='Our Menu'
        desc=' Authentic Italian Cuisine. 6 creative dishes to choose from. All from
        our stone oven. all organic. all delicious.'
        data={pizzaData}
      />

      <Footer isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
    </div>
  );
}

/*
  props: one way data flow
         makes application more predictable and easier to understand
         makes application easier to debug, as we have control over the data

  Angular has two-way data flow
*/

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  );
};

const Menu = ({ title, desc, data }) => {
  return (
    <div className='menu'>
      <h2>{title}</h2>
      <p>{desc}</p>
      {Pizzas.length > 0 && <Pizzas data={data} />}
    </div>
  );
};

const Pizzas = ({ data }) => {
  return (
    <div className='pizzas'>
      {data.map((item, id) => {
        return <Pizza data={item} key={id} />;
      })}
    </div>
  );
};

const Pizza = (data) => {
  return (
    <>
      <div className={`pizza ${data?.data?.soldOut && "sold-out"}`}>
        <img src={`${data.data?.photoName}`} alt={data.data?.name} />
        <div>
          <h3>{data.data?.name}</h3>
          <p>{data.data?.ingredients}</p>
          <span>{data?.data?.soldOut ? "SOLD OUT" : data?.data?.price}</span>
        </div>
      </div>
    </>
  );
};

const Footer = ({ isOpen, openHour, closeHour }) => {
  return (
    <footer className='footer'>
      <div className='order'>
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          `We're happy to welcome you between ${openHour}:00 to ${closeHour}:00`
        )}
      </div>
    </footer>
  );
};

const Order = ({ closeHour }) => {
  return (
    <>
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className='btn'>Order now</button>
    </>
  );
};

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode: render all component twice inorder to find certain bugs
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App />)
