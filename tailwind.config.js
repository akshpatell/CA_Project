/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        heading1: [
          "clamp(2.25rem, 2.5vw + 1.25rem, 3.25rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading2: [
          "clamp(2rem, 2.1875vw + 1.125rem, 2.875rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading3: [
          "clamp(1.75rem, 1.875vw + 1rem, 2.5rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading4: [
          "clamp(1.5rem, 1.875vw + 0.75rem, 2.25rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading5: [
          "clamp(1.375rem, 1.5625vw + 0.75rem, 2rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading6: [
          "clamp(1.25rem, 1.25vw + 0.75rem, 1.75rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        subtitle1: [
          "clamp(1.25rem, 0.625vw + 1rem, 1.5rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
            // fontWeight: "600",
            fontWeight: "500",
          },
        ],
        subtitle2: [
          "clamp(1.125rem, 0.625vw + 0.875rem, 1.375rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
            // fontWeight: "600",
            fontWeight: "500",
          },
        ],
        body1: [
          "clamp(1.125rem, 0.625vw + 0.875rem, 1.375rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        body2: [
          "clamp(1rem, 0.625vw + 0.75rem, 1.25rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        caption1: [
          "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        caption2: [
          "clamp(0.75rem, 0.3125vw + 0.625rem, 0.875rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        btn: [
          "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        xxs: [
          "clamp(0.5rem, 0.143rem + 0.952vw, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
      },
      spacing: {
        container: `max(
			  0.75rem,
			  calc((100vw - calc(1280px - 1rem * 2)) / 2)
			)`,
        "sm-container": `max(
			  1rem,
			  calc((100vw - calc(550px - 1rem * 2)) / 2)
			)`,
      },
    },
  },
  plugins: [],
};
