import express from "express";
import getData from "./controllers/getData";

const app = express();
const port = 3000;

app.get("/", getData);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
