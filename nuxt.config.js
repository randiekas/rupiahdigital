import colors from 'vuetify/es5/util/colors'
// import path from 'path'
// import fs from 'fs'
export default {
	// server: {
	// 	https: {
	// 		key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
	// 		cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
	// 	}
	// },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s',
		title: 'Rupiah Digital - Your Gateway to Access Crypto, DeFi, and NFTs using Indonesian Rupiah',
		meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'title', content: 'Rupiah Digital - Your Gateway to Access Crypto, DeFi, and NFTs using Indonesian Rupiah' },
		{ name: 'description', content: 'Rupiah Digital (IDRS) is a stablecoin powered by Solana Blockchain (SOL). By using Solana we provide the most scalable and cheapest Indonesian Rupiah Stablecoin that can be used as a gateway to access crypto, DeFi, and NFTs.' },

		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: 'https://rupiahdigital.com' },
		{ property: 'og:title', content: 'Rupiah Digital - Your Gateway to Access Digital Assets using Indonesian Rupiah Stablecoin' },
		{ property: 'og:description', content: 'Rupiah Digital (IDRS) is a stablecoin powered by Solana Blockchain (SOL). By using Solana we provide the most scalable and cheapest Indonesian Rupiah Stablecoin that can be used as a gateway to access crypto, DeFi, and NFTs.' },
		{ property: 'og:image', content: 'https://rupiahdigital.com/cover-idrs.jpg' },

		{ property: 'twitter:card', content: 'summary_large_image' },
		{ property: 'twitter:url', content: 'https://rupiahdigital.com' },
		{ property: 'twitter:title', content: 'Rupiah Digital - Your Gateway to Access Crypto, DeFi, and NFTs using Indonesian Rupiah' },
		{ property: 'twitter:description', content: 'Rupiah Digital (IDRS) is a stablecoin powered by Solana Blockchain (SOL). By using Solana we provide the most scalable and cheapest Indonesian Rupiah Stablecoin that can be used as a gateway to access crypto, DeFi, and NFTs.' },
		{ property: 'twitter:image', content: 'https://rupiahdigital.com/cover-idrs.jpg' },

		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'https://rupiahdigital.com//favicon.ico' }
		],
		script: [
			{
				type: 'text/javascript',
				src: 'https://js.durianpay.id/0.1.23/durianpay.min.js',
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/api.js', mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		'@nuxtjs/auth-next',
		'@nuxtjs/moment',
		['@nuxtjs/google-adsense', {id: 'ca-pub-1873701421681101'}]
	],
	auth: {
		// Options
		redirect: {
			login: '/',
			logout: '/',
			callback: '/',
			home: '/beranda'
		},
		strategies: {
			google: {
				// clientId: '459074254974-e0l81r9tif92osj98ksurom0jq9v4hcc.apps.googleusercontent.com',
				clientId: '564028017740-p7es7i3bmudj1dt47me1hhpqnmnhp2sv.apps.googleusercontent.com',
				scheme: 'oauth2',
				endpoints: {
					authorization: 'https://accounts.google.com/o/oauth2/auth',
					token: undefined,
					userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
					logout: `${process.env.FRONTEND_URL}`
					// logout: 'https://example.com/logout'
				},
				token: {
					property: 'access_token',
					type: 'Bearer',
					maxAge: 86400
				},
				refreshToken: {
					property: 'refresh_token',
					// maxAge: 86400
					maxAge: 60 * 60 * 24 * 30
				},
				responseType: 'token',
				grantType: 'authorization_code',
				accessType: undefined,
				// redirectUri: "http://www.idisi.in/masuk",
				// logoutRedirectUri: "http://www.idisi.in",
				redirectUri: `${process.env.FRONTEND_URL}/masuk`,
				logoutRedirectUri: `${process.env.FRONTEND_URL}`,
				// https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata
				// scope: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/drive.appdata'],
				// 'openid', 'profile', 'email'
				scope: [],
				state: 'UNIQUE_AND_NON_GUESSABLE',
				codeChallengeMethod: '',
				responseMode: '',
				acrValues: '',
			},
		}
	},
	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
		lang: 'en'
		}
	},

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		// icons: 'mdi',
		theme: {
		dark: true,
		themes: {
			dark: {
				primary:'#4268F6',
				accent: colors.grey.darken3,
				secondary: colors.amber.darken3,
				info: colors.teal.lighten1,
				warning: colors.amber.base,
				error: colors.deepOrange.accent4,
				success: colors.green.accent3
			},
			light:{
				primary:'#4268F6'
			}
		}
		}
	},
	pwa: {
		manifest: {
			name: 'Rupiah Digital - Your Gateway to Access Crypto, DeFi, and NFTs using Indonesian Rupiah',
			short_name: 'Rupiah Digital (IDRS)',
			description: 'Rupiah Digital (IDRS) is a stablecoin powered by Solana Blockchain (SOL). By using Solana we provide the most scalable and cheapest Indonesian Rupiah Stablecoin that can be used as a gateway to access crypto, DeFi, and NFTs.',
			lang: 'en',
		}
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},
	env: {
		API_URL: process.env.API_URL,
		// FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
		FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
	},
}
