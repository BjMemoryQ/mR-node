const bcrypt = require('bcryptjs') // 第三方密码加密库
// 创建user表 结构
const {
  sequelize
} = require('../../core/db')

const {
  Sequelize,
  Model
} = require('sequelize')

class User extends Model {
  // 登录 查询 数据库
  // static async verifyEmailPassword (email, plainPassword) {
  //   const user = await User.findOne({
  //     where: {
  //       email
  //     }
  //   })
  //   if (!user) {
  //     throw new global.errs.NotFound('账号不存在')
  //   }
  //   const correct = bcrypt.compareSync(plainPassword, user.password)
  //   if (!correct) {
  //     throw new global.errs.AuthFailed('密码不正确')
  //   }
  //   return user
  // }
}

User.init({
  // 主键 不能重复 不能为空
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true // id自动增长
  },
  username: Sequelize.STRING,
  password: {
    type: Sequelize.STRING,
    // 添加数据处理得方法 观察者模式
    set (val) {
      // 获取密码的盐
      const salt = bcrypt.genSaltSync(10) // 数字越大越安全
      // 生成加密之后的密码 同样的密码 但是生成的码不一样 防范彩虹攻击
      const psw = bcrypt.hashSync(val, salt)
      this.setDataValue('password', psw)
    }
  },
  email: {
    type: Sequelize.STRING(128), // 字符串位数
    unique: true // 唯一
  },
  openid: {
    type: Sequelize.STRING(64), // 字符串位数
    unique: true // 唯一
  },
  test: Sequelize.STRING
}, {
    sequelize,
    tableName: 'users'
  })

module.exports = {
  User
}