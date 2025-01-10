import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ReactMarkdown from "react-markdown";

function AskAI() {
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const backendURL = "http://localhost:8080/gemini";

  const sendChat = async () => {
    if (!prompt.trim()) {
      setError(true);
      return;
    }

    setError(false);

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
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendChat();
    }
  };

  return (
    <div className="bg-main h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow p-4">
        <div className="max-w-6xl mx-auto bg-container p-6 rounded-lg shadow-md lg:mt-12">
          <div className="space-y-4 overflow-y-auto h-[550px]">
            {history.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className={`text-sm ${
                      chat.role === "user"
                        ? "text-gray-600 text-2xl"
                        : "text-gray-600 text-2xl"
                    }`}
                  >
                    {chat.role === "user" ? "Siz" : "MealBrain"}
                  </span>
                  <div
                    className={`max-w-sm px-4 py-2 rounded-lg ${
                      chat.role === "user"
                        ? "bg-[#c04a01] opacity-70 hover:opacity-90 text-white duration-300 transition-all mr-4"
                        : "bg-[#502002] opacity-70 hover:opacity-90 text-white duration-300 transition-all"
                    }`}
                  >
                    <ReactMarkdown>{chat.parts[0].text}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 flex justify-between items-center border-t mt-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Bir şeyler yazın..."
              className={`w-full p-2 rounded-xl border focus:outline-none focus:ring-2 hover:border-amber-500 focus:ring-amber-600 duration-300 transition-all ${
                error ? "border-red-500" : ""
              }`}
            />
            <button
              onClick={sendChat}
              disabled={loading}
              className="ml-4 group flex gap-1 justify-center items-center rounded-full bg-amber-800 text-lg text-white px-6 py-2 hover:bg-amber-900 transition-transform duration-300 ease-linear shadow-md opacity-60 hover:opacity-100 transform"
            >
              <img
                src="/assets/ai.svg"
                alt="Logo"
                className="w-6 h-6 mr-2 fill-white transition-transform duration-500 group-hover:rotate-180"
              />
              {loading ? "Yükleniyor..." : "Gönder"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskAI;
