const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./storage/config/db");
const videoRoutes = require("./router/videoRoutes");

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/uploads", express.static("uploads"));


app.use("/api/videos", videoRoutes);





const PORT = process.env.PORT || 4444;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
