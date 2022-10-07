// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries with capitals => https://https://github.com/icyrockcom/country-capitals/blob/master/data/country-list.csv

import { countries } from "./countries.position";
import { corsicanCountryNames } from "./countries.name.co";
import { frenchCountryNames } from "./countries.name.fr";
import { hungarianCountryNames } from "./countries.name.hu";
import { dutchCountryNames } from "./countries.name.nl";
import { polishCountryNames } from "./countries.name.pl";
import { germanCountryNames } from "./countries.name.de";
import { japaneseCountryNames } from "./countries.name.ja";

export interface Country {
  capital: string;
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countrySelection = countries;

export function getCountryName(language: string, country: Country) {
  switch (language) {
    case "co":
      return corsicanCountryNames[country.code];
    case "fr":
      return frenchCountryNames[country.code];
    case "hu":
      return hungarianCountryNames[country.code];
    case "nl":
      return dutchCountryNames[country.code];
    case "pl":
      return polishCountryNames[country.code];
    case "de":
      return germanCountryNames[country.code];
    case "ja":
      return japaneseCountryNames[country.code];
    default:
      return country.name;
  }
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
