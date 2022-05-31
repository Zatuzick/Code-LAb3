const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'detail.html'),
        main: resolve(__dirname, 'products.html'),
        main: resolve(__dirname, 'signin.html'),
        main: resolve(__dirname, 'signun.html'),
      }
    }
  }
})