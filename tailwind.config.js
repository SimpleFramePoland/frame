module.exports = {
    content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite-react/**/*.js",
  ],
    
    theme: {
      extend: {
        colors:{
          babyblue: '#19b5fe',
        },
      },
    },
    plugins: [
      require("flowbite/plugin")
    ],
  }