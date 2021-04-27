/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import axios from "axios";
import HistoryEnergyTable from "../component/Table/HistoryEnergyTable";
import ToggleSwitch from "../component/Table/ToggleSwitch";
import ButtonDisconnect from "../component/ButtonDisconnect";

// typing of the data received by the api
export interface DetailsEnergieModel {
  id: string;
  meterId: string;
  createdAt: string;
  indexHigh: number;
  indexLow?: number | undefined;
  meter: { id: string; createdAt: string; pointOfDelivery: string };
}
const DetailsPage = () => {
  const [typeOfEnergy, setTypeOfEnergy] = useState<string>("");
  const [detailsOfEnergy, setDetailsOfEnergy] = useState<DetailsEnergieModel[]>(
    []
  );

  const titleTable = typeOfEnergy === "electricity" ? " électrique" : "gaz";

  // axios the api
  const getHistoryOfEnergies = async () => {
    const nameOfEnergy =
      typeOfEnergy === "electricity" ? "2/electricity" : "1/gas";

    const HistoryEnergies = await axios(
      `https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/${nameOfEnergy}`
    );
    const { data } = HistoryEnergies;
    setDetailsOfEnergy(data);
  };

  useEffect(() => {
    getHistoryOfEnergies();
  }, [typeOfEnergy]);

  return (
    <>
      <main className="details-page__container">
        <ButtonDisconnect />
        <ToggleSwitch
          switchTypeOfEnergy={(event) =>
            setTypeOfEnergy((event.target as HTMLInputElement).value)
          }
        />
        <HistoryEnergyTable dataOfEnergy={detailsOfEnergy} title={titleTable} />
      </main>
    </>
  );
};
export default DetailsPage;
