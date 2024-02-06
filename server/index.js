const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const accessKey = process.env.HELLO_BOY;
  
  res.send(`Server is running. HELLO_BOY: ${accessKey}`);
});


// Start the server on port 5000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
