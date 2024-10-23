const express = require("express");
const connectionDB = require("./db/connectionDB");
const commonRoute = require("./routes/commonRoute");
const productRoute = require("./routes/productRoute");
const cors = require("cors");
const path = require("path")

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads" , express.static(path.join(__dirname , "uploads")))

app.get("/", (_, res) => {
  res.send("home page");
});

app.use("/signUp", commonRoute);
app.use("/login", commonRoute);
app.use("/product", productRoute);

app.listen(8000, () => {
  connectionDB();
  console.log("Server is running on port 8000");
});
