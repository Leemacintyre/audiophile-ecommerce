module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "google-blue-light": "#4285f4",
                "google-blue": "#357ae8",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
