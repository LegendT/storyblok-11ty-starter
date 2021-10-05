require('dotenv').config()

const Storyblok11Ty = require('storyblok-11ty')
const sbto11ty = new Storyblok11Ty.plugin()

const fs = require('fs')
const path = require('path')
const markdownShortcode = require('eleventy-plugin-markdown-shortcode')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const scTable = require('./_utils/scTable.js')
const sampleImage = require('./_utils/sampleImage.js')
const scUri = require('./_utils/scUri.js')
const scName = require('./_utils/scName.js')
const slugify = require('./_utils/slugify.js')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ src: './' })
	eleventyConfig.addPlugin(sbto11ty)

	// Base Config
	return {
		dir: {
			output: '_site',
			includes: '_includes',
			layouts: '_layouts',
			data: '_data',
		},
		templateFormats: ['njk', 'liquid', 'md', 'css', 'png', 'jpg', 'svg'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
	}
}
