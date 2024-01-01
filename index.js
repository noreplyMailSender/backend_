const express = require('express');
const cors = require('cors');
const Gradio = require("cjs gradio client.js");
const app = express();
const corsOptions = {
  origin: 'https://tool-sphere.github.io',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.get("/", async(req, res) => {
res.send("Nothing To See here 👨🏻‍💻");
});
app.get("/api/code-gen", async(req, res) => {
var query = req.query.q;
  if(!query || query.trim() === ""){
return res.json({success: false, msg: "missing query"});
  }
});


app.get("*", async(req, res) => {
res.send("Hii whats up! ");
});
//endd
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

