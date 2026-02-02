
const langToFlag = {
    "en": "gb",
    "de": "de",
    "zh": "cn",
    "ja": "jp",
    "hi": "in",
    "tl": "ph",
    "it": "it",
    "ko": "kr",
    "th": "th",
    "fr": "fr",
    "fi": "fi",
    "id": "id",
    "es": "es",
    "ml": "in",
    "pt": "pt",
    "ru": "ru",
    "pl": "pl",
    "sv": "se",
    "no": "no",
    "da": "dk",
    "nl": "nl",
    "tr": "tr",
    "el": "gr",
    "cs": "cz",
    "hu": "hu",
    "ar": "sa",
    "he": "il",
    "fa": "ir"
};


export default function LanguageFlag({ language }) {

    const country = langToFlag[language];
    return <span className={`fi fi-${country}`}></span>

}