import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Capitle } from "../Capitle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Twemoji } from "@teuteuf/react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function InfosNl({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Spelinstructies" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Je hebt 6 kansen om de <Capitle /> te raden.
        </div>
        <div>Iedere gok moet een geldig land, gebied, enzovoort zijn.</div>
        <div>
          Na iedere gok zie je de afstand, richting en nabijheid van jouw gok
          naar het doelgebied.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Voorbeelden</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Chili",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Jouw gok <span className="uppercase font-bold">Chili</span> is op{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} afstand van
            het doelgebied, het doelgebied is in noordoostelijke richting, en je
            hebt slechts een 32% nabijheid omdat het behoorlijk ver weg is!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Finland",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Jouw tweede gok <span className="uppercase font-bold">Finland</span>{" "}
            is dichterbij! {formatDistance(3206000, settingsData.distanceUnit)}{" "}
            ver, zuidoosterlijke richting en 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Libanon",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            De volgende gok,{" "}
            <span className="uppercase font-bold">Libanon</span>, is het
            bedoelde land! Gefeliciteerd!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Er is iedere dag een nieuwe <Capitle /> beschikbaar!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Capitle /> is <span className="font-bold">sterk</span> geïnspireerd
        door{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>
        , gemaakt door{" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Gemaakt door{" "}
          <a
            className="underline"
            href="https://juliomalegria.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Julio M. Alegria
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/juliomalegria/capitle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            broncode
          </a>
          )
        </div>
        <div>
          Wil je iets bijdragen?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/juliomalegria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Koop een kop koffie voor me! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
