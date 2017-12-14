/**
 * Created by Administrator on 2016/11/29
 * 封装公共方法和属性
 */
'use strict'
import date from './utils/date'
import {imgDomain} from './config'
import api from './api'
import {auth as auth_olive} from './developerConfig/olive'
import {auth as auth_jayden} from './developerConfig/jayden'
import {auth as auth_blake} from './developerConfig/blake'


/**
 * 显示加载图标
 */
function showLoading() {
  var loadingHtml = `<div id="global-loading"><div  class="sk-fading-circle">
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
</div></div> `;
  if ($("#global-loading").length === 0) {
    $("body").append(loadingHtml);
  }
  $("#global-loading").show();
};

/**
 * 隐藏加载图标
 */
function hideLoading() {
  $("#global-loading").hide();
};

/**
 * 显示删除二次确认
 */
function confirmDelete(confirmFun, msg) {
  msg = msg || "确定删除吗？";
  let randomID = "dialog_" + Math.random().toString().replace(".", "");
  let $dialog = $("<div>", {id: randomID, 'class': 'dialog'});
  $dialog.html(`
         <div class="mask" onclick="this.parentNode.remove()"></div>
         <div class="dialog-delete">
         <span class="f-16">提示</span>
        <img style="position: absolute ;right:20px;cursor: pointer" onclick="this.parentNode.parentNode.remove()" src="/static/img/icon-close.png" width="15" height="14">
        <h4>${msg}</h4>
        <div class="flex justify-content-flex-end ">

          <el-button onclick="this.parentNode.parentNode.parentNode.remove()" class="btn-gray-lg-plain cursor-pointer  ">取消</el-button>
          <el-button  id="btn_confirm_${randomID}" onclick="this.parentNode.parentNode.parentNode.remove()" class="btn-red-lg ml-10 cursor-pointer ">删除</el-button>

        </div>
        </div>`
  );
  $("body").append($dialog);
  $("[id^=btn_confirm_]", $dialog).click(function () {
    if (typeof (confirmFun) === "function") {
      confirmFun();
    }
  })
};


function confirm(confirmFun, msg, btnName) {
  btnName = btnName || "确定";
  let randomID = "dialog_" + Math.random().toString().replace(".", "");
  let $dialog = $("<div>", {id: randomID, 'class': 'dialog'});
  $dialog.html(`
         <div class="mask" onclick="this.parentNode.remove()"></div>
         <div class="dialog-delete">
        <img onclick="this.parentNode.parentNode.remove()" src="/static/img/icon-close.png" width="15" height="14">
        <h4>${msg}</h4>
        <a href="javascript:void (0)"  id="btn_confirm_${randomID}"  onclick="this.parentNode.parentNode.remove()"  tabindex="1" class="btn-green-lg w-110">${btnName}</a><a href="javascript:void(0)" tabindex="2" onclick="this.parentNode.parentNode.remove()" class="btn-gray-lg-plain w-110 ml-20">取消</a>
        </div>`
  );
  $("body").append($dialog);
  $("[id^=btn_confirm_]", $dialog).click(function () {
    if (typeof (confirmFun) === "function") {
      confirmFun();
    }
  })
};

function downLoadExcel(file, fileName, btnName) {
  btnName = btnName || "下载";
  let msg = "数据已导出，请点击下载";
  let randomID = "dialog_" + Math.random().toString().replace(".", "");
  let $dialog = $("<div>", {id: randomID, 'class': 'dialog'});
  $dialog.html(`
         <div class="mask" onclick="this.parentNode.remove()"></div>
         <div class="dialog-delete">
        <img onclick="this.parentNode.parentNode.remove()" src="/static/img/icon-close.png" width="15" height="14">
        <h4>${msg}</h4>
        <a href="${file}" id="btn_confirm_${randomID}" download="${fileName}.xlsx" title="${fileName}.xlsx"  onclick="this.parentNode.parentNode.remove()"  tabindex="1" class="btn-green-lg w-110">${btnName}</a>
        <a href="javascript:void(0)" tabindex="2" onclick="this.parentNode.parentNode.remove()" class="btn-gray-lg-plain w-110">取消</a>
        </div>`
  );
  $("body").append($dialog);
  $("[id^=btn_confirm_]", $dialog).click(function () {
    if (typeof (confirmFun) === "function") {
      confirmFun();
    }
  })
};


//显示消息后自动关闭
function popMsg(msgStr, callback, mSecond) {
  showMsg(msgStr);
  mSecond = mSecond || 2000;
  setTimeout(function () {
    hideMsg();
    $.isFunction(callback) ? callback() : null;
  }, mSecond);
};

function showMsg(msgStr) {
  var msg = '<div id="msg"  style="position: fixed;z-index:9999; left: 0;right: 0;top: 0;bottom: 0;display: none;align-items: center;justify-content: center"> ' +
    '<div  style="background-color: rgba(40, 40, 40, 0.75); border-radius: 5px;color: white;padding: 20px;display: inline-block" > </div> </div>';
  if ($('#msg').length == 0) {
    $('body').append(msg);
  }
  $("#msg div").text(msgStr);
  $("#msg").css('display', 'flex');
}

function hideMsg() {
  $("#msg").hide();
}

//跳转到统一登录页
function gotoCommonLogin(flag) {
  var href = window.location.href;
  var base_url = "";
  if (href.indexOf("localhost") != -1 || href.indexOf("192") != -1) {
    base_url = "//test-admin.meishakeji.com";
  } else if (href.indexOf("test") != -1) {
    base_url = "//test-admin.meishakeji.com";
  } else if (href.indexOf("pre") != -1) {
    base_url = "//pre-admin.meishakeji.com";
  } else {
    base_url = "//admin.meishakeji.com";
  }

  if (flag) { //本系统退出，跳新系统首页
    // var indexAddress = base_url + "/index";
    // window.open(indexAddress, '_self');
    window.location = base_url + "/index";
  } else {
    // var loginAddress = base_url + "/login?type=outlink&target=" + encodeURIComponent(href);
    // window.open(loginAddress, '_self');
    window.location = base_url + "/login?type=outlink&target=" + encodeURIComponent(href)

  }

}


function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

/**
 * 获取auth
 */
function getAuth() {
  let auth = getCookie('myAuth')
  if (auth_olive) {
    auth = auth_olive
  } else if (auth_jayden) {
    auth = auth_jayden
  } else if (auth_blake) {
    auth = auth_blake
  }
  return auth
}

/**
 * @param  {String} url
 * @param {Object|null} data
 * @param {String} type
 * @param {Function}callback
 * @returns {xhr 异步对象}
 */
function ajax(url, data, type, callback) {
  let auth = getAuth(),
    xhr = null,
    //后台要求的格式提交数据
    formatData = {}
  if (auth) {
    formatData.auth = auth
  }
  if (data) {
    formatData.data = JSON.stringify(data);
  }
  xhr = $.ajax({
    url: url
    , data: formatData
    , type: type
    , dataType: 'json'
    , success: function (jsonData) {
      //登录失效后跳转到登录页
      if (jsonData.code == '-1001') {
        localStorage.removeItem('auth');
        gotoCommonLogin()
        // popMsg(jsonData.msg, function () {
        //   // window.location = _this.weChatAuthUrl;
        //   vm.$router.push("login");
        // }, 2000)
      }
      else {
        if ($.isFunction(callback)) {
          callback(jsonData);
        }
      }
    }
    , error: function (msg) {
      //一般是服务器异常
      common.popMsg('网络繁忙，或服务器异常，请稍候重试')
      common.hideLoading()
      // console.dir(msg);
    }
  });
  //百度统计
  // if (_hmt) {
  //   _hmt.push(['_trackEvent', "api调用",  url]);
  // opt_value 测试，结论：智能填数字
  // opt_value：事件的一些数值信息，比如权重、时长、价格等等，在报表中可以看到其平均值等数据
  // _hmt.push(['_trackEvent', "api调用_opt_value_num_1", `api请求,from page:${location.href}` , url, 1]);
  // }
  return xhr;
};


/**
 * @param  {String} url
 * @param {Object|null} data
 * @param {Function} callback
 * @returns {XHR}
 */
function postJson(url, data, callback) {
  return ajax(url, data, 'post', callback);
}

/**
 * 授权信息使用参数传递给后台，使用get方法不安全
 * @type {postJson}
 */
let getJson = postJson

function getLocalTimes(second, flag) {
  var d = new Date(second * 1000);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  var hour = d.getHours();
  if (month < 10) {
    month = '0' + month;
  }
  if (date < 10) {
    date = '0' + date;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  var mm = d.getMinutes();
  if (mm < 10) {
    mm = '0' + mm;
  }
  var s = d.getSeconds();
  if (s < 10) {
    s = '0' + s;
  }
  if (flag) {
    return '';
  } else {
    return year + "-" + month + "-" + date;
  }
}

//格式化时间
function formatDateTo_yyyy_MM_dd(date) {
  if (!isNaN(date)) {
    date = new Date(parseInt(date));
  }
  var yyyy = date.getFullYear(),
    MM = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1),
    dd = date.getDate() > 9 ? date.getDate() : "0" + date.getDate()
  return yyyy + '年' + MM + '月' + dd + '日';
}

//获取url参数值
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

//浏览器信息
let browser = function () {
  let browser = {isIE: false, ieVersion: -1, isEdge: false};
  let ua = navigator.userAgent.toLowerCase();
  //用于检测是否ie，及其版本
  if (ua.indexOf("edge") > -1) {
    browser.isEdge = true;
  } else if (ua.indexOf("rv:11") > -1) {
    browser.isIE = true;
    browser.ieVersion = 11;
  } else if (ua.indexOf("msie") > -1) {
    browser.isIE = true;
    browser.ieVersion = parseInt(ua.toLowerCase().match(/msie ([\d.]+)/)[1]);
  }

  browser.platform = {
    isMac: navigator.platform.toUpperCase().indexOf('MAC') >= 0
  };

  // browser.isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
  browser.isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false;
  browser.isSafari = false;
  browser.isChrome = false;
  if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
      browser.isChrome = true;
    } else {
      browser.isSafari = true;
    }
  }
  browser.isLocal = /127.0.0.1|localhost|192.168/.test(window.location.host)
  browser.isTest = /test-/.test(window.location.host)
  browser.isPre = /pre-/.test(window.location.host)
  return browser;
}()

//复制对象，原对象属性修改不影响新对象属性
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 创建并发送form表单
function createAndSendForm(action, paramObj) {
  let form = document.createElement("form");
  document.body.appendChild(form);
  form.method = "POST";
  form.action = action;
  for (let k in paramObj) {
    let element1 = document.createElement("input");
    element1.name = k
    element1.value = paramObj[k];
    element1.type = 'hidden'
    form.appendChild(element1);
  }
  form.submit();
}

/**
 *获取数组元素下标
 * @param {Array} arr
 * @param item
 * @returns {number}
 *
 */


function arrGetItemIndex(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return i
    }
  }
}


function imgAddDomain(src) {
  try {
    let url = src || ''
    if (url.indexOf("http") == 0 || url.indexOf("//") == 0 || url.indexOf("data") == 0) {
      return url;
    }
    else if (url == "") {
      return '/static/img/headImg.jpg';
    }
    else {
      return imgDomain + url;
    }
  } catch (e) {

  }
}


//  body 取消和恢复滚动用
let oriBodyStyle = {
  overflow: document.body.style.overflow,
  position: document.body.style.position,
  width: document.body.style.width
}

/**
 * 禁止滚动，弹窗时使用
 */
function lockScroll() {
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
}

/**
 * 取消禁止滚动，弹窗关闭时使用
 */
function unLockScroll() {
  document.body.style.overflow = oriBodyStyle.overflow
  document.body.style.position = oriBodyStyle.position
  document.body.style.width = oriBodyStyle.width

}

/**
 * 数组删除元素
 * @param arr
 * @returns {*}
 */
function arrayRemoveItem(arr) {
  var what, a = arguments, L = a.length, ax;
  while (L > 1 && arr.length) {
    what = a[--L];
    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }
  return arr;
}

/**
 * 复制对象属性到另一个对象
 * @param srcObj
 * @param targetObj
 */
function copyPropsToObj(srcObj, targetObj) {
  console.log(srcObj)
  for (let k in srcObj) {
    targetObj[k] = srcObj[k]
  }
}

/**
 * 金钱加逗号，只支持小额金钱
 * @param num
 * @return {String}
 */
function moneyAddComma(num) {
  num = num.toString()
  //元
  let y = num.split('.')[0]
  //分
  let c = num.split('.')[1] || ''
  if (y.length > 3) {
    let arr = y.split('')
    arr.splice(arr.length - 3, 0, ',')
    return arr.join('') + c;
  } else {
    return num
  }
}


let common = {
  getAuth,
  showLoading,
  hideLoading,
  confirmDelete,
  postJson,
  getJson,
  api,
  popMsg,
  showMsg,
  hideMsg,
  confirm,
  getUrlParam,
  browser,
  clone,
  downLoadExcel,
  createAndSendForm,
  getLocalTimes,
  formatDateTo_yyyy_MM_dd,
  arrGetItemIndex,
  imgAddDomain,
  lockScroll,
  unLockScroll,
  arrayRemoveItem,
  gotoCommonLogin,
  getCookie,
  copyPropsToObj,
  moneyAddComma
}

for (let k in date) {
  common[k] = date[k]
}
//允许跟上面冗余，更好智能提示
common.date = date

export default common







