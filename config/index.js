var url = 'https://cloud.paotui.com'; //正式服
var api = {
  shop: {
    index: url + '/food/shop/get'
  },
  goods: {
    cateGory: url + '/food/category/get',
    list: url + '/food/goods/list'
  },
  order: {
    submit: url + '/food/order/submit',
    pay: url + '/food/order/pay'
  },
  address: {
    edit: url + '/customer/address/setting',
    list: url + '/customer/address/get',
    setDefault: url + '/customer/address/default',
    remove: url + '/customer/address/delete'
  }
};
module.exports = api;