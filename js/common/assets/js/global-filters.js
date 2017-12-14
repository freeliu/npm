/**
 * Created by Administrator on 2016/12/10.
 * vue全局过滤器
 */

import date from './utils/date'

let format = (value) => {
  return value >= 10 ? value : '0' + value
}
//v1.0版本原有过滤器，由于要改动较多，不统一放到枚举中


let filters = {
  yesOrno: function (t) {
    switch (t) {
      case 1:
        return "无法完成指定动作";
      case 3:
        return "有知识但仍需加强训练";
      case 5:
        return "能完成指定动作";
      default:
        return "—";

    }
  },
  fuhedu: function (t) {
    switch (t) {
      case 1:
        return "完全不符合";
      case 2:
        return "不符合";
      case 3:
        return "中立或难以观察";
      case 4:
        return "符合";
      case 5:
        return "完全符合";

    }
  },
  teacherType: function (t) {
    t = parseInt(t);
    switch (t) {
      case 1:
        return "教师";
      case 2:
        return "教练";
      case 3:
        return "辅导员";
      default:
        return ""
    }
  },
  genderName: function (t) {
    t = parseInt(t);
    switch (t) {
      case 1:
        return "男";
      case 2:
        return "女";
      default:
        return " "
    }
  },
  /**
   * 格式化日期成2016-10-05 expired use toYYMMdd instead
   * @param d
   */
  formatDateTo_yyyy_MM_dd(d) {
    return date.toYYMMdd(d)
  },
  /**
   * 格式化日期成2016-10-05
   * @param d
   * @returns {string}
   */
  toYYMMdd(d){
    return date.toYYMMdd(d)
  },
  toHHmm(d)
  {
    return date.toHHmm(d)
  },
  toMMddChinese(d)
  {
    return date.toMMddChinese(d)
  },
  formatTime(time, type){
    let date = new Date(time * 1000)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    let result
    switch (type) {
      case 0: // 01-05
        result = `${format(month)}-${format(day)}`
        break
      case 1: // 11:12
        result = `${format(hours)}-${format(minutes)}`
        break
      case 2: // 2015-01-05
        result = `${year}-${format(month)}-${format(day)}`
        break
      case 3: // 2015-01-05 11:12
        result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}`
        break
      case 4: // 2015-01-05 11:12:06
        result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`
        break
      default:
        result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`
        break
    }
    return result
  },
  //格式化日期成2016年10月5日，一位日期不自动在前面加0
  chineseDateTime(date)
  {
    if (!isNaN(date)) {
      date = new Date(parseInt(date));
      var year = date.getFullYear(),
        MM = date.getMonth() + 1,
        dd = date.getDate();
      return year + '年' + MM + '月' + dd + "日";
    } else {
      return ''
    }

  }

}

//v1.1 枚举过滤器，直接从枚举中引入
import enums from "./enums.js";


for (let k in enums) {
  filters[k] = function (val) {
    return enums[k][val];
  }
}

export default filters;
