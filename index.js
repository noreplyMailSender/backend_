const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: 'https://tool-sphere.github.io/',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//app configuration 

//endd
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

