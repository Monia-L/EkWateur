import React from "react";
import byeMisterP from "../asset/gif/bye.gif";

const Logout = () => {
  return (
    <>
      <img src={byeMisterP} alt="goodBye" />
      <a href="/" className="tiny button button--link">
        Connexion
      </a>
    </>
  );
};

export default Logout;
