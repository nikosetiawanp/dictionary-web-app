import "./App.css";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import WordDetails from "./components/WordDetails";

import type { Data } from "./types/Data";
import SearchBar from "./components/SearchBar";

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [input, setInput] = useState("");
  const [font, setFont] = useState("font-sans");

  useEffect(() => {
    const savedFont = localStorage.getItem("font");
    if (savedFont) setFont(savedFont);
  }, []);

  return (
    // Container
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
      {data.length > 0 && (
        <WordDetails
          data={data}
          selectedIndex={selectedIndex}
          setInput={setInput}
        />
      )}
    </div>
  );
}

export default App;
