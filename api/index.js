function get(url, data, cb) {
  uni.showLoading({
    title: '加载中'
  })
  let obj = {
    ...data,
    account_id: '1000000',
    app_id: '100002',
    access_token: '1'
  }
  console.log(obj, 'obj')
  uni.request({
    url: url,
    method: 'get',
    data: obj,
    header: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    success: function (res) {
      uni.hideLoading()
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      uni.hideLoading()
      uni.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(res.data)
    }
  })
}
function paramsEncode (obj, str='') {
  let arr = [];
  let str1 = str
  for (let key in obj) {
    if (obj[key] instanceof Object || obj[key] instanceof Array) {
      if (str1 == '') {
        str = key
      } else {
        str = `${str1}[${key}]`
      }
      arr.push(paramsEncode(obj[key], str))
    } else if (str1 != '') {
      str = encodeURIComponent(`${str1}[${key}]`)
      arr.push(str + '=' + encodeURIComponent(obj[key]))
    } else {
      str = encodeURIComponent(key)
      arr.push(str + '=' + encodeURIComponent(obj[key]))
    }
  }
  return arr.join('&')
}
function post(url, data = {}, cb) {
  uni.showLoading({
    title: '加载中'
  })
  let obj = {
    ...data,
    account_id: '1000000',
    app_id: '100002',
    access_token: '1'
  }
  // console.log(paramsEncode(obj), 'paramsEncode(obj)')
  // function $params(obj) {
  //   var str = [];
  //   for (var p in obj) {
  //       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  //   }
  //   return str.join("&");
  // }
  // obj = $params(obj)
  console.log(paramsEncode(obj), 'obj')
  uni.request({
    url: url,
    data: paramsEncode(obj),
    // responseType: 'arraybuffer',
    method: 'post',
    header: {
      'Accept': 'application/json',
      // 'content-type': 'application/json'
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {
      uni.hideLoading()
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      uni.hideLoading()
      uni.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(res.data)
    }
  })
}
module.exports = {
  get: get,
  post: post
}