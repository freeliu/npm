/**
 * jayden 重要设计原则：只改属于自己电脑的配置信息，不是自己电脑，所有配置值都是null
 */

let apiDomain = null
let auth = null

let host = window.location.host

// todo 具体ip
if (host.indexOf('192.168.1.9999') > -1 || host.indexOf('jayden') > -1) {
  // todo 改成对应开发者的域名
  apiDomain = '//test-evaluateadmin.meishakeji.com'
  //写死一个授权信息 需要的话就是用  有需要则使用
  // auth = '2543438e976d5411'
}

//配置值
export {
  apiDomain,
  auth
}

