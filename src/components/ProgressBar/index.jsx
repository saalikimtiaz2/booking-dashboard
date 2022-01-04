import React from "react";
import PropTypes from "prop-types";
import Styles from "./style.module.scss";

function ProgressBar({ title, value, barColor }) {
  const hexToRGB = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
  };

  return (
    <div
      className={Styles.root}
      style={{
        display: title && "flex",
        padding: title && "0.5em 0",
      }}
    >
      <p>{title}</p>
      <div className={Styles.progressWrapper}>
        <p style={{ color: barColor }}>{value}%</p>
        <div className={Styles.track}>
          <div
            style={{
              width: `${value}%`,
              background: `linear-gradient(to right, ${hexToRGB(
                barColor,
                1
              )}, ${hexToRGB(barColor, 0.4)})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  barColor: PropTypes.string.isRequired,
};

export default ProgressBar;
