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

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Guess the <Capitel /> in 6 guesses.
        </div>
        <div>Each guess must be a valid country, territory, ...</div>
        <div>
          After each guess, you will have the distance, the direction and the
          proximity from your guess to the target location.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
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
            Your guess <span className="uppercase font-bold">Chile</span> is{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} away from the
            target location, the target location is in the North-East direction
            and you have a only 32% of proximity because it&apos;s quite far
            away!
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
            Your second guess{" "}
            <span className="uppercase font-bold">Finland</span> is getting
            closer! {formatDistance(3206000, settingsData.distanceUnit)} away,
            South-East direction and 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Lebanon",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Next guess, <span className="uppercase font-bold">Lebanon</span>,
            it&apos;s the location to guess! Congrats!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Capitel /> will be available every day!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Capitel /> has been <span className="font-bold">heavily</span> inspired
        by{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Made by{" "}
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
            source code
          </a>
          )
        </div>
        <div>
          Want to support?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/juliomalegria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Buy me a coffee! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
