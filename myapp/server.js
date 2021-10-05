const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);

app.get("/add", (req, res) => {
  const value1 = parseInt(req.params.value1);
  const value2 = parseInt(req.params.value2);
  const result = value1 + value2;
  res.send(`Result:` + result);
});

app.get("/addparams/:value1/:value2", (req, res) => {
  const value1 = parseInt(req.params.value1);
  const value2 = parseInt(req.params.value2);
  const result = value1 + value2;
  res.send(`Result:` + result);
});

app.get("/substract", (req, res) => {
  const value1 = parseInt(req.params.value1);
  const value2 = parseInt(req.params.value2);
  const result = value1 - value2;
  res.send(`Result:`+ result);
});

app.get("/multiply", (req, res) => {
  const value1 = parseInt(req.params.value1);
  const value2 = parseInt(req.params.value2);
  const result = value1 * value2;
  res.send(`Result:` + result);
});

app.get("/divide", (req, res) => {
  const value1 = parseInt(req.params.value1);
  const value2 = parseInt(req.params.value2);
  const result = value1 / value2;
  res.send(`Result:` + result);
});

app.listen(3000, () => console.log("Server is up and running"));
