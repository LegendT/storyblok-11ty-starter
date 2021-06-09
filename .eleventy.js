const Storyblok11Ty = require("storyblok-11ty");
const sbto11ty = new Storyblok11Ty.plugin();
require('dotenv').config();



module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src" : './'});
  eleventyConfig.addPlugin(sbto11ty)
};





