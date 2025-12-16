/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    600: '#1e293b', // Placeholder approximation
                    700: '#1a2236', // Placeholder approximation 
                    800: '#141c2f', // Placeholder approximation
                    900: '#0E162B', // Confirmed from index.css
                },
                electric: {
                    200: '#93c5fd', // Lighter shade approximation
                    300: '#60a5fa', // Matches focus ring color in index.css
                    500: '#3b82f6', // Matches --primary in index.html
                    600: '#2563eb', // Darker shade approximation
                    700: '#1F50D6', // Confirmed scroll thumb
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
