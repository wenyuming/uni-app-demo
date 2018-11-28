require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([3],[,,,function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=f(o(1)),s=f(o(5)),i=f(o(25)),a=f(o(29)),u=f(o(40)),c=f(o(41)),l=f(o(33));function f(e){return e&&e.__esModule?e:{default:e}}r.default.config.productionTip=!1,r.default.prototype.$store=l.default,r.default.prototype.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},r.default.prototype.config=c.default,r.default.prototype.$get=u.default.get,r.default.prototype.post=u.default.post,r.default.component("page-head",i.default),r.default.component("page-foot",a.default),s.default.mpType="app",new r.default(n({store:l.default},s.default)).$mount()},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(8),r=o.n(n),s=!1;var i=function(e){s||o(6)},a=o(0)(r.a,null,i,null,null);a.options.__file="C:\\Users\\admin\\Desktop\\hx项目\\blcoudstage\\blcoudstage\\App.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=a.exports},function(e,t){},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}},,,,,,,,,,,,,,,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return"function"==typeof e},r=/^on|^create|Sync$|Manager$|^pause/,s=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],i=function(e){return(!r.test(e)||"createBLEConnection"===e)&&!~s.indexOf(e)},a=function(e){return function(){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n(s.success)||n(s.fail)||n(s.complete)?e.apply(void 0,[s].concat(o)):new Promise(function(t,n){e.apply(void 0,[Object.assign({},s,{success:t,fail:n})].concat(o)),Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(o){return t.resolve(e()).then(function(){return o})},function(o){return t.resolve(e()).then(function(){throw o})})}}).then(function(e){return[null,e]}).catch(function(e){return[e]})}},u=1e-4,c=750,l=!1,f=0,d=0;function p(e,t){var o,n,r,s;return 0===f&&(o=wx.getSystemInfoSync(),n=o.platform,r=o.pixelRatio,s=o.windowWidth,f=s,d=r,l="ios"===n),0===e?0:(e=e/c*(t||f),0===(e=Math.floor(e+u))?1!==d&&l?.5:1:e)}var h={oauth:["weixin"],share:["weixin"],payment:["wxpay"],push:["weixin"]};var v=Object.freeze({getProvider:function(e){var t=e.service,o=e.success,r=e.fail,s=e.complete,i=!1;h[t]?(i={errMsg:"getProvider:ok",service:t,provider:h[t]},n(o)&&o(i)):(i={errMsg:"getProvider:fail:服务["+t+"]不存在"},n(r)&&r(i)),n(s)&&s(i)},subscribePush:function(e){var t=e.fail,o=e.complete,r={errMsg:"subscribePush:fail:微信小程序不支持 subscribePush 方法"};n(t)&&t(r),n(o)&&o(r)},unsubscribePush:function(e){var t=e.fail,o=e.complete,r={errMsg:"unsubscribePush:fail:微信小程序不支持 unsubscribePush 方法"};n(t)&&t(r),n(o)&&o(r)},onPush:function(e){var t=e.fail,o=e.complete,r={errMsg:"onPush:fail:微信小程序不支持 onPush 方法"};n(t)&&t(r),n(o)&&o(r)},offPush:function(e){var t=e.fail,o=e.complete,r={errMsg:"offPush:fail:微信小程序不支持 offPush 方法"};n(t)&&t(r),n(o)&&o(r)},share:function(e){var t=e.fail,o=e.complete,r={errMsg:"share:fail:微信小程序不支持 share 方法"};n(t)&&t(r),n(o)&&o(r)}}),g={},m={os:{wx:!0}};"undefined"!=typeof Proxy?g=new Proxy({},{get:function(e,t){return m.hasOwnProperty(t)?m[t]:"upx2px"===t?p:v[t]?i(t)?a(v[t]):v[t]:wx.hasOwnProperty(t)?i(t)?a(wx[t]):wx[t]:void 0}}):(g.upx2px=p,Object.keys(m).forEach(function(e){g[e]=m[e]}),Object.keys(v).forEach(function(e){i(e)?g[e]=v[e]:g[e]=a(v[e])}),Object.keys(wx).forEach(function(e){wx.hasOwnProperty(e)&&(i(e)?g[e]=a(wx[e]):g[e]=wx[e])}));var y=g;t.default=y},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(27),r=o.n(n),s=o(28),i=!1;var a=function(e){i||o(26)},u=o(0)(r.a,s.a,a,null,null);u.options.__file="C:\\Users\\admin\\Desktop\\hx项目\\blcoudstage\\blcoudstage\\components\\page-head.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] page-head.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},function(e,t){},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"page-head",props:{title:{type:String,default:""}}}},function(e,t,o){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"uni-page-head"},[t("view",{staticClass:"uni-page-head-title"},[this._v(this._s(this.title))])])};n._withStripped=!0;var r={render:n,staticRenderFns:[]};t.a=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(31),r=o.n(n),s=o(32),i=!1;var a=function(e){i||o(30)},u=o(0)(r.a,s.a,a,null,null);u.options.__file="C:\\Users\\admin\\Desktop\\hx项目\\blcoudstage\\blcoudstage\\components\\page-foot.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] page-foot.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},function(e,t){},function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"page-foot",props:{name:{type:String,default:""}},methods:{submit:function(){e.showModal({content:"hello uni-app开源地址为https://github.com/dcloudio/uni-app/tree/master/examples，请在这个开源项目上贡献你的代码",showCancel:!1})}}}}).call(t,o(24).default)},function(e,t,o){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"page-share-title"},[t("text",[this._v("感谢"+this._s(this.name)+"提供本示例，")]),t("text",{staticClass:"submit",attrs:{eventid:"fcj-0"},on:{tap:this.submit}},[this._v("我也提交")])])};n._withStripped=!0;var r={render:n,staticRenderFns:[]};t.a=r},function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=i(o(34)),r=i(o(1)),s=i(o(37));function i(e){return e&&e.__esModule?e:{default:e}}r.default.use(s.default);var a=new s.default.Store({state:{hasLogin:!1,loginProvider:"",openid:null},mutations:{login:function(e,t){e.hasLogin=!0,e.loginProvider=t},logout:function(e){e.hasLogin=!1,e.openid=null},setOpenid:function(e,t){e.openid=t}},actions:{getUserOpenId:function(){var t,o=(t=n.default.mark(function t(o){var r=o.commit,s=o.state;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(t,o){s.openid?t(s.openid):e.login({success:function(e){r("login"),setTimeout(function(){console.log("uni.request mock openid[123456789]"),r("setOpenid","123456789"),t("123456789")},1e3)},fail:function(e){console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",e),o(e)}})});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,o){return function n(r,s){try{var i=e[r](s),a=i.value}catch(e){return void o(e)}if(!i.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});t(a)}("next")})});return function(e){return o.apply(this,arguments)}}()}});t.default=a}).call(t,o(24).default)},,,,,,,function(e,t,o){"use strict";(function(t){var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=[],r=t;for(var s in e)e[s]instanceof Object||e[s]instanceof Array?(t=""==r?s:r+"["+s+"]",o.push(n(e[s],t))):""!=r?(t=encodeURIComponent(r+"["+s+"]"),o.push(t+"="+encodeURIComponent(e[s]))):(t=encodeURIComponent(s),o.push(t+"="+encodeURIComponent(e[s])));return o.join("&")}e.exports={get:function(e,n,r){t.showLoading({title:"加载中"});var s=o({},n,{account_id:"1000000",app_id:"100002",access_token:"1"});console.log(s,"obj"),t.request({url:e,method:"get",data:s,header:{Accept:"application/json","content-type":"application/json"},success:function(e){return t.hideLoading(),"function"==typeof r&&r(e.data)},fail:function(){return t.hideLoading(),t.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1}),"function"==typeof r&&r(res.data)}})},post:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments[2];t.showLoading({title:"加载中"});var i=o({},r,{account_id:"1000000",app_id:"100002",access_token:"1"});console.log(n(i),"obj"),t.request({url:e,data:n(i),method:"post",header:{Accept:"application/json","content-type":"application/x-www-form-urlencoded"},success:function(e){return t.hideLoading(),"function"==typeof s&&s(e.data)},fail:function(){return t.hideLoading(),t.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1}),"function"==typeof s&&s(res.data)}})}}}).call(t,o(24).default)},function(e,t,o){"use strict";var n="https://cloud.paotui.com",r={shop:{index:n+"/food/shop/get"},goods:{cateGory:n+"/food/category/get",list:n+"/food/goods/list"},order:{submit:n+"/food/order/submit",pay:n+"/food/order/pay"},address:{edit:n+"/customer/address/setting",list:n+"/customer/address/get",setDefault:n+"/customer/address/default",remove:n+"/customer/address/delete"}};e.exports=r}],[3]);
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map