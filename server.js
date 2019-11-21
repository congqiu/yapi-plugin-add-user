const controller = require('./controllers/user');

module.exports = function() {
  this.bindHook('add_router', function(addRouter) {
    // 添加用户
    addRouter({
      controller: controller,
      method: 'post',
      path: 'fine/user/add',
      action: 'add'
    });
  });
};
