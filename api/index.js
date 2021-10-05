import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT;
const URI = process.env.URI;

app.get('/:name', async (req, res) => {
  console.log('hit');
  try {
    const attribute = (await axios.get(URI)).data;
    console.log('attribute is:', attribute);

    const { name } = req.params;
    console.log('name is:', name);

    res.send(`Lo and behold ${name}, the ${attribute}!`);
  } catch (e) {
    console.log(e);
    res.send('boo-boo...');
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
