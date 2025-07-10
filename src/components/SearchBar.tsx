import { useEffect, useRef, useState } from "react";

import IconSearch from "../assets/images/icon-search.svg";
import type { Data } from "../types/Data";
import type { NotFound } from "../types/NotFound";

import ConfusedIcon from "../assets/images/confused-icon.png";

export default function SearchBar(props: {
  search: () => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  // inputError: boolean;
  data: Data[] | null;
  setSelectedData: React.Dispatch<React.SetStateAction<Data | undefined>>;
  searchError: NotFound | null;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const selectWord = (data: Data) => {
    props.setSelectedData(data);
    setMenuOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    setMenuOpen(true);

    const timeout = setTimeout(() => {
      props.search();
    }, 500);

    return () => clearTimeout(timeout);
  }, [props.input]);

  // Close when clicking outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative md:mb-4"
      ref={formRef}
    >
      <input
        type="text"
        className={`w-full bg-[#f4f4f4] dark:bg-[#1f1f1f] border border-[#f4f4f4] dark:border-[#1f1f1f] ${
          props.input && "border-accent dark:border-accent"
        } active:border-accent rounded-2xl h-[48px] md:h-[64px] font-bold text-[16px] md:text-[20px] text-primary-light dark:text-primary-dark placeholder:text-primary-light/25 dark:placeholder:text-[#fff]/25 px-6`}
        defaultValue={""}
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
        placeholder="Search for any word..."
        onClick={() => {
          if (props.input) setMenuOpen(true);
        }}
        onMouseDown={() => {
          if (props.input) setMenuOpen(true);
        }}
      />

      <div className="absolute top-0 right-0 mr-4 md:right-3 h-full flex items-center">
        <img className="w-[15.55px]" src={IconSearch} alt="icon-search" />
      </div>

      {menuOpen && props.input !== "" && (
        <div className="border border-[#f4f4f4] dark:border-[#1f1f1f] absolute top-14 md:top-18 w-full py-4 bg-[#ffffff] dark:bg-[#1f1f1f] rounded-2xl shadow-lg dark:shadow-lg dark:shadow-accent flex flex-col gap-0">
          {props.searchError && (
            <div className="flex flex-col items-center gap-2 px-4 py-1 rounded-lg">
              <img
                className="w-[60px] h-[60px]"
                src={ConfusedIcon}
                alt="confused-icon"
              />
              <div className="flex flex-col gap-2">
                <span className="text-[16px] md:text-[20px] font-bold text-center text-primary-light dark:text-primary-dark">
                  {props.searchError?.title}
                </span>
                <p className="text-[15px] md:text-[18px] text-secondary-light text-center max-w-[425px]">
                  {props.searchError?.message}
                </p>
              </div>
            </div>
          )}

          {props.data &&
            props.data?.map((data: Data, index) => (
              <div
                key={index}
                onClick={() => selectWord(data)}
                className="flex items-center gap-4 hover:bg-[#e9e9e9] dark:hover:bg-[#2d2d2d] active:bg-[#e9e9e9] dark:active:bg-[#2d2d2d] px-4 py-1 rounded-sm hover:cursor-pointer overflow-hidden"
              >
                <span className="text-[16px] md:text-[20px] font-bold text-primary-light dark:text-primary-dark">
                  {data.word}
                </span>
                <p className="text-[15px] md:text-[18px] text-secondary-light whitespace-nowrap">
                  {data.meanings[0].definitions[0].definition}
                </p>
              </div>
            ))}

          {loading && !props.data && !props.searchError && (
            <span className="text-[15px] md:text-[18px] text-secondary-light ml-4">
              Searching...
            </span>
          )}
        </div>
      )}
    </form>
  );
}
