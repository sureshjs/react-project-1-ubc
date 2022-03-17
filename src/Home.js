import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="12344334"
            title="lorem ipsum"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="12354"
            title="lorem ipsum crappy bag"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="424234"
            title="lorem ipsum blue bag"
            price={98.34}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="1234233"
            title="lorem ipsum sdfsdfsdf"
            price={4482.23}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="1245523"
            title="lorem ipsum lorem ipsum"
            price={44.33}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="76435234"
            title="lorem ipsumlorem ipsumlorem ipsum"
            price={938.32}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
