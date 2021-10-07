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

//Forma vieja
app.get("/add", (req, res) => {
  const value1 = parseInt(req.query.value1);
  const value2 = parseInt(req.query.value2);
  const result = value1 + value2;
  res.send(`Result:` + result);
});

app.get("/substract", (req, res) => {
  const value1 = parseInt(req.query.value1);
  const value2 = parseInt(req.query.value2);
  const result = value1 - value2;
  res.send(`Result:`+ result);
});

app.get("/multiply", (req, res) => {
  const value1 = parseInt(req.query.value1);
  const value2 = parseInt(req.query.value2);
  const result = value1 * value2;
  res.send(`Result:` + result);
});

app.get("/divide", (req, res) => {
  const value1 = parseInt(req.query.value1);
  const value2 = parseInt(req.query.value2);
  const result = value1 / value2;
  res.send(`Result:` + result);
});

//Forma nueva
app.get("/addparams/:value1/:value2", (req, res) => {
  const value1 = parseInt(req.params.value1);
  const value2 = parseInt(req.params.value2);
  const result = value1 + value2;
  res.send(`Result:` + result);
});

app.get("/substractparams/:value1/:value2", (req, res) => {
  const value1 = parseInt(req.params.value1);
  const value2 = parseInt(req.params.value2);
  const result = value1 - value2;
  res.send(`Result:`+ result);
});

app.get("/multiplyparams/:value1/:value2", (req, res) => {
  const value1 = parseInt(req.params.value1);
  const value2 = parseInt(req.params.value2);
  const result = value1 * value2;
  res.send(`Result:` + result);
});

app.get("/divideparams/:value1/:value2", (req, res) => {
  const value1 = parseInt(req.params.value1);
  const value2 = parseInt(req.params.value2);
  const result = value1 / value2;
  res.send(`Result:` + result);
});


app.listen(3000, () => console.log("Server is up and running"));
