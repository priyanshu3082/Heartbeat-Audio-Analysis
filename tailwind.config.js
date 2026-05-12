/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cardio: {
                    primary: '#e63c3c',
                    secondary: '#353cbd',
                    dark: '#0b0e22',
                    light: '#661321',
                    accent: '#52d9c7',
                },
                hba: {
                    primary: '#FF3366',
                    secondary: '#4F72FF',
                    accent: '#00DEB4',
                    base: '#060D1F',
                    surface: '#0D1629',
                    elevated: '#131E36',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
