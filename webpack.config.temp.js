const { configBundle } = require("./webpack.generator.js");

const regions = ["vn", "en", "id"];

module.exports = () => regions.map((region, index) => configBundle(region, 3000 + index));
