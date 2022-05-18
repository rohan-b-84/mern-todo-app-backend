const express = require("express");
const app = express();
const port = 5000;
const connectToMongo = require("./database");
connectToMongo();

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/auth", require("./routes/auth"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
