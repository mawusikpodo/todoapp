import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  const { color, text, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "rgb(48, 3, 153)",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  conClick: PropTypes.func,
};
