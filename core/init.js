const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager {
  // 初始化项目中的静态方法
  static initCore(app) {
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.loadConfig()
    InitManager.loadHttpException()
  }
  // 静态方法判断拿到的url是否是Router构造函数的属性
  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, {
      visit: watchModules
    })

    function watchModules(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }
  // 加载config到全局变量global
  static loadConfig(path = '') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global.config = config
  }
  // 加载异常判断到全局变量global
  static loadHttpException() {
    const errors = require('./http-exception')
    global.errs = errors
  }
}

module.exports = InitManager