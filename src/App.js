import React from "react";
import { Callback } from "./Callback";
import { Exit } from "./Exit";
import { withDragging } from "./hoc/withDragging";
import { Hotword } from "./Hotword";
import { SimpleInput } from "./SimpleInput";
import { Situation } from "./Situation";
import { Situations } from "./Situations";
import { Switch } from "./Switch";
import { Textout } from "./Textout";

export const TextOutWithDraggingComponent = withDragging(Textout);

export const SimpleInputWithDraggingComponent = withDragging(SimpleInput);

export const HotwordWithDraggingComponent = withDragging(Hotword);

export const CallbackWithDraggingComponent = withDragging(Callback);

export const SwitchWithDraggingComponent = withDragging(Switch);

export const SituationWithDraggingComponent = withDragging(Situation);

export const ExitWithDraggingComponent = withDragging(Exit);

export default function App() {
  const [data, _] = React.useState({
    name: "test_0001",
    description: "Test 0001. Play Prompt",
    start: "start",
    situations: {
      start: {
        situation: "@textout",
        config: {
          language: "'de-DE'",
          prompts: [
            {
              count: 1,
              bargein: false,
              prompt: [
                {
                  text: "Das ist der Test mit der Nummer 1."
                },
                {
                  audio: "jingle.wav"
                }
              ]
            }
          ]
        },
        position: {
          x: 100,
          y: 100,
          active: false,
          offset: {
            x: 48,
            y: 13
          },
          width: "100%",
          height: "100%",
          moving: false
        },
        id: "start"
      },
      greeting: {
        config: {
          prompts: [
            {
              prompt: [
                {
                  text: "Hallo"
                }
              ]
            }
          ]
        },
        action: [],
        id: "greeting",
        situation: "@textout",
        description: "",
        position: {
          x: 420,
          y: 100,
          active: false,
          offset: {
            x: 104,
            y: 27
          },
          width: "100%",
          height: "100%",
          moving: false
        }
      }
    }
  });

  /*
      <TextOutWithDraggingComponent data={textout} />
      <SimpleInputWithDraggingComponent data={simpleInput} />,
      <HotwordWithDraggingComponent data={hotword} />,
      <CallbackWithDraggingComponent data={callback} />,
      <SwitchWithDraggingComponent data={switchc} />,
      <ExitWithDraggingComponent data={exit} />,
      <SituationWithDraggingComponent data={situation} />

      */

  const situationsArray = Object.keys(data.situations);
  return (
    <svg viewBox="0 0 100000 100000" width="100000" height="100000">
      {situationsArray.map((situationName) =>
        Situations(data.situations[situationName])
      )}
    </svg>
  );
}
