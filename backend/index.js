require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser")
const cors=require("cors")
const PositionModel = require("./model/PositionModel")
const HoldingModel = require("./model/HoldingsModels")
const OrderModel = require("./model/OrderModel")
const { Signup } = require("./Controllers/AuthController");
const { checkAuth } = require("./Controllers/CheckAuth");
const cookieParser = require("cookie-parser");


const app = express();

app.use(cors({
  origin: "http://localhost:3000", // frontend port
  credentials: true
}));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.json());

app.get("/check-auth", checkAuth);


app.get("/allHoldings",async(req,res)=>{
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings)
})

app.get("/allPositions",async(req,res)=>{
  let allPositions = await PositionModel.find({});
  res.json(allPositions)
})

app.post("/newOrder",async (req,res)=>{
     let newOrder=new OrderModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
     });
     newOrder.save();
     res.send("order saved")
})

app.post("/signup", Signup)

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

async function startServer() {
  try {
    await mongoose.connect(MONGO_URL, {
      serverSelectionTimeoutMS: 5000,
      dbName: "zerodha",
    });

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });

  } catch (error) {
    console.error("MongoDB Connection Failed:");
    console.error(error.message);
    process.exit(1);
  }
}

startServer();
