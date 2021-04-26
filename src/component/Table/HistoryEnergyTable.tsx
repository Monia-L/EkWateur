import React from "react";
import { DetailsEnergieModel } from "../../pages/DetailsPage";
import moment from "moment";

interface HistoryEnergyTableProps {
  dataOfEnergy?: DetailsEnergieModel[];
  sortBy: (key: string) => void;
  title: string;
}
const HistoryEnergyTable = (props: HistoryEnergyTableProps) => {
  const { dataOfEnergy, sortBy, title } = props;

  return (
    <>
      {dataOfEnergy!.length > 0 && (
        <div className="table__container">
          <div className="table__container__title">
            <h2>Relevé {title}</h2>
          </div>
          <table className="table__container__table">
            <thead>
              <tr>
                <th onClick={() => sortBy("createdAt")}>Date</th>
                <th onClick={() => sortBy("indexHigh")}>Index HP</th>
                <th onClick={() => sortBy("indexLow")}>Index HC</th>
              </tr>
            </thead>
            <tbody>
              {dataOfEnergy?.map((detailEnergy: DetailsEnergieModel, index) => (
                <tr key={index}>
                  <td>{moment(detailEnergy.createdAt).format("DD/MM/YYYY")}</td>
                  <td>{detailEnergy.indexHigh}</td>
                  <td>
                    {detailEnergy.indexLow ? detailEnergy.indexLow : "ʕᵔᴥᵔʔ"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default HistoryEnergyTable;
