import FontSelector from "./FontSelector";
import ToggleThemeSwitch from "./ToggleThemeSwitch";
import VerticalLine from "./VerticalLine";

export default function Header(props: {
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex items-center gap-4 h-[32px]">
      {/* <img src={Logo} alt="logo" className="h-[32px] w-auto" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="38"
        viewBox="0 0 34 38"
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="#757575"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
          <path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8" />
          <path d="M11 9h12" />
        </g>
      </svg>
      {/* Font select */}
      <FontSelector font={props.font} setFont={props.setFont} />
      {/* Vertical line */}
      <VerticalLine />
      {/* Toggle switch */}
      <ToggleThemeSwitch />
    </div>
  );
}
