require('dotenv').config()

const Storyblok11Ty = require('storyblok-11ty')
const sbto11ty = new Storyblok11Ty.plugin()

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ src: './' })
	eleventyConfig.addPlugin(sbto11ty)

	// Base Config
	return {
		// dir: {
		// 	input: 'src',
		// 	output: 'dist',
		// 	includes: '_includes',
		// 	layouts: '_layouts',
		// 	data: '_data',
		// },
		templateFormats: ['njk', 'liquid', 'md', 'css', 'png', 'jpg', 'svg'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
	}
}
