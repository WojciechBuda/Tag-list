import { Meta, StoryObj } from "@storybook/react";
import TagsGrid from "./TagsGrid";
import { GridColDef } from "@mui/x-data-grid";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
// initial data
const dummyData = [
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 360307,
    name: "json",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 343580,
    name: "python-3.x",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 338044,
    name: "ruby-on-rails",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 337833,
    name: ".net",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 334497,
    name: "sql-server",
  },
];

const meta: Meta<typeof TagsGrid> = {
  title: "Components/Tags Grid",
  component: TagsGrid,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: tableColumns,
    rows: dummyData,
    getRowId: (row) => row.name,
    initialStateValue: dummyData,
  },
};

export default meta;

//tests

Default.play = async ({ canvasElement, step }) => {
  const tags = await within(canvasElement);

  await step("Grid renders correctly", async () => {
    const grid = await tags.findByRole("grid");
    await expect(grid).toBeInTheDocument();
  });

  await step("Headers are displayed", async () => {
    const headers = await tags.findAllByText(/Name|Count/);
    await expect(headers).toHaveLength(2);
  });
};
