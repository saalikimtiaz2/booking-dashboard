import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar";
import RoundProgress from "../RoundProgress";
import Divider from "../Divider";
import Styles from "./style.module.scss";

function WeeklyStats({ products }) {
  const [postiveRated, setPostiveRated] = useState([]);
  const [negativeRated, setNegativeRated] = useState([]);
  const [categories, setCategories] = useState([]);
  const organizeProductByCategory = () => {
    // https://stackoverflow.com/questions/40774697/how-can-i-group-an-array-of-objects-by-key?answertab=votes#tab-top
    const result = products.reduce((prev, curr) => {
      // eslint-disable-next-line no-param-reassign
      prev[curr.category] = prev[curr.category] || [];
      prev[curr.category].push(curr);
      return prev;
    }, {});
    setCategories(result);
  };

  useEffect(() => {
    products.forEach((product) => {
      if (product.rating.rate > 3) {
        setPostiveRated((prev) => [...prev, product]);
      } else {
        setNegativeRated((prev) => [...prev, product]);
      }
    });
    organizeProductByCategory();
  }, []);

  return (
    <>
      <div className={Styles.titleWrapper}>
        <h3 className={Styles.subHeading}>Weekly Stat</h3>
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
      <p className={Styles.subtitle}>
        Top selling items statistic by last month
      </p>

      <div className={Styles.roundProgressWrapper}>
        <div>
          <RoundProgress
            percentage={Number((postiveRated.length * 100) / products.length)}
            color="#96e43e"
          />
          <p>
            Customers <br />
            satisfaction rate
          </p>
        </div>
        <div>
          <RoundProgress
            percentage={Number((negativeRated.length * 100) / products.length)}
            color="#e74c3c"
          />
          <p>
            Negative <br />
            feedback
          </p>
        </div>
      </div>
      <Divider />
      <h3 className={Styles.subHeading}>Category Score</h3>
      <div className={Styles.socialWrapper}>
        {Object.keys(categories).map((key) => (
          <ProgressBar
            title={key}
            value={(categories[key].length * 100) / products.length}
            barColor="#00a8ff"
          />
        ))}
      </div>
    </>
  );
}

WeeklyStats.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
};

export default WeeklyStats;
