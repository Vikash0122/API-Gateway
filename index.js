const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(morgan("combined"));
app.use(
  "/bookingservice",
  createProxyMiddleware({ target: "http://localhost:3002", changeOrigin: true })
);

app.get("/home", (req, res) => {
  return res.json({ message: "OK" });
});

app.listen(3005, () => {
  console.log("app started at 3005");
});
