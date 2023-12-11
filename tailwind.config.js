/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                main: ['"Inter"'],
                header: ['"Pacifico"', 'cursive'],
            },
            colors: {
                'violet': '#57486a',
                'text-color': '#f0ebf6',
                'input-color': '#bcaece'
            }
        },
    },
    plugins: [],
}

