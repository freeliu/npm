/**
 * Created by olive on 2017/7/31.
 */

/**
 * 图片域名
 * @type {string}
 */
const imgDomain = '//meishakeji-oss1.oss-cn-shenzhen.aliyuncs.com/'

import {apiDomain as apiDomain_olive} from './developerConfig/olive'
import {apiDomain as apiDomain_jayden} from './developerConfig/jayden'
import {apiDomain as apiDomain_blake} from './developerConfig/blake'


let apiDomain = window.location.origin

if (apiDomain_jayden) {
  apiDomain = apiDomain_jayden
} else if (apiDomain_olive) {
  apiDomain = apiDomain_olive
} else if (apiDomain_blake) {
	apiDomain = apiDomain_blake
} else if (apiDomain.indexOf("local") > -1 || apiDomain.indexOf("192") > -1 || apiDomain.indexOf("dev") > -1) {
  apiDomain = "//test-evaluateadmin.meishakeji.com"
}

/**
 * api接口地址
 * @type {string}
 */
const apiUrl = apiDomain + "/api/"

export {
  apiUrl,
  imgDomain
}
