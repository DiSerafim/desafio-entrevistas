const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));

const dbo = require('./db/conn');
 
app.listen(port, () => {
  // conecta ao banco de dados quando o servidor iniciar
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
