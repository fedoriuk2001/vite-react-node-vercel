const express = require("express");
const app = express();

const accessKey = process.env.HELLO_BOY;

app.use("/", (req, res) => {
  res.send("Server is runnning. Bla bla bla  ", accessKey);
});

app.listen(5000, () => {
    console.log("Server started on port 5000")
    }    
);
