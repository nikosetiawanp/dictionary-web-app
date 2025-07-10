export type License = {
  name: string;
  url: string;
};

export type Definition = {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type Phonetic = {
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
