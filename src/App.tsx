import "./App.css";

import IconSearch from "./assets/images/icon-search.svg";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import NotFoundMessage from "./components/NotFoundMessage";
import type { NotFound } from "./types/NotFound";
import type { Data } from "./types/Data";
import WordDetails from "./components/WordDetails";

function App() {
  const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(true);

  const [data, setData] = useState<null | Data[]>(null);
  const [error, setError] = useState<null | NotFound>(null);

  const search = () => {
    if (!input) {
      setInputError(true);
      return;
    }

    fetch(API_BASE_URL + input)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (Array.isArray(result)) {
          setData(result);
          setError(null);
        } else {
          setData(null);
          setError(result);
        }
      });
  };

  useEffect(() => {
    setInputError(false);
  }, [input]);

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    // Container
    <div className="flex flex-col gap-6 w-screen max-w-[735px] h-full">
      {/* Navbar */}
      <Header />

      {/* Search bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
        className="relative md:mb-4"
      >
        <input
          type="text"
          className={`${
            inputError ? "border-error" : "border-[#f4f4f4]"
          } w-full bg-[#f4f4f4] border active:border-accent rounded-2xl h-[48px] md:h-[64px] font-bold text-[16px] md:text-[20px] placeholder:text-primary-light/25 px-6`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for any word..."
        />
        {inputError && (
          <span className="text-error text-[16px] md:text-[20px] absolute left-0 -bottom-6 md:-bottom-7">
            Whoops, can’t be empty…
          </span>
        )}

        <div className="absolute top-0 right-0 md:right-3 h-full flex items-center">
          <button
            onClick={() => search()}
            className="hover:bg-accent/10 active:bg-accent/20 top-0 flex justify-center items-center p-3 rounded-full hover:cursor-pointer"
          >
            <img className="w-[15.55px]" src={IconSearch} alt="icon-search" />
          </button>
        </div>
      </form>
      {/* Content */}
      {/* <WordDefinition /> */}

      {error && <NotFoundMessage error={error} />}
      {data && <WordDetails data={data} />}
    </div>
  );
}

export default App;
