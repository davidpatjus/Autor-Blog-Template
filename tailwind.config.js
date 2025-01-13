/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html', './about.html', './contact.html', './blogs.html', './post-detail.html'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#475569',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
          },
        },
      },
    },
  },
  plugins: [
  ],
}
