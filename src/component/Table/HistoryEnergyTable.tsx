import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
import { DetailsEnergieModel } from "../../pages/DetailsPage";

interface TableProps {
  dataOfEnergy: DetailsEnergieModel[];
  title: string;
}
interface Column {
  field: string;
  headerName?: string;
  flex?: number;
  hide?: boolean;
}

const HistoryEnergyTable = (props: TableProps) => {
  const { dataOfEnergy, title } = props;

  const columns: Column[] = [
    { field: "id", hide: true },
    { field: "createdAt", headerName: "Date", flex: 1 },
    { field: "indexHigh", headerName: "Index HP", flex: 1 },
    {
      field: "indexLow",
      headerName: "Index HC",
      flex: 1,
      hide: title === "gaz" ? true : false,
    },
  ];

  //Change the date in object data with moment
  const rows = dataOfEnergy.map((detailEnergy: DetailsEnergieModel) => {
    detailEnergy.createdAt = moment(detailEnergy.createdAt).format(
      "DD/MM/YYYY"
    );
    return detailEnergy;
  });

  return (
    <div className="table__container" style={{ height: 400, width: "80%" }}>
      <p className="table__container__title">Relevé {title}</p>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterRowCount={true}
        hideFooterSelectedRowCount={true}
      />
    </div>
  );
};
export default HistoryEnergyTable;
