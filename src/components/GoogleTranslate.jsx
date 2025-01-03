import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "tr,en",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      setTimeout(() => {
        const selectLanguage = document.querySelector(".goog-te-combo");
        if (selectLanguage) {
          selectLanguage.value = "tr";
          selectLanguage.dispatchEvent(new Event("change"));
        }
      });
    };

    addGoogleTranslateScript();

    return () => {
      const script = document.querySelector(
        'script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
      );
      if (script) document.body.removeChild(script);
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
