import express, { urlencoded } from "express";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true}));
app.get("/", (req, res) => {
  res.send({
    name: "Bhawishya",
  });
});
app.post("/kuku", (req, res) => {
 console.log(req.body)
 res.send("ok")
});
app.listen(8000);
