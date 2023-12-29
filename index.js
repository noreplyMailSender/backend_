const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: 'https://tool-sphere.github.io/',
  optionsSuccessStatus: 200,
};
app.get("*", (req, res) => {
  res.send('Request Origin:', req.get('Origin'));
//  next();
});
/*app.use(cors(corsOptions));
//app configuration 
app.get("*", async(req, res) => {
res.send("Hii");
});*/
//endd
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

