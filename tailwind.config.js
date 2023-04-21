module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite-react/**/*.js",
  ],

  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.black'),
        
          },
        },
      }),
      colors: {
        babyblue: '#19b5fe',
      },
      
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    require("tailwindcss-animate"),
  ],
  daisyui: {


  
    logs: true,
    themes: [{
      motywik: {
        "primary": "#19b5fe",
      },
    }]
  }
}