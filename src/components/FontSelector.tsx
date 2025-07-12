import { useEffect, useRef, useState } from "react";
import IconArrowDown from "../assets/images/icon-arrow-down.svg";

export default function FontSelector(props: {
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fonts = [
    {
      label: "Sans Serif",
      value: "font-sans",
    },
    {
      label: "Serif",
      value: "font-serif",
    },
    {
      label: "Mono",
      value: "font-mono",
    },
  ];

  const selectFont = (value: string) => {
    props.setFont(value);
    localStorage.setItem("font", value);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-auto">
      <button
        onClick={() => {
          if (open) return;
          setOpen(true);
        }}
        className=" flex items-center gap-2 text-[14px] font-bold text-primary-light dark:text-primary-dark hover:cursor-pointer"
      >
        {fonts.find((font) => font.value == props.font)?.label}
        <img src={IconArrowDown} alt="icon-arrow-down" />
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="flex flex-col absolute right-0 top-6 py-3 rounded-2xl border border-[#f4f4f4] dark:border-[#1f1f1f] bg-[#ffffff] dark:bg-[#1f1f1f] shadow-2xl dark:shadow-accent z-50 w-[185px]"
        >
          {fonts.map((font, index) => (
            <div
              key={index}
              className="flex px-4 py-2 rounded-sm hover:bg-[#e9e9e9] dark:hover:bg-[#2d2d2d] active:bg-[#e9e9e9] dark:active:bg-[#2d2d2d] hover:cursor-pointer hover:text-accent active:text-accent"
              onClick={() => selectFont(font.value)}
            >
              <span
                className={`text-[15px] md:text-[18px] font-bold  ${
                  font.value == props.font
                    ? "text-accent"
                    : "text-primary-light dark:text-primary-dark"
                }`}
              >
                {font.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
