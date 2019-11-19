const {
  LinValidator,
  Rule
} = require('../../core/lin-validator')

class RegisterValidator extends LinValidator {
  constructor() {
    super()
    this.email = [new Rule('isEmail', 'email不符合规范')]
    this.password1 = [
      new Rule('isLength', '密码长度6-32', {
      min: 6,
      max: 32
    }), 
    new Rule('matches', '密码不符合规范', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]')]
    this.password2 = this.password1
    this.username = [
      new Rule('isLength', '昵称长度4-32', {
        min: 4,
        max: 32
      })]
  }

  validatePassword(vals) {
    const password1 = vals.body.password1
    const password2 = vals.body.password2
    if (password1 !== password2) throw new Error('两个密码必须相同')
  }
}

module.exports = {
  RegisterValidator
}