import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // if Node < 18
import dotenv from "dotenv";
import { API_CONFIG, getApiNinjasHeaders } from './config/api.js';

dotenv.config();
const app = express();
app.use(express.json());

const allowedOrigins = process.env.NODE_ENV === "production"
    ? ["https://ujjwala-school-academy.vercel.app"]
    : ["http://localhost:5173"];

app.use(cors({
    origin: allowedOrigins
}));



app.post("/api/fun", async (req, res) => {
    try{
        const response = await fetch(`${API_CONFIG.API_NINJAS.BASE_URL}${API_CONFIG.API_NINJAS.ENDPOINTS.FACTS}`, {
                headers: getApiNinjasHeaders()
              });

    const data = await response.json();  // Gemini's JSON response
    res.json(data);  // ✅ send it back to the frontend
    }
    catch(e){
         res.status(500).json({ error: "Something went wrong" });
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));



