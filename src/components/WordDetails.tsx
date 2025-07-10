import IconPlay from "../assets/images/icon-play.svg";
import type { Data } from "../types/Data";
import HorizontalLine from "./HorizontalLine";

export default function WordDetails(props: { selectedData: null | Data }) {
  return (
    // Content
    <div className="flex flex-col gap-10 ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-0 md:gap-4">
          <h1 className="text-[32px] md:text-[64px] text-heading-large text-primary-light">
            {props.selectedData?.word}
            {/* {props.data && props.data[0].word} */}
          </h1>
          <h2 className="text-body-medium md:text-[24px] text-accent">
            {props.selectedData?.phonetic}
            {/* {props.data && props.data[0].phonetic} */}
          </h2>
        </div>
        <button className="bg-accent/20 flex justify-center items-center rounded-full w-[75px] h-[75px] hover:cursor-pointer">
          <img src={IconPlay} alt="icon-play" />
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full">
        <h3 className="font-bold text-[18px] md:text-[24px] italic md:not-italic text-primary-light">
          noun
        </h3>
        <HorizontalLine />
      </div>

      {/* Noun */}
      <div className="flex flex-col gap-6">
        <h4 className="text-[16px] md:text-[20px] text-secondary-light">
          Meaning
        </h4>
        <ul className="flex flex-col gap-2 list-disc pl-10 marker:text-accent">
          <li className="text-[15px] md:text-[18px] leading-[24px] text-primary-light pl-4">
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li className="text-[15px] md:text-[18px] leading-[24px] text-primary-light pl-4">
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li className="text-[15px] md:text-[18px] leading-[24px] text-primary-light pl-4">
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
      </div>
      {/* Synonyms */}
      <div className="flex items-center gap-10">
        <h4 className="text-[16px] md:text-[20px] text-secondary-light">
          Synonyms
        </h4>
        <span className="text-[16px] md:text-[20px] font-bold text-accent">
          electronic keyboard
        </span>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full">
        <h3 className="font-bold text-[18px] md:text-[24px] italic md:not-italic text-primary-light">
          verb
        </h3>
        <HorizontalLine />
      </div>

      {/* Verb */}
      <div className="flex flex-col gap-6">
        <h4 className="text-[16px] md:text-[20px] text-secondary-light">
          Meaning
        </h4>
        <ul className="flex flex-col gap-2 list-disc pl-10 marker:text-accent">
          <li className="text-[15px] md:text-[18px] leading-[24px] text-primary-light pl-4">
            To type on a computer keyboard.
          </li>
          <span className="ml-4 text-[15px] md:text-[18px] leading-[24px] text-secondary-light">
            “Keyboarding is the part of this job I hate the most.”
          </span>
        </ul>
      </div>

      <HorizontalLine />

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
  );
}
