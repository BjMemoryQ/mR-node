// 登录接口
const Router = require('koa-router') // 导入koa-router
const router = new Router({
  prefix: '/v1/user'
})

router.get('/login', async (ctx) => {
  console.log(123123123);
  ctx.body = 'hello mizi'
})

module.exports = router