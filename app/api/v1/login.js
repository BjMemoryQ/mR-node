// 注册接口
const Router = require('koa-router') // 导入koa-router
const router = new Router({ prefix: 'v1/user' })


router.post('/login', async (ctx) => {
  console.log(123123);
  ctx.body = 'success'
})

module.exports = router