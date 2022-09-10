import express,{urlencoded}  from "express";
import cors from "cors"
const app=express()
import multer from "multer"
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
app.use("/image",express.static ("image"))
app.get("/",(req,res)=>
{
  res.send("working")
})
let b;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,uniqueSuffix+""+file.originalname )
    b=uniqueSuffix+""+file.originalname;
  }
})

const upload = multer({ storage: storage })
app.post("/kuku",upload.single('values'),(req,res)=>
{
  res.send(b)
})
app.listen(8000)