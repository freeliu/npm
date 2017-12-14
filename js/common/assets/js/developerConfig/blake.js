/**
 * blake 开发配置信息,重要设计原则：只改属于自己电脑的配置信息，不是自己电脑，所有配置值都是null，
 */

let apiDomain = null
let auth = null

let host = window.location.host

// 重要：判断是自己电脑
if (host.indexOf('192.168.1.208') > -1 || host.indexOf('blake') > -1) {
  //joshon 电脑接口
  apiDomain = '//lumen-evaluateadmin.meishakeji.com'
  //写死一个授权信息
  auth = '5fba477da93d54cc'
}

// 配置值
export {
  apiDomain,
  auth
}
