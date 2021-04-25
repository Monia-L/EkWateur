import React from "react";

const DetailsUser = () => {
  return (
    <>
      <a href="/logout" className="button--link">
        Déconnexion
      </a>
      <p>detail user</p>
      <a href="/details" className="button--more-details">
        Go !
      </a>
    </>
  );
};

export default DetailsUser;
