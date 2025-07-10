import { useEffect, useState } from "react";

import IconSearch from "../assets/images/icon-search.svg";
import type { Data } from "../types/Data";
import type { NotFound } from "../types/NotFound";

import ConfusedIcon from "../assets/images/confused-icon.png";

export default function SearchBar(props: {
  search: () => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputError: boolean;
  data: Data[] | null;
  setSelectedData: React.Dispatch<React.SetStateAction<Data | undefined>>;
  searchError: NotFound | null;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const selectWord = (data: Data) => {
    props.setSelectedData(data);
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(true);
  }, [props.data, props.searchError]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (props.input) props.search();
    }, 500);

    return () => clearTimeout(timeout);
  }, [props.input]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.search();
      }}
      className="relative md:mb-4"
    >
      <input
        type="text"
        className={`${
          props.inputError ? "border-error" : "border-[#f4f4f4]"
        } w-full bg-[#f4f4f4] border active:border-accent rounded-2xl h-[48px] md:h-[64px] font-bold text-[16px] md:text-[20px] placeholder:text-primary-light/25 px-6`}
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
        placeholder="Search for any word..."
      />
      {props.inputError && (
        <span className="text-error text-[16px] md:text-[20px] absolute left-0 -bottom-6 md:-bottom-7">
          Whoops, can’t be empty…
        </span>
      )}

      <div className="absolute top-0 right-0 md:right-3 h-full flex items-center">
        <button
          onClick={() => props.search()}
          className="hover:bg-accent/10 active:bg-accent/20 top-0 flex justify-center items-center p-3 rounded-full hover:cursor-pointer"
        >
          <img className="w-[15.55px]" src={IconSearch} alt="icon-search" />
        </button>
      </div>

      {menuOpen && (
        <div className="border border-[#f4f4f4] absolute top-12 md:top-16 w-full p-4 bg-[#ffffff] rounded-2xl shadow-lg flex flex-col gap-0">
          {props.searchError ? (
            <div
              onClick={() => {}}
              className="flex flex-col items-center gap-2 hover:bg-[#e9e9e9] px-4 py-1 rounded-lg"
            >
              <img
                className="w-[60px] h-[60px]"
                src={ConfusedIcon}
                alt="confused-icon"
              />
              <div className="flex flex-col gap-2">
                <span className="text-[16px] md:text-[20px] font-bold text-center">
                  {props.searchError?.title}
                </span>
                <p className="text-[15px] md:text-[18px] text-secondary-light text-center max-w-[425px]">
                  {props.searchError?.message}
                </p>
              </div>
            </div>
          ) : (
            props.data?.map((data: Data, index) => (
              <div
                key={index}
                onClick={() => selectWord(data)}
                className="flex items-center gap-4 hover:bg-[#e9e9e9] px-4 py-1 rounded-lg hover:cursor-pointer overflow-hidden"
              >
                <span className="text-[16px] md:text-[20px] font-bold">
                  {data.word}
                </span>
                <p className="text-[15px] md:text-[18px] text-secondary-light whitespace-nowrap">
                  {data.meanings[0].definitions[0].definition}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </form>
  );
}
