import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
} from "@tanstack/react-query";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface IResponse<T> {
  data: T | undefined;
  status: "pending" | "error" | "success" | "loading";
  error: AxiosError | null;
  refetch: (options?: RefetchOptions | undefined) => Promise<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    QueryObserverResult<T | undefined, AxiosError<unknown, any> | null>
  >;
  isStale: boolean;
}
interface IData {
  config: AxiosRequestConfig;
  key: (string | number)[];
  staleTime: number;
  enabled?: boolean;
}

const useFetch = <T extends AxiosResponse>({
  config,
  key,
  staleTime = 0,
  enabled = false,
}: IData): IResponse<T> => {
  const queryFunction = async (): Promise<IResponse<T>> => {
    return await axios(config).then((res) => res.data);
  };

  const { data, status, error, refetch, isStale }: IResponse<T> = useQuery({
    queryKey: key,
    queryFn: queryFunction,
    staleTime: staleTime,
    enabled: enabled,
  });

  return { data, status, error, refetch, isStale };
};

export default useFetch;
