import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post('/gemini', async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
        history: req.body.history,
    });

    try {
        const result = await chat.sendMessage(req.body.prompt);
        const response = await result.response;

        // Yanıtın text fonksiyonunu bekle (await)
        const text = await response.text();  // async olarak çözüm

        console.log("Model Yanıtı:", text);

        res.json({ text });
    } catch (error) {
        console.error("Hata:", error);
        res.status(500).json({ error: "Bir hata oluştu." });
    }
});

app.listen(8080, () => {
    console.log("Server 8080 portunda çalışıyor...");
});
