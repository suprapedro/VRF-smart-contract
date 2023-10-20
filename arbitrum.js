import https from "https";
const projectId = process.env.INFURA_API_KEY;
const data = JSON.stringify({
  jsonrpc: "2.0",
  method: "eth_getTransactionByHash",
  params: ["0xd5fd8f137d718a1eb386e8c854c27612690548bb"],
  id: 1,
});
const options = {
  host: "arbitrum-goerli.infura.io",
  port: 443,
  path: "/v3/" + projectId,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(data);
req.end();