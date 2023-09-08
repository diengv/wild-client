// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

export default defineNuxtConfig({

    modules: [
        '@nuxt/image',
    ],
    postcss: {plugins: {tailwindcss: {}, autoprefixer: {},},},
    css: [
        '~/assets/css/main.css',
        '~/assets/css/client.scss',
        'animate.css/animate.min.css'
    ],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.png'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap'
                }
            ],

        }
    },
    plugins: [
        {src: '~/plugins/clickOutside'}
    ],
    runtimeConfig: {

        // Config within public will be also exposed to the client
        public: {
            baseUrl: process.env.BASE_URL || 'http://localhost:3000'
        }
    },
})
