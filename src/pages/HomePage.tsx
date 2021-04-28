import React from "react";
import ButtonDisconnect from "../component/ButtonDisconnect";
import ButtonMoreDetails from "../component/Home/ButtonMoreDetails";
import DetailsUser from "../component/User/DetailsUser";

const Home = () => {
  return (
    <main className="home-page__container">
      <DetailsUser />
      <ButtonMoreDetails />
      <ButtonDisconnect />
    </main>
  );
};

export default Home;
