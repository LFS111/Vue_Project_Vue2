const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // ws: true,  //用于支持webscoiky
        // changeOrigin: true, //是否说谎

      },

    }
  }
})
