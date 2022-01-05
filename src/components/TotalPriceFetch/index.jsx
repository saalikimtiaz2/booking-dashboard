import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar";
import Styles from "./style.module.scss";

function TotalPriceFetch({ totalPriceFetched }) {
  const totalProductsPrice = 10000;

  return (
    <>
      <div className={Styles.titleWrapper}>
        <h2 style={{ color: "#e74c3c" }}>
          ${" "}
          {Number(totalPriceFetched).toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </h2>
        <img src="/assets/up.svg" alt="" className="icon" />
      </div>
      <p className={`${Styles.subtitle} uppercase`}>Total Price Fetch</p>
      <ProgressBar
        value={Number((totalPriceFetched / totalProductsPrice) * 100).toFixed(
          0
        )}
        barColor="#e74c3c"
      />
    </>
  );
}

TotalPriceFetch.propTypes = {
  totalPriceFetched: PropTypes.number.isRequired,
};

export default TotalPriceFetch;
