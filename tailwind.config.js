module.exports = {
  // Specify the content sources for Tailwind CSS to scan
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all files where you're using Tailwind classes
    "./public/index.html", // Example for HTML files
  ],

  // Enable dark mode based on the user's system preference (optional)
  darkMode: "media", // This enables dark mode based on user's system settings, or remove this line for default behavior

  theme: {
    extend: {},
  },
  plugins: [],
};
