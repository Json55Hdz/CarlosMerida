const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port, () => {
    console.log(`escuchando puerto: ${port}`);
});