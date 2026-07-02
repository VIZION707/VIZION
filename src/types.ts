export interface Hadith {
  id: string;
  collection: string;
  book: string;
  chapter: string;
  chapter_number: string;
  hadith_number: string;
  arabic: string;
  english: string;
  french: string;
  narrator: string;
  grade: string;
  reference: string;
  keywords: string[];
  topics: string[];
  source: string;
}

export type Collection = {
  id: string;
  name: string;
  arabicName: string;
  count: number;
};
