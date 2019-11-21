// 注册接口
const Router = require('koa-router') // 导入koa-router
const {
  RegisterValidator
} = require('../../validators/validator')
const router = new Router({
  prefix: '/v1/user'
})
const { User } = require('../../models/user')


router.post('/register', async (ctx) => {
  // 校验参数是否合法 使用validator.js
  const v = await new RegisterValidator().validate(ctx)
  // 把数据存到mysql中
  const user = {
    email: v.get('body.email'),
    password: v.get('body.password2'),
    username: v.get('body.username')
  }
  await User.create(user)
  // 注册成功返回的msg
  ctx.body = 'success1'
})

module.exports = router