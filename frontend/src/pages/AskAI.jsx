import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";

function AskAI() {
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const backendURL = "http://localhost:8080/gemini";

  const sendChat = async () => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({ history, prompt }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(backendURL, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("API error: " + data.error);
      }

      setHistory((oldHistory) => [
        ...oldHistory,
        {
          role: "user",
          parts: [{ text: prompt }],
        },
        {
          role: "model",
          parts: [{ text: data.text }],
        },
      ]);

      setPrompt("");
      setLoading(false);
    } catch (error) {
      console.error("Hata:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Bir şeyler yazın..."
      />
      <button onClick={sendChat} disabled={loading}>
        {loading ? "Yükleniyor..." : "Gönder"}
      </button>

      {history.map((chat, index) => (
        <div key={index}>
          <h3>{chat.role === "user" ? "Siz" : "MealBrain"}</h3>
          <p>{chat.parts[0].text}</p>
        </div>
      ))}
    </>
  );
}

export default AskAI;
