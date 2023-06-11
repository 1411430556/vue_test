const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint检查
  lintOnSave: false,

  // 开启代理服务器（方式一）
  /*   devServer: {
      proxy: 'http://localhost:5000',
    }, */

  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/atguigu': {  // 匹配所有以 '/atguigu'开头的请求路径
        target: 'http://localhost:5000',  // 代理目标的基础路径
        pathRewrite: { '^/atguigu': '' },  // 利用正则表达式将/atguigu忽略
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
    },
  },
})
