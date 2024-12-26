import express from 'express';

const app = express();

app.get('/', (req, res) => {
  if (req.headers["key"] == "05418ce03a5658d4c3379c6f8983d55243a4fa7b750a8377f1903d4223922515") {
    res.status(200);
    res.end();
  }
  else if (req.headers["key"] == undefined) {
    console.log("bystander")
    res.send("shart");
  }
  else {
    console.log("someone put incorrect key")
    res.status(418);
    res.end();
  }
});

app.listen(3000, () => {
  console.log('Express server initialized');
});
