export default {
  locales: [
    "en",
    "de",
    "fr"
  ],
  extract: {
    input: "src/**/*.tsx",
    output: "src/locales/{{language}}/translation.json"
  }
}
