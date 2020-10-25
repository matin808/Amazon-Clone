import React from "react";
import "./Home.css";
import CaroselImage from "./Carosel";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <CaroselImage />
      </div>
      <div className="home__main">
        <div className="home__row">
          <Product
            title="The Secret(The bery Promising and famous book by none another than Mr.Matin Kadri who is the main focus of the world right now)"
            price={199.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51XruK9WkYL._SX392_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
          <Product
            title="CPU( i7 9th Gen Processor And 16gb Ram )"
            price={30000}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71VmHYqdHsL._AC_SL1500_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Apple Earphone"
            price={3999.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41wYbyr3LLL._AC_SL1144_.jpg"
            }
            rating={5}
          />
          <Product
            title="Ultra HD display Monitor"
            price={8999.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
            }
            rating={4}
          />
          <Product
            title="Laptop BackPack"
            price={799.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81vfzNUAXEL._AC_SL1500_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung Ultra HD TV"
            price={60000.0}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
