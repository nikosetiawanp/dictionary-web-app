import "./App.css";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import WordDetails from "./components/WordDetails";

import type { Data } from "./types/Data";
import SearchBar from "./components/SearchBar";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [input, setInput] = useState("");
  const [font, setFont] = useState("font-sans");

  // Get cached font
  useEffect(() => {
    const savedFont = localStorage.getItem("font");
    if (savedFont) setFont(savedFont);
  }, []);

  // Change params when data changes
  useEffect(() => {
    if (data.length === 0) return;

    const word = data[selectedIndex]?.word;
    const params = new URLSearchParams(window.location.search);

    params.set("word", word);
    params.set("index", String(selectedIndex));
    window.history.replaceState({}, "", `?${params}`);
  }, [data, selectedIndex]);

  // Load data if params is present
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const params = new URLSearchParams(window.location.search);
    const savedWord = params.get("word");
    const savedIndex = params.get("index");

    if (savedWord === undefined || savedWord === null) return;
    if (savedIndex) setSelectedIndex(Number(savedIndex));
    if (savedWord) {
      fetch(API_BASE_URL + savedWord)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    }
  }, []);

  return (
    <div
      className={`flex flex-col gap-10 w-screen max-w-[735px] h-full p-6 pb-14 ${font}`}
    >
      {/* Header */}
      <Header font={font} setFont={setFont} />
      {/* Search bar */}
      <SearchBar
        setData={setData}
        setSelectedIndex={setSelectedIndex}
        input={input}
        setInput={setInput}
      />
      {/* Content */}
      {data?.[selectedIndex] ? (
        <WordDetails
          data={data}
          selectedIndex={selectedIndex}
          setInput={setInput}
        />
      ) : (
        <WelcomeMessage />
      )}
    </div>
  );
}

export default App;
