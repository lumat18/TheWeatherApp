import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>
        created by{" "}
        <a
          className="link"
          href="https://github.com/lumat18/TheWeatherApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          lumat18
        </a>
      </h1>
    </div>
  );
};

export default Footer;
