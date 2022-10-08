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

export function InfosCo({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Cumu ghjucà" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          {" "}
          Induvinate u <Capitle /> in 6 colpi.
        </div>
        <div>
          Ogni colpu deve esse u nome accettevule d’un paese o d’un territoriu.
        </div>
        <div>
          Dopu à ogni colpu, ottinerete a distanza, a direzzione è a vicinanza
          trà a vostra prova è u paese à induvinà.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Esempii</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Cile",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            U vostru colpu <span className="uppercase font-bold">Cile</span> hè
            à {formatDistance(13557000, settingsData.distanceUnit)} di u paese à
            induvinà, quellu paese si trova in direzzione di u nordeste è site
            solu à 32% di vicinanza perchè u vostru colpu hè quantunque
            alluntanatu !
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
            U vostru secondu colpu{" "}
            <span className="uppercase font-bold">Finlandia</span> hè più vicinu
            ! A risposta si trova à{" "}
            {formatDistance(3206000, settingsData.distanceUnit)}, ver di u
            sudeste cù una vicinanza di 84% !
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Libanu",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            L’ultimu colpu, <span className="uppercase font-bold">Libanu</span>,
            hè u paese à induvinà ! Bellu colpu !{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un novu <Capitle /> hè dispunibule ogni ghjornu !
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Capitle /> hè statu inspiratu{" "}
        <span className="font-bold">forte forte</span> da{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>{" "}
        creatu da{" "}
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
          Sviluppatu da{" "}
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
            codice di fonte
          </a>
          )
        </div>
        <div>
          Vulete sustenemi ?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/juliomalegria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Rigalatemi d’un caffè ! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
