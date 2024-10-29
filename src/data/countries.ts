import { Country } from "./types";
import { france } from "./countries/france";
import { greece } from "./countries/greece";
import { thailand } from "./countries/thailand";
import { morocco } from "./countries/morocco";
import { brazil } from "./countries/brazil";
import { japan } from "./countries/japan";
import { italy } from "./countries/italy";
import { usa } from "./countries/usa";
import { spain } from "./countries/spain";
import { portugal } from "./countries/portugal";
import { norway } from "./countries/norway";
import { turkey } from "./countries/turkey";
import { england } from "./countries/england";

export const countries: Record<string, Country> = {
  france,
  greece,
  thailand,
  morocco,
  brazil,
  japan,
  italy,
  usa,
  spain,
  portugal,
  norway,
  turkey,
  england
};

export type { Country, Tip, TipType } from "./types";