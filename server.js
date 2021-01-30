const app = require('express')();

app.get('/', (req, res) => res.send('This Bot made By Putra Ravi'));

module.exports = () => {
  app.listen(3000);
}