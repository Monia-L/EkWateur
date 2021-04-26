import React from "react";
import ButtonDisconnect from "../component/ButtonDisconnect";
import ButtonEnter from "../component/Home/ButtonEnter";
import DetailsUser from "../component/User/DetailsUser";

const Home = () => {
  return (
    <>
      <main className="home-page__container">
        <DetailsUser />
        <ButtonDisconnect />
        <ButtonEnter />
      </main>
    </>
  );
};

export default Home;
