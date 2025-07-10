import IconArrowDown from "../assets/images/icon-arrow-down.svg";

export default function FontSelector() {
  return (
    <button className="ml-auto flex items-center gap-2 text-[14px] font-bold text-primary-light hover:cursor-pointer">
      Serif <img src={IconArrowDown} alt="icon-arrow-down" />
    </button>
  );
}
