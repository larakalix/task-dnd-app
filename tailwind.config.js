/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "t-dz-gray": "#f0f3fe",
                "t-dz-black": "#172b4d",
                "t-dz-layout": "#f8f9fd",
            },
        },
    },
    plugins: [],
};
