import React from "react";
import { DataGrid, DataGridProps, GridToolbar } from "@mui/x-data-grid";

const PAGE_SIZE = 2;
const PAGE_SIZE_OPTIONS = [2, 4, 6, 8, 10];

interface GridProps extends DataGridProps {
  initialStateValue: object;
}

const TagsGrid: React.FunctionComponent<GridProps> = (props) => {
  return (
    <div className="rounded-md text-blue-900 bg-white">
      <DataGrid
        sx={{
          border: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        pageSizeOptions={PAGE_SIZE_OPTIONS}
        rowHeight={50}
        initialState={{
          ...props.initialStateValue,
          pagination: {
            paginationModel: { pageSize: PAGE_SIZE, page: 0 },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            csvOptions: { disableToolButton: true },
            printOptions: { disableToolButton: true },
          },
        }}
        disableColumnFilter
        disableColumnMenu
        {...props}
      />
    </div>
  );
};

export default TagsGrid;
