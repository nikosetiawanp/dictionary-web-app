import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
import WordDetails from "./components/WordDetails";

import type { Data } from "./types/Data";
import SearchBar from "./components/SearchBar";

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    // Container
    <div className="flex flex-col gap-10 w-screen max-w-[735px] h-full p-6 pb-14">
      {/* Header */}
      <Header />
      {/* Search bar */}
      <SearchBar setData={setData} setSelectedIndex={setSelectedIndex} />
      {/* Content */}
      {data.length > 0 && (
        <WordDetails data={data} selectedIndex={selectedIndex} />
      )}
    </div>
  );
}

export default App;
