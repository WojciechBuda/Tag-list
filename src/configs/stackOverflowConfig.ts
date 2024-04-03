export const stackOverflowConfig = {
  config: {
    method: "get",
    url: `https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow`,
  },
  key: ["tags"],
  staleTime: 1000 * 60 * 100,
  enabled: true,
};
