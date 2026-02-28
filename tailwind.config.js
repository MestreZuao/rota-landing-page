/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#fdfae3',
                    dark: '#0f102c',
                    blue: '#2531e9',
                    blueHover: '#1e27ba',
                    yellow: '#f4ce5a',
                    gray: '#093148',
                    text: '#ffffff',
                    muted: '#8ba1bb',
                }
            },
            fontFamily: {
                // Fonte serifada para a logo e bold para chamadas principais, sans para o corpo
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'], // Usaremos para tentar chegar perto do KV
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'kv-gradient': 'linear-gradient(to right, #020519, #1e38f1)',
            },
            keyframes: {
                shimmer: {
                    '100%': { transform: 'translateX(100%)' },
                }
            }
        },
    },
    plugins: [],
}
