const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Server is runnning.");
  res.send("My password: ", process.env.HELLO_BOY); 
});

app.listen(5000, () => {
    console.log("Server started on port 5000")
    }    
);
