import translate from "translate";

translate.engine = "google";

const text = await translate("I want to sleep", "khm");
console.log(text);
// "Hola mundo"