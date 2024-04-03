import TagsGrid from "./components/TagsGrid";
import { GridColDef } from "@mui/x-data-grid";
import useFetch from "./hooks/useFetch";
import { AxiosError, AxiosResponse } from "axios";
import { stackOverflowConfig } from "./configs/stackOverflowConfig";


interface ITag {
  name: string;
  count: number;
}
export interface IStackoverflowTagsResponse extends AxiosResponse {
  items: ITag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

interface IAppWithDataProps {
  data: IStackoverflowTagsResponse | undefined;
  status: "pending" | "error" | "success" | "loading";
  error: AxiosError | null;
}

export const App: React.FC = () => {
  const { data, status, error } =
    useFetch<IStackoverflowTagsResponse>(stackOverflowConfig);
  return <AppWithData data={data} status={status} error={error} />;
};

export const AppWithData: React.FC<IAppWithDataProps> = ({
  data,
  status,
  error,
}) => {
  const tags = data?.items;

  const tableColumns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 160,
      editable: false,
      sortable: false,
     
    },
    {
      field: "count",
      headerName: "Count",
      width: 160,
      editable: false,
      sortable: false,
    },
  ];

  if (status === "loading") {
    return <h1 className="font-bold">Loading...</h1>;
  }

  if (status === "error") {
    return <h1 className="font-bold">Error: {error?.message}</h1>;
  }

  return (
    <>
      <h1 className="font-bold text-xl py-2 text-center">App</h1>
      <TagsGrid
        columns={tableColumns}
        rows={tags || []}
        getRowId={(row) => row.name}
        initialStateValue={tags || []}
      />
    </>
  );
};
