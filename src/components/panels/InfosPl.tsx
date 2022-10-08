import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Capitel } from "../Capitel";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Twemoji } from "@teuteuf/react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function InfosPl({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Zasady gry" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Odgadnij <Capitel /> w 6. próbach.
        </div>
        <div>
          W każdej próbie odgadnięcia musisz podać istniejący kraj, terytorium,
          ...
        </div>
        <div>
          Po każdej próbie odgadnięcia zobaczysz informację o odległości,
          kierunku i bliskości pomiędzy odgadniętym krajem, a krajem docelowym.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Przykłady</div>
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
            Twój typ <span className="uppercase font-bold">Chile</span> jest
            oddalone o {formatDistance(13557000, settingsData.distanceUnit)} od
            kraju docelowego, a kraj docelowy znajduje się w kierunku
            północno-wschodnim i masz tylko 32% bliskości, ponieważ kraj
            docelowy jest dość daleko!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Finlandia",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Twój drugi typ{" "}
            <span className="uppercase font-bold">Finlandia</span> jest bliżej!{" "}
            {formatDistance(3206000, settingsData.distanceUnit)} od kraju
            docelowego, w kierunku południowo-wschodnim i 84% bliskości!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Liban",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Kolejny typ, <span className="uppercase font-bold">Liban</span>,
            jest krajem docelowym! Gratulacje!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Nowe <Capitel /> będzie pojawiać się każdego dnia!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Capitel /> wzoruje się w <span className="font-bold">dużej</span>{" "}
        mierze na{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>{" "}
        stworzonym przez{" "}
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
          Autor{" "}
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
            href="https://github.com/juliomalegria/capitel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            kod źródłowy
          </a>
          )
        </div>
        <div>
          Chcesz mnie wesprzeć?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/juliomalegria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Postaw mi kawę! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
