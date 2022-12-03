// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Techmil.az",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {hid: "description", name: "description", content: ""},
                {name: "format-detection", content: "telephone=no"},
            ],
            link: [
                {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
                {
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
                    rel: "stylesheet",
                    type: "text/css",
                    integrity:
                        "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
                    crossorigin: "anonymous",
                },
                {href: "/assets/css/style.css", rel: "stylesheet", type: "text/css"},
                {
                    href: "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css",
                    rel: "stylesheet",
                    type: "text/css"
                },
            ],
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
                    integrity:
                        "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",
                    crossorigin: "anonymous",
                    body: true
                },
                {
                    src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js",
                },
                {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.4/swiper-bundle.min.js",
                    integrity:
                        "sha512-k2o1KZdvUi59PUXirfThShW9Gdwtk+jVYum6t7RmyCNAVyF9ozijFpvLEWmpgqkHuqSWpflsLf5+PEW6Lxy/wA==",
                    crossorigin: "anonymous",
                    referrerpolicy: "no-referrer",
                    body: true
                },
            ],
        },
    },

    css: ["bootstrap/dist/css/bootstrap.min.css"],


    modules: [
        'nuxt-proxy'
    ],

    vite: {
        server: {
            proxy: {
                options: {
                    target: process.env.API_URL,
                    changeOrigin: true
                }
            },
        },
    },

    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
            apiDevUrl: process.env.API_DEV_URL
        }
    },




});
