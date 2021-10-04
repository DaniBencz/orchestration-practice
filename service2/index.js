import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  const attributes = ['mighty', 'fearless', 'invincible', 'great'];
  const attribute = attributes[Math.floor(Math.random() * attributes.length)];
  res.send(attribute);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
