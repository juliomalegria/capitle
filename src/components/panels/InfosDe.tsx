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

export function InfosDe({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Wie wird gespielt?" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Errate das <Capitle /> in 6 Versuchen.
        </div>
        <div>Jeder Versuch muss ein gültiges Land, Territorium, ... sein</div>
        <div>
          Nach jedem Versuch wird dir die Distanz, Richtung und die Nähe von
          deinem Tipp zum Zielland angezeigt.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Beispiele</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Chile",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Dein Tipp <span className="uppercase font-bold">Chile</span> ist{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} weit weg vom
            Zielland, das Zielland ist in Richtung Nord-Ost und du hast nur 32%
            Nähe da es recht weit entfernt ist!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Finnland",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Dein zweiter Versuch{" "}
            <span className="uppercase font-bold">Finnland</span> ist dichter
            dran! {formatDistance(3206000, settingsData.distanceUnit)} entfernt,
            in Süd-Östlicher Richtung und 84%!
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
            Nächster Versuch,{" "}
            <span className="uppercase font-bold">Libanon</span>, dieses Land
            wurde gesucht! Glückwunsch!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Jeden Tag wird ein neues <Capitle /> verfügbar sein!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Capitle /> wurde <span className="font-bold">stark</span> von{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>{" "}
        von{" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>{" "}
        inspiriert.
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Erstellt von{" "}
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
            Quelltext
          </a>
          )
        </div>
        <div>
          Du möchtest mich unterstützen?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/juliomalegria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Kauf mir einen Kaffee! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
