import React from "react";
import PropTypes from "prop-types";
import Styles from "./styles.module.scss";

function Tabs({ items, active, changePan }) {
  return (
    <div className={Styles.root}>
      {items.map((item, idx) => (
        <button
          key={item}
          className={`${Styles.button} ${active === idx && Styles.activeTab}`}
          onClick={changePan(idx)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  active: PropTypes.number.isRequired,
  changePan: PropTypes.func.isRequired,
};

export default Tabs;
