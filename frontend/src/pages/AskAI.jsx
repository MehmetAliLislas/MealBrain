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
    if (e.key === "Enter" && !loading) {
      e.preventDefault();
      sendChat();
    }
  };

  const examplePrompts = [
    "Meal Brain nedir?",
    "Bana pratik bir yemek öner",
    "Yemek yapmanın püf noktaları",
  ];

  const handleExampleClick = (example) => {
    setPrompt(example);
    sendChat();
  };

  return (
    <div className="bg-main h-screen overflow-hidden">
      <Navbar />
      <div className="p-4">
        <div className="max-w-6xl mx-auto bg-container p-6 rounded-lg shadow-md">
          <div className="overflow-y-auto lg:h-[500px] h-[300px]">
            <div className="opening-message">
              <span class="text-sm text-gray-600 -mb-4">Meal Brain</span>
              <div class="max-w-sm px-4 py-2 rounded-lg bg-[#b14400] opacity-70 hover:opacity-80 text-white duration-300 transition-all">
                Merhaba, size nasıl yardımcı olabilirim?
              </div>
            </div>
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
                    {chat.role === "user" ? "Siz" : "Meal Brain"}
                  </span>
                  <div
                    className={`max-w-sm px-4 py-2 rounded-lg ${
                      chat.role === "user"
                        ? "bg-[#c04a01] opacity-70 hover:opacity-80 text-white duration-300 transition-all mr-4"
                        : "bg-[#b14400] opacity-70 hover:opacity-80 text-white duration-300 transition-all"
                    }`}
                  >
                    <ReactMarkdown>{chat.parts[0].text}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 justify-between items-center border-t mt-4">
            <div className="flex flex-col gap-2">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="block w-full text-left p-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm"
                >
                  {example}
                </button>
              ))}
            </div>
            <div className="flex mt-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  error
                    ? "Lütfen geçerli bir mesaj yazın..."
                    : "Bir şeyler yazın..."
                }
                className={`w-full p-2 rounded-xl border focus:outline-none focus:ring-2 hover:border-amber-500 focus:ring-amber-600 duration-300 transition-all ${
                  error ? "border-red-500 border-2" : ""
                }`}
                disabled={loading}
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
    </div>
  );
}

export default AskAI;
