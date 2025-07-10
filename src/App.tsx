import "./App.css";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import WordDetails from "./components/WordDetails";
import SearchBar from "./components/SearchBar";

import type { NotFound } from "./types/NotFound";
import type { Data } from "./types/Data";

function App() {
  const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [input, setInput] = useState("");

  const [data, setData] = useState<null | Data[]>(null);
  const [searchError, setSearchError] = useState<null | NotFound>(null);

  const [selectedData, setSelectedData] = useState<Data>();
  const search = () => {
    if (!input) return;

    setSearchError(null);
    setData(null);

    fetch(API_BASE_URL + input)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (Array.isArray(result)) {
          setData(result);
          setSearchError(null);
        } else {
          setData(null);
          setSearchError(result);
        }
      });
  };

  useEffect(() => {
    if (input == "") {
      setData(null);
      setSearchError(null);
    }
  }, [input]);

  return (
    // Container
    <div className="flex flex-col gap-6 w-screen max-w-[735px] h-full p-6 pb-24">
      {/* Header */}
      <Header />
      {/* Search bar */}
      <SearchBar
        search={search}
        input={input}
        setInput={setInput}
        data={data}
        setSelectedData={setSelectedData}
        searchError={searchError}
      />
      {/* Content */}
      {selectedData && <WordDetails selectedData={selectedData} />}
    </div>
  );
}

export default App;
