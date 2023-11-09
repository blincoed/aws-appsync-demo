export function request() {
  return {
    version: "2018-05-29",
    method: "GET",
    params: {
      headers: { "Content-Type": "application/json" },
    },
    resourcePath: "/api/v4/public/causes2/dca235f9a32c43ada54cd10baf1c2a82",
  };
}

export function response(ctx) {
  const result = JSON.parse(ctx.result.body);
  console.log("RESPONSE", result.data);
  return result.data;
}
