import { Country } from "./types";
import { france } from "./countries/france";
import { greece } from "./countries/greece";
import { thailand } from "./countries/thailand";
import { morocco } from "./countries/morocco";
import { brazil } from "./countries/brazil";

export const countries: Record<string, Country> = {
  france,
  greece,
  thailand,
  morocco,
  brazil
};

export type { Country, Tip, TipType } from "./types";