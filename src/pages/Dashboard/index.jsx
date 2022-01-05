import React, { useState, useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import Styles from "./style.module.scss";
import TotalPriceFetch from "../../components/TotalPriceFetch";
import TotalPricePurchased from "../../components/TotalPricePurchase";
import WeeklyStats from "../../components/WeeklyStats";
import Products from "../../components/Products";

function Dashboard() {
  const { loading, products, fetchProducts } = useProducts();
  const [totalPriceFetched, setTotalPriceFetch] = useState();
  const [product, setProduct] = useState(null);
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page <= 7) {
      setPage((prev) => prev + 1);
      fetchProducts(page + 1);
    }
  };
  const handlePrevious = () => {
    if (page >= 1) {
      setPage((prev) => prev - 1);
      fetchProducts(page - 1);
    }
  };

  const handleChangeProduct = (offset) => () => {
    setProduct(products[products.length - offset]);
  };

  useEffect(() => {
    if (!loading && products.length > 0) {
      const total = products.reduce((prev, curr) => curr.price + prev, 0);
      setTotalPriceFetch(total);
      setProduct(products[products.length - 3]);
    }
  }, [loading, products]);

  if (loading) {
    return <span>Loading...</span>;
  } else {
    return (
      <>
        <section>
          <div className="container">
            <h1 className={Styles.heading}>Booking Dashboard</h1>
            <div className="gridContainer">
              <div className="one gridChild">
                <TotalPriceFetch totalPriceFetched={totalPriceFetched} />
              </div>
              <div className="two gridChild">
                <TotalPricePurchased totalPriceFetched={totalPriceFetched} />
              </div>
              <div className="three gridChild">
                <div className={Styles.titleWrapper}>
                  <h3 className={Styles.subHeading}>Reservations</h3>
                  <ul className="iconList">
                    <li>
                      <img src="/assets/minimize.svg" alt="" />
                    </li>
                    <li>
                      <img src="/assets/refresh.svg" alt="" />
                    </li>
                    <li>
                      <img src="/assets/close.svg" alt="" />
                    </li>
                  </ul>
                </div>
                <p className={Styles.subtitle}>Reservations overview</p>

                <div className={Styles.detailsWapper}>
                  <h3>Total Visitors of 23.08.2018</h3>
                  <p>345</p>
                  <div className={Styles.pieWrapper}>
                    <div>
                      <ul className={Styles.pieList}>
                        <li>
                          <div
                            style={{ backgroundColor: "rgb(151, 255, 32)" }}
                          />
                          Completed
                        </li>
                        <li>
                          <div
                            style={{ backgroundColor: "rgb(59, 223, 122)" }}
                          />
                          Online Check-in
                        </li>
                        <li>
                          <div
                            style={{ backgroundColor: "rgb(230, 230, 230)" }}
                          />
                          Remain
                        </li>
                      </ul>
                    </div>
                    <div className={Styles.pieChart}>
                      <div />
                    </div>
                  </div>
                </div>
                <button className="btn btn-link">Download Report</button>
              </div>
              <div className="four gridChild">
                <WeeklyStats products={products} />
              </div>
              <div className={`five gridChild ${Styles.mission}`}>
                <div>
                  <h2>Our mission</h2>
                  <p>
                    We are inspired by the customer&apos;s happiness and their
                    ability to travel!
                  </p>
                  <img src="/assets/target.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Products product={product} />
        <div className={Styles.pagination}>
          <button onClick={handlePrevious}>&larr;</button>
          <button onClick={handleChangeProduct(3)}>1</button>
          <button onClick={handleChangeProduct(2)}>2</button>
          <button onClick={handleChangeProduct(1)}>3</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </>
    );
  }
}

export default Dashboard;
