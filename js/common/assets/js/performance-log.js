/**
 * Created by olive on 2016/12/26.
 * 前端性能记录
 */

//显示时间差
function getSpan(t1, t2) {
  let span = t2 - t1;
  return `${span}ms`;
}
let timing = window.performance.timing.toJSON() ;

//接收一步请求的地址，根据一步
let apiUrl="http://localhost:55143/Home/LogTiming";

//原始信息
$.post(apiUrl,{timing:JSON.stringify(timing)});

//从开始导航到展示页面（不含图片），所用的时间
$.post(apiUrl,{pageLoadTime: getSpan(timing.navigationStart,timing.domInteractive)});

//从开始导航到展示页面（含图片），所用的时间
$.post(apiUrl,{pageCompleteTime:getSpan(timing.navigationStart,timing.domComplete)});
