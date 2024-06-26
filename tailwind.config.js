/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/animate.css'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        text: '#1a162e',
        'body-bg': '#f6f6f6',
        'header-bg': '#eee',
        'top-act-group': '#fff',
        'top-act-group-shadow': '#ededf6',
        'top-act-group-separate': '#EDEDF6',
        'header-shadow': 'rgba(237, 237, 246, 0.2)',
        dropdown: '#fff',
        'dropdown-shadow': 'rgba(200, 200, 200, 0.4)',
        'top-menu-border': '#d2d1d6',
        'menu-card': '#fff',
        'item-card': '#fff',
        'active-sidebar': '#2dc9af',
        sidebar: '#eee',
        'left-login': '#FAFAFD',
        'right-login': '#fff',
        'login-text': '#B9BABE',
        'profile-right': '#fff',

        'login-btn': '#FFB700',
        'rose-900': 'rgb(225 29 72)',
        'profile-card': '#F6F6F6',
        'checkout-text': '#9E9DA8',

        'dark-text': '#fff',
        'dark-body-bg': '#292e39',
        'dark-header-bg': '#171c28',
        'dark-top-act-group': '#292e39',
        'dark-top-act-group-shadow': 'rgba(0, 0, 0, 0.2)',
        'dark-top-act-group-separate': '#ededf6',
        'dark-header-shadow': '#2d3441',
        'dark-dropdown-bg': '#2d3441',
        'dark-dropdown-shadow': 'rgba(23, 28, 40, 0.4))',
        'dark-top-menu-border': '#171c28',
        'dark-menu-card': '#292e39',
        'dark-item-card': '#171c28',
        'dark-sidebar': '#171c28',
        'dark-left-login': '#171c28',
        'dark-right-login': '#292e39',
        'dark-profile-text': '#B9BABE',
        'dark-profile-card': '#292E39',
        'dark-profile-right': '#171c28',
      },
      screens: {
        xxl: { max: '1400px' },
        xl: { max: '1200px' },
        lg: { max: '992px' },
        md: { max: '768px' },
        sm: { max: '576px' },
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
