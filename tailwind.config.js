/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Playfair Display
        playfair: ["PlayfairDisplay-Regular"],
        "playfair-bold": ["PlayfairDisplay-Bold"],
        "playfair-medium": ["PlayfairDisplay-Medium"],
        "playfair-semibold": ["PlayfairDisplay-SemiBold"],

        // Poppins
        poppins: ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-semibold": ["Poppins-SemiBold"],
        "poppins-light": ["Poppins-Light"],

        // Space Grotesk
        space: ["SpaceGrotesk-Regular"],
        "space-bold": ["SpaceGrotesk-Bold"],
        "space-medium": ["SpaceGrotesk-Medium"],
        "space-semibold": ["SpaceGrotesk-SemiBold"],

        // Tagesschrift
        tagesschrift: ["Tagesschrift-Regular"],

        // Space Mono
        mono: ["SpaceMono-Regular"],
      },
    },
  },
  plugins: [],
};
