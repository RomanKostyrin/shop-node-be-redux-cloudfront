export default {
  type: "object",
  properties: {
    queryStringParameters: {
      type: "object",
      properties: { filter: { type: "string" } },
      required: ["filter"],
    },
  },
  required: ["queryStringParameters"],
} as const;
