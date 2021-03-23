import React from "react";
import PropTypes from "prop-types";
import { Button } from "./controls/Button";
import { FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Header = (props) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" && (
        <Button
          color={props.showAdd ? "#ffcccb" : "blue"}
          text={props.showAdd ? <FaTimes style={{ color: "red" }} /> : "Add"}
          onClick={props.onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const heaadingStyles = {
//   color: "red",
//   backgroundColor: "black",
// };
