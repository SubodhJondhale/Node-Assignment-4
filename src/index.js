const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "Hello world!" });
});

app.post("/add", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const sum = num1 + num2;
  if (sum < -1000000 || sum > 1000000) {
    res.json({ status: "overflow", message: "Overflow", result: sum });
  } else if (
    num1 < -1000000 ||
    num2 < -1000000 ||
    num1 > 1000000 ||
    num2 > 1000000
  ) {
    res.json({ status: "underflow", message: "Underflow", result: sum });
  } else {
    res.json({
      status: "success",
      message: `The sum of ${num1} and ${num2} is`,
      result: sum,
    });
  }
});

app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const difference = num1 - num2;
  if (difference < -1000000 || difference > 1000000) {
    res.json({ status: "overflow", message: "Overflow", result: difference });
  } else if (
    num1 < -1000000 ||
    num2 < -1000000 ||
    num1 > 1000000 ||
    num2 > 1000000
  ) {
    res.json({ status: "underflow", message: "Underflow", result: difference });
  } else {
    res.json({
      status: "success",
      message: `The difference between ${num1} and ${num2} is`,
      result: difference,
    });
  }
});

app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const product = num1 * num2;
  if (product < -1000000 || product > 1000000) {
    res.json({ status: "overflow", message: "Overflow", result: product });
  } else if (
    num1 < -1000000 ||
    num2 < -1000000 ||
    num1 > 1000000 ||
    num2 > 1000000
  ) {
    res.json({ status: "underflow", message: "Underflow", result: product });
  } else {
    res.json({
      status: "success",
      message: `The product of ${num1} and ${num2} is`,
      result: product,
    });
  }
} );
app.post('/divide', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (num2 === 0) {
    res.json({ status: 'error', message: 'Cannot divide by zero' });
  } else {
    const quotient = num1 / num2;
    if (quotient < -1000000 || quotient > 1000000) {
      res.json({ status: 'overflow', message: 'Overflow', result: quotient });
    } else if (num1 < -1000000 || num2 < -1000000 || num1 > 1000000 || num2 > 1000000) {
      res.json({ status: 'underflow', message: 'Underflow', result: quotient });
    } else {
      res.json({ status: 'success', message: `The quotient of ${num1} and ${num2} is`, result: quotient });
    }
  }
});

app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`);
});


// app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app;