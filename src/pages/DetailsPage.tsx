/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import axios from "axios";
import HistoryEnergyTable from "../component/Energy-statement-history/HistoryEnergyTable";
import ToggleSwitch from "../component/Energy-statement-history/ToggleSwitch";

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
  const [typeOfEnergy, setTypeOfEnergy] = useState<string>("electricity");
  const [detailsOfEnergy, setDetailsOfEnergy] = useState<DetailsEnergieModel[]>(
    []
  );
  const [dataEnergySort, setDataEnergySort] = useState<DetailsEnergieModel[]>(
    []
  );
  const titleTable = typeOfEnergy === "electricity" ? " électrique" : "gaz";

  const getHistoryOfEnergies = async () => {
    const nameOfEnergy =
      typeOfEnergy === "electricity" ? "2/electricity" : "1/gas";

    // axios the api
    const HistoryEnergies = await axios(
      `https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/${nameOfEnergy}`
    );
    const { data } = HistoryEnergies;
    setDetailsOfEnergy(data);
  };

  const sortBy = (key: string) => {
    const data = detailsOfEnergy.sort((a: any, b: any) => b[key] - a[key]);
    setDataEnergySort(data);
  };

  useEffect(() => {
    getHistoryOfEnergies();
  }, [typeOfEnergy]);

  return (
    <>
      <ToggleSwitch
        switchTypeOfEnergy={(event: any) => setTypeOfEnergy(event.target.value)}
      />
      <a href="/logout" className="tiny button button--link">
        Déconnexion
      </a>

      <HistoryEnergyTable
        dataOfEnergy={detailsOfEnergy}
        sortBy={sortBy}
        title={titleTable}
      />
    </>
  );
};
export default DetailsPage;
