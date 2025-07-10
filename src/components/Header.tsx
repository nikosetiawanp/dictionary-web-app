import Logo from "../assets/images/logo.svg";
import FontSelector from "./FontSelector";
import ToggleThemeSwitch from "./ToggleThemeSwitch";
import VerticalLine from "./VerticalLine";

export default function Header() {
  return (
    <div className="flex items-center gap-4 h-[32px]">
      <img src={Logo} alt="logo" className="h-[32px] w-auto" />
      {/* Font select */}
      <FontSelector />
      {/* Vertical line */}
      <VerticalLine />
      {/* Toggle switch */}
      <ToggleThemeSwitch />
    </div>
  );
}
