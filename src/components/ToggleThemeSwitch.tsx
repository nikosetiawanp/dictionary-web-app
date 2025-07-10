import IconMoon from "../assets/images/icon-moon.svg";

export default function ToggleThemeSwitch() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center p-[3px] rounded-full bg-secondary-light w-[40px] h-[20px]">
        <div className="w-[14px] h-[14px] bg-[#ffffff] rounded-full"></div>
      </div>
      <img src={IconMoon} alt="icon-moon" />
    </div>
  );
}
