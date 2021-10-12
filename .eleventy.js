require('dotenv').config()

const Storyblok11Ty = require('storyblok-11ty')
const sbto11ty = new Storyblok11Ty.plugin()

const fs = require('fs')
const path = require('path')
const markdownShortcode = require('eleventy-plugin-markdown-shortcode')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const scTable = require('./src/_utils/scTable.js')
const sampleImage = require('./src/_utils/sampleImage.js')
const scUri = require('./src/_utils/scUri.js')
const scName = require('./src/_utils/scName.js')
const slugify = require('./src/_utils/slugify.js')

module.exports = function (eleventyConfig) {
	// passthrough
	eleventyConfig.addPassthroughCopy('./src/_assets')

	// plugins
	eleventyConfig.addPlugin(sbto11ty)
	eleventyConfig.addPlugin(markdownShortcode)
	eleventyConfig.addPlugin(syntaxHighlight)

	// filters
	eleventyConfig.addFilter('sc_uri', scUri)
	eleventyConfig.addFilter('sc_name', scName)
	eleventyConfig.addFilter('slugify', slugify)

	// Base Config
	return {
		dir: {
			input: 'src',
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
