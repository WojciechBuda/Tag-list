import { Meta, StoryObj } from "@storybook/react";
import { AppWithData, IStackoverflowTagsResponse } from "./App";
import "./index.css";
import { AxiosError, InternalAxiosRequestConfig } from "axios";

const dummyData: IStackoverflowTagsResponse = {
  data: [
    {
      count: 360307,
      name: "json",
    },
    {
      count: 343580,
      name: "python-3.x",
    },
    {
      count: 338044,
      name: "ruby-on-rails",
    },
    {
      count: 337833,
      name: ".net",
    },
    {
      count: 334497,
      name: "sql-server",
    },
  ],
  items: [
    {
      count: 360307,
      name: "json",
    },
    {
      count: 343580,
      name: "python-3.x",
    },
    {
      count: 338044,
      name: "ruby-on-rails",
    },
    {
      count: 337833,
      name: ".net",
    },
    {
      count: 334497,
      name: "sql-server",
    },
  ],
  has_more: false,
  quota_max: 300,
  quota_remaining: 295,
  status: 200,
  statusText: "OK",
  headers: {},
  config: {
    headers: {},
  } as InternalAxiosRequestConfig<unknown>,
};

const meta: Meta<typeof AppWithData> = {
  title: "Components/App",
  component: AppWithData,
  argTypes: {
    status: {
      options: ["error", "success", "loading"],
      control: {
        type: "radio",
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { status: "success", data: dummyData },
};

export const Loading: Story = {
  args: { status: "loading" },
};

export const Error: Story = {
  args: {
    status: "error",
    error: {
      isAxiosError: true,
      toJSON: () => ({}),
      name: "AxiosError",
      message: "An error occurred while fetching data.",
    } as AxiosError,
  },
};

export default meta;
