import { useEffect, useState } from "react";
import "./App.css";

import Logo from "./assets/images/logo.svg";
import IconArrowDown from "./assets/images/icon-arrow-down.svg";
import IconMoon from "./assets/images/icon-moon.svg";
import IconSearch from "./assets/images/icon-search.svg";
import IconPlay from "./assets/images/icon-play.svg";

function App() {
  function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
      document.documentElement.classList.toggle("dark", dark);
    }, [dark]);
  }

  return (
    // Container
    <div className="flex flex-col gap-6 w-full max-w-[735px] h-full">
      {/* Navbar */}
      <div className="flex items-center gap-4 h-[32px]">
        <img src={Logo} alt="logo" className="h-[32px] w-auto" />
        {/* Font select */}
        <button className="ml-auto flex items-center gap-2 text-[14px] font-bold text-primary-light hover:cursor-pointer">
          Serif <img src={IconArrowDown} alt="icon-arrow-down" />
        </button>
        {/* Vertical line */}
        <div className="flex w-[0.5px] h-full border border-border-light bg-border-light"></div>
        {/* Toggle switch */}
        <div className="flex items-center p-1 rounded-full bg-secondary-light w-[40px] h-[20px]">
          <div className="w-[14px] h-[14px] bg-[#FFF] rounded-full"></div>
        </div>
        <img src={IconMoon} alt="icon-moon" />
      </div>

      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          className="w-full bg-[#f4f4f4] border border-[#f4f4f4] active:border-accent rounded-2xl h-[48px] font-bold text-[16px] md:text-[20px] placeholder:text-primary-light/25 px-6"
          placeholder="Search for any word..."
        />
        <img
          className="absolute right-4 top-1/3 w-[15.55px]"
          src={IconSearch}
          alt="icon-search"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-heading-large text-primary-light">keyboard</h1>
            <h2 className="text-heading-medium text-accent">/ˈkiːbɔːd/</h2>
          </div>
          <button className="bg-accent/20 flex justify-center items-center rounded-full w-[75px] h-[75px] hover:cursor-pointer">
            <img src={IconPlay} alt="icon-play" />
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full">
          <h3 className="text-heading-medium text-primary-light">noun</h3>
          <hr className="h-[1px] border-[#e9e9e9] w-full" />
        </div>

        {/* Noun */}
        <div className="flex flex-col gap-6">
          <h4 className="text-heading-small text-secondary-light">Meaning</h4>
          <ul className="flex flex-col gap-2 list-disc pl-10 marker:text-accent">
            <li className="text-body-medium text-primary-light pl-4">
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li className="text-body-medium text-primary-light pl-4">
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li className="text-body-medium text-primary-light pl-4">
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
        </div>
        {/* Synonyms */}
        <div className="flex items-center gap-10">
          <h4 className="text-heading-small text-secondary-light">Synonyms</h4>
          <span className="text-[16px] md:text-[20px] font-bold text-accent">
            electronic keyboard
          </span>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full">
          <h3 className="text-heading-medium text-primary-light">verb</h3>
          <hr className="h-[1px] border-[#e9e9e9] w-full" />
        </div>

        {/* Verb */}
        <div className="flex flex-col gap-6">
          <h4 className="text-heading-small text-secondary-light">Meaning</h4>
          <ul className="flex flex-col gap-2 list-disc pl-10 marker:text-accent">
            <li className="text-body-medium text-primary-light pl-4">
              To type on a computer keyboard.
            </li>
            <span className="ml-4 text-body-medium text-secondary-light">
              “Keyboarding is the part of this job I hate the most.”
            </span>
          </ul>
        </div>

        <hr className="h-[1px] border-[#e9e9e9] w-full" />

        <div className="flex items-center gap-8">
          <span className="text-body-small text-secondary-light">Source</span>
          <a
            className="text-body-small text-primary-light"
            href="https://en.wiktionary.org/wiki/keyboard"
          >
            https://en.wiktionary.org/wiki/keyboard
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
