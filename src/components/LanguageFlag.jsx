
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
    "pt": "pt"
};

export default function LanguageFlag({ language }) {

    const country = langToFlag[language];
    return <span className={`fi fi-${country}`}></span>

}