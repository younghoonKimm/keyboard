import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Keyboard from "react-simple-keyboard";
import * as hangul from "hangul-js";
import { korLayout } from "./type";

function Keyboards() {
  const [input, setInput] = useState("");
  const [layoutName, setLayoutName] = useState("default");

  const { t, i18n } = useTranslation();

  const onChangeInput = (text: string | any) => {
    const toKor = hangul.assemble(text);

    return setInput(toKor);
  };

  const handleShift = () => {
    layoutName === "default" ? setLayoutName("shift") : setLayoutName("default");
  };

  const onKeyPress = (button: string) => {
    console.log("Button pressed", button);
    console.log(button);
    if (button === "{language}") return console.log("영어");

    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  return (
    <div>
      <div>{t("test")}</div>
      <input value={input} onChange={() => onChangeInput}></input>

      <Keyboard
        layout={korLayout}
        layoutName={layoutName}
        onKeyPress={onKeyPress}
        onChange={onChangeInput}
      ></Keyboard>
    </div>
  );
}

export default Keyboards;
