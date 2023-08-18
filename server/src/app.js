import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use("/api", router)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}...`);
})