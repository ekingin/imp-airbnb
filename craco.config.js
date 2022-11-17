const path = require("path")
const CracoLessPlugin = require('craco-less');

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // alias
  webpack: {
    alias: {
      "@": resolve("src"),
      "base-ui": resolve("src/base-ui"),
      "components": resolve("src/components"),
      "hooks": resolve("src/hooks"),
      "views": resolve("src/views"),
      "utils": resolve("src/utils"),
    }
  },
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
}