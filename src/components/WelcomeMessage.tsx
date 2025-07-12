// import type { NotFound } from "../types/NotFound";

export default function WelcomeMessage() {
  return (
    <div className="flex justify-center items-center w-full h-auto py-30">
      <div className="flex flex-col items-center gap-4 md:gap-6 h-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="150px"
          width="150px"
          viewBox="0 -960 960 960"
          fill="#A445ED"
        >
          <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" />
        </svg>
        <h2 className="text-[16px] md:text-[20px] text-primary-light dark:text-primary-dark font-bold">
          Welcome to the Dictionary App
        </h2>
        <p className="text-[15px] md:text-[18px] text-secondary-light text-center">
          Type any English word to explore its definitions, pronunciation, and
          usage.
        </p>
      </div>
    </div>
  );
}
