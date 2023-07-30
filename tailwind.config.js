/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                "100": "25rem", // 100px
                "128": "32rem", // 128px
                '140': "35rem", // 140px
                "228": "57rem", // 228px
                "240": "60rem", // 240px
            },
            height: {
                '120': "30rem", // 120px
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require("daisyui"),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
