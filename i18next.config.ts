export default {
  locales: [
    "en",
    "tj",
  ],
  extract: {
    input: "src/**/*.tsx",
    output: "src/locales/{{language}}/translation.json"
  }
}
