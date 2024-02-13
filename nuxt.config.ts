// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			link: [
				// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Press+Start+2P' },
				// { rel: 'stylesheet', href: 'https://unpkg.com/nes.css/css/nes.css' }
			],
			script: [
				// { src: 'https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js' }
			]
		}
	},

	modules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/color-mode',
		'@nuxt/content',
		'@nuxt/ui',
		'nuxt-icons'
	],

	content: {
		highlight: {
			theme: {
				// Default theme (same as single string)
				default: 'github-light',
				// Theme used if `html.dark`
				dark: 'github-dark',
				// Theme used if `html.sepia`
				sepia: 'monokai'
			}
		}
	},

	colorMode: {
		classSuffix: ''
	},

	css: ['~/assets/scss/main.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "@/assets/scss/general/variables.scss" as *;
					`
				}
			}
		}
	}
})
