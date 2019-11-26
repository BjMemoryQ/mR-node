// 登录接口
const Router = require('koa-router') // 导入koa-router
const router = new Router({
  prefix: '/v1/user'
})

router.get('/login', async (ctx) => {
  ctx.body = 'login success'
})

module.exports = router