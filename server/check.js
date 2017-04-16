// 检查用户是否登录

module.exports = {
  checkLogin: function (req, res, next) {
    if (!req.session.user) {
      console.log('用户未登录')
      return req.redirect('/signin')
    }
    next()
  },

  checkNotLogin: function (req, res, next) {
    if (req.session.user) {
      console.log('用户已登录')
      return req.redirect('/signin')
    }
    next()
  }
}