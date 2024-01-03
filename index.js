const express = require('express');
const cors = require('cors');
const Gradio = require("./cjs gradio client.js");
const translator = require("./translate/index.js");
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

	const app = await Gradio.client("https://crystal99-replit-3b-ggml-models.hf.space/");
	const result = await app.predict("/predict", [		
				query, // string  in 'user_prompt' Textbox component
	]);

	console.log(result?.data);
 await res.json({result});
});


app.get("*", async(req, res) => {
res.send("Hii whats up! ");
});
//endd
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

