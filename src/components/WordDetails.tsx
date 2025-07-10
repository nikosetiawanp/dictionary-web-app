import IconPlay from "../assets/images/icon-play.svg";
import type { Data, Definition, Meaning } from "../types/Data";
import HorizontalLine from "./HorizontalLine";

export default function WordDetails(props: { selectedData: null | Data }) {
  const audio =
    props.selectedData &&
    props.selectedData.phonetics
      .map((phonetic) => phonetic.audio)
      .find((audio) => audio.length !== 0);

  const playAudio = () => {
    if (!audio) return;
    new Audio(audio).play();
  };

  return (
    // Content
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-0 md:gap-4">
          <h1 className="text-[32px] md:text-[64px] text-heading-large text-primary-light dark:text-primary-dark">
            {props.selectedData?.word}
          </h1>
          <h2 className="text-body-medium md:text-[24px] text-accent">
            {props.selectedData?.phonetic}
          </h2>
        </div>
        <button
          className="bg-accent/20 active:bg-accent/40 flex justify-center items-center rounded-full w-[75px] h-[75px] hover:cursor-pointer"
          onClick={playAudio}
        >
          <img src={IconPlay} alt="icon-play" />
        </button>
      </div>

      {props.selectedData?.meanings?.map((meaning: Meaning, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="flex items-center gap-4 w-full">
            <h3 className="font-bold text-[18px] md:text-[24px] italic md:not-italic text-primary-light dark:text-primary-dark text-nowrap">
              {meaning.partOfSpeech}
            </h3>
            <HorizontalLine />
          </div>

          {/* Noun */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[16px] md:text-[20px] text-secondary-light">
              Meaning
            </h4>
            <ul className="flex flex-col gap-2 md:gap-3 list-disc pl-10 marker:text-accent">
              {meaning.definitions.map((definition: Definition, index) => (
                <li
                  key={index}
                  className="text-[15px] md:text-[18px] leading-[24px] dark:font-light text-primary-light dark:text-primary-dark pl-4"
                >
                  {definition?.definition}
                  {definition?.example && (
                    <p className="md:mt-1 text-secondary-light text-[15px] md:text-[18px]">
                      "{definition?.example}"
                    </p>
                  )}
                </li>
              ))}
            </ul>
            {meaning.synonyms?.length > 0 && (
              <div className="flex items-start gap-10">
                <h4 className="text-[16px] md:text-[20px] text-secondary-light">
                  Synonyms
                </h4>
                <div className="flex gap-1 flex-wrap">
                  {meaning.synonyms.map((synonym, index) => (
                    <span
                      key={index}
                      className="text-[16px] md:text-[20px] font-bold text-accent hover:cursor-pointer hover:underline"
                    >
                      {synonym}
                      {index !== meaning.synonyms.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      <HorizontalLine />

      <div className="flex items-center gap-8">
        <span className="text-body-small text-secondary-light">Source</span>
        <a
          className="text-body-small text-primary-light dark:text-primary-dark hover:text-accent"
          href={props.selectedData?.sourceUrls[0]}
        >
          {props.selectedData?.sourceUrls[0]}
        </a>
      </div>
    </div>
  );
}
