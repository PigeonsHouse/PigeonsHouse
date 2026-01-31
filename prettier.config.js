export default {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["^react", "<THIRD_PARTY_MODULES>", "^[./]"],
};
