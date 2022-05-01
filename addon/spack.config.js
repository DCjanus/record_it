const {config} = require("@swc/core/spack");
const path = require("path");

module.exports = config({
    entry: {
        "bilibili": path.resolve(__dirname, "content_scripts/bilibili.ts"),
        "douban": path.resolve(__dirname, "content_scripts/douban.ts"),
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
    },
    mode: "production",
});