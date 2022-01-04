import React from "react";
import PropTypes from "prop-types";

function Circle({ color, percentage }) {
  const r = 60;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} // remove colour as 0% sets full circumference
      strokeWidth="5px"
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    />
  );
}

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function Text({ percentage, color }) {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize="1.5em"
      fill={color}
    >
      {percentage.toFixed(0)}%
    </text>
  );
}
Text.propTypes = {
  color: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function RoundProgress({ percentage, color }) {
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle color="rgb(230, 230, 230)" />
        <Circle color={color} percentage={percentage} />
      </g>
      <Text percentage={percentage} color={color} />
    </svg>
  );
}
RoundProgress.propTypes = {
  color: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default RoundProgress;
