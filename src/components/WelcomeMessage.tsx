// import type { NotFound } from "../types/NotFound";

export default function WelcomeMessage() {
  return (
    <div className="flex justify-center items-center w-full h-auto py-30">
      <div className="flex flex-col items-center gap-4 md:gap-6 h-auto">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          height="150px"
          width="150px"
          viewBox="0 -960 960 960"
          fill="#A445ED"
        >
          <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" />
        </svg> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="150px"
          viewBox="0 -960 960 960"
          width="150px"
          fill="#2d2d2d"
        >
          <path d="M160-391h45l23-66h104l24 66h44l-97-258h-46l-97 258Zm81-103 38-107h2l38 107h-78Zm319-70v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-499Z" />
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
