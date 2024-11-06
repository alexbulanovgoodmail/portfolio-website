// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

	css: ['normalize.css', '~/assets/scss/main.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/scss/general/variables.scss" as *;`
				}
			}
		}
	}
})
