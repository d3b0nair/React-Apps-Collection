import React, { useState, useEffect } from "react";
import axios from "axios";

function Convert({ language, text, translateTo }) {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebounceText] = useState(translated);
  useEffect(() => {
    const TimeoutID = setTimeout(() => {
      setDebounceText(text);
    }, 700);
    return () => {
      clearTimeout(TimeoutID);
    };
  }, [text]);
  useEffect(() => {
    const config = {
      method: "POST",
      url: "https://api.cognitive.microsofttranslator.com/translate",
      params: {
        "api-version": "3.0",
        to: translateTo.value,
        text: debounceText,
        from: language.value,
      },
      headers: {
        "content-type": "application/json",
        "Ocp-Apim-Subscription-Key": "",
        "Ocp-Apim-Subscription-Region": "eastus",
      },
      data: [{ Text: debounceText }],
    };

    //
    async function doTranslation() {
      await axios.request(config).then((res) => {
        setTranslated(res.data[0].translations[0].text);
      });
    }
    doTranslation();
  }, [debounceText, language, translateTo]);
  return (
    <div>
      <textarea readOnly value={translated}></textarea>
    </div>
  );
}

export default Convert;
