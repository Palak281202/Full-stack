import { useState } from "react";

export default function Practice1() {
  const [text, settext] = useState("palak");
  const clickhandler = (identifier) => {
    // if(text === 'palak'){
    //     settext('jangir')
    // }
    // else{
    //     settext('palak')
    // }
    if (identifier === "first") {
      settext("first button");
    } else if (identifier === "second") {
      settext("second button");
    } else if (identifier === "third") {
      settext("third button");
    }
  };
  return (
    <div>
      <button
        onClick={(event) => {
          clickhandler("first", event);
        }}
      >
        {text}
      </button>
      <button
        onClick={(event) => {
          clickhandler("second", event);
        }}
      >
        {text}
      </button>
      <button
        onClick={(event) => {
          clickhandler("third", event);
        }}
      >
        {text}
      </button>
    </div>
  );
}
