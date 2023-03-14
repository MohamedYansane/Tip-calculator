/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/*.html',
        './public/tipcalculator/*.html',
        './public/order-summary/*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['ui-sans-serif', 'system-ui'],
                'serif': ['ui-serif', 'Georgia'],
                'mono': ['ui-monospace', 'SFMono-Regular'],
                'display': ['Oswald'],
                'jetbrain': ['JetBrains Mono'],
                'body': ['Open Sans'],
                'corben': ['Corben'],
                'red-hat': ['Red Hat Display', 'sans-serif'],
            },
            colors: {
                "primary": "hsl(172, 67%, 45%)",
                "violet-500": "rgb(124 58 237)",
                "indigo-800": " rgb(55 48 163) ",
                "dark-grayish": " hsl(186, 14%, 43%)",
                "very-dark-cyan": " hsl(183, 100%, 15%)",
                "light-grayish": " hsl(172, 67%, 45%)",
                "light-grayish-cyan": " hsl(185, 41%, 84%)",
                "very-pale-blue": " hsl(225, 100%, 98%)",
                "desaturated-blue": " hsl(224, 23%, 55%)",
                "dark-blue": " hsl(223, 47%, 23%)",
                "pale-blue": " hsl(225, 100%, 94%)",
                "bright-blue": "hsl(245, 75%, 52%)",



            },
            spacing: {
                '1': '8px',
                '2': '12px',
                '3': '16px',
                '4': '24px',
                '5': '32px',
                '6': '48px',
            },
            lineHeight: {
                "11": "3rem"
            },
            screens: {
                'my': { 'min': '309px', 'max': '450px' },
                'lgmy': { 'min': '1204px', 'max': '1500px' },
                'ipad': { 'min': '768px', 'max': '912px' },
                'fold': '280px',
                'surfaceduo': '540px',
                // => @media (min-width: 640px) { ... }

                'laptop': '1024px',
                // => @media (min-width: 1024px) { ... }

                'desktop': '1280px',
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    plugins: [],
}