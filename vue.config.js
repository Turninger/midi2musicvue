const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}),{
  pages:{
    home:{
      //入口文件，相当于多页面应用的 main.js
      entry:'src/pages/Home/main.js',
      //应用的模板，相当于单页面应用的public/index.html
      template:'public/Home.html',
      //编译后 dist目录中输出的文件名
      filename:'Home.html'
    },
    art:{
      //入口文件，相当于多页面应用的 main.js
      entry:'src/pages/Art/main.js',
      //应用的模板，相当于单页面应用的public/index.html
      template:'public/Art.html',
      //编译后 dist目录中输出的文件名
      filename:'Art.html'
    },
    gallery:{
      //入口文件，相当于多页面应用的 main.js
      entry:'src/pages/ExploreGallery/main.js',
      //应用的模板，相当于单页面应用的public/index.html
      template:'public/ExploreGallery.html',
      //编译后 dist目录中输出的文件名
      filename:'ExploreGallery.html'
    },
    login:{
      //入口文件，相当于多页面应用的 main.js
      entry:'src/pages/Login/main.js',
      //应用的模板，相当于单页面应用的public/index.html
      template:'public/Login.html',
      //编译后 dist目录中输出的文件名
      filename:'Login.html'
    }
  }
}
