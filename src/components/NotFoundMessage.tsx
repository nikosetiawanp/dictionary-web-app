import ConfusedIcon from "../assets/images/confused-icon.png";
// import type { NotFound } from "../types/NotFound";

export default function NotFoundMessage() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <img
          className="w-[64px] h-[64px]"
          src={ConfusedIcon}
          alt="confused-icon"
        />
        <h2 className="text-[16px] md:text-[20px] text-primary-light font-bold">
          {/* {props.searchError?.title} */}
          No Definitions Found
        </h2>
        <p className="text-[15px] md:text-[18px] text-secondary-light text-center">
          {/* {props.searchError?.message} {props.searchError?.resolution} */}
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
}
