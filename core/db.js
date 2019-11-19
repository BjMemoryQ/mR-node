// 连接数据库 配置参数自动生成表  
// 由于配置数据库 类型需要安装一个mysql

const Sequelize = require('sequelize')
const {
  dbName,
  user,
  port,
  host,
  password
} = require('../config/config').database // 获取枚举的数据库参数
const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql', // 指定数据库类型
  host,
  port,
  logging: true,
  timezone: '+08:00', // 设置时区
  define: {
    // create_time  update_time  delete_time  建议存在
    timestamps: true, // 设置上之后 不会默认添加起始时间
    paranoid: true, // 添加软删除时间
    createAt: 'create_time', // 修改字段的名字
    underscored: true
  }
})

sequelize.sync()
module.exports = {
  sequelize
}