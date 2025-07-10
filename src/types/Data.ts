type License = {
  name: string;
  url: string;
};

type Definition = {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
};

type Phonetic = {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
};

export type Data = {
  license: License;
  meanings: Meaning[];
  phonetic: string;
  phonetics: Phonetic[];
  sourceUrls: string[];
  word: string;
};
