let express = require('express');
let cors = require('cors');

let app = express();
let port = 3000;

//Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Stock portfolio analysis API!');
});

//Endpoint 1
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  let returns = (marketPrice - boughtAt) * quantity;

  res.send(returns.toString());
});

//Endpoint 2
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturns = stock1 + stock2 + stock3 + stock4;

  res.send(totalReturns.toString());
});

//Endpoint 3
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

//Endpoint 4
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
});

//Endpoint 5
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  if (returnPercentage > 0) {
    res.send('Profit');
  } else {
    res.send('Loss');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
