/**
 * Created by olive on 2016/12/21.
 * add in v1.1
 *
 * 存放 枚举数据，1.0版本已写死的measureType、sex、teacherType暂不抽离到此文件
 *
 */

/**
 * 营团类型
 * @type {{1: 独立营, 2: 亲子营, 3: 成人营}}
 */
const campType = {
  1: "独立营",
  2: "亲子营",
  3: "成人营"
}


/**
 * 营期
 * @type {{1: string, 2: string, 3: string, 4: string}}
 */
const campTerm = {
  1: "周末营",
  2: "夏令营",
  3: "冬令营",
  4: "课程",
}
const campStatus = {
  // 上架1 未上架0
  1: "上架",
  0: "未上架"

}

const campusName=
  [
    {value:'三亚校区', label: '三亚校区'},
    {value:'松花湖校区', label: '松花湖校区'},
    {value:'宁波校区', label: '厦门校区'},
    {value:'梅沙户外' , label: '梅沙户外'},
    {value:'双月湾校区' , label: '双月湾校区'},
    {value:'清远校区' , label: '清远校区'},
    {value:'浪骑校区' , label: '浪骑校区'},
  ]
const type = {
  1: "户外",
  2: "社区"
}

const communityType = {
  '1': '全日制学校',
  '2': '课程包',
  '3': '常规兴趣班',
  '4': '非常规兴趣班',
  '5': '亲子课程',
}

/**
 *
 * @type {{0: 不可定制, 1: 可定制}}
 */
const campIsCustom = {
  0: "否",
  1: "是"
}
const sex=
  [
    {value: '1', label: '男'},
    {value: '2', label: '女'}
  ]
// 以下是为了配合饿了么框架写的选择下拉框,全部以及选择而写的,有时间的话可以把上面的一起合并以下,减少代码量.上面的在过滤器中有使用
const optionscampStatus =
  [
    {value: '-1', label: '全部'},
    {value: '0', label: '未上架'},
    {value: '1', label: '上架'}
  ]
const optionstype =
  [
    {value: '1', label: '户外'},
    {value: '2', label: '社区'}
  ]
const optionscampType =
  [
    {value:'-1', label: '全部'},
    {value:'1', label: '独立营'},
    {value:'2', label: '亲子营'},
    {value:'3' , label: '成人营'}
  ]
const optionscampTerm =
  [
    {value: '-1', label: '全部'},
    {value: '1', label: '周末营'},
    {value: '2', label: '夏令营'},
    {value: '3', label: '冬令营'},
    {value: '4', label: '课程'}
  ]
const optionscampIsCustom =
  [
    {value: '-1', label: '全部'},
    {value: '0', label: '否'},
    {value: '1', label: '是'},
  ]
// const optionscommunityType=
//   [
//     {value: '-1', label: '全部'},
//     {value: '1', label: '常规兴趣班'},
//     {value: '2', label: '全时段综合能力培训'},
//     {value: '3', label: '非常规兴趣班'},
//     {value: '4', label: '体验课'},
//     {value: '5', label: '活动课'},
//   ],
const optionscommunityType =
  [
    {value: '-1', label: '全部'},
    {value: '1', label: '全日制学校'},
    {value: '2', label: '课程包'},
    {value: '3', label: '常规兴趣班'},
    {value: '4', label: '非常规兴趣班'},
    {value: '5', label: '亲子类型'},
  ]
const optionscommunityType1 =
  [
    {value: '1', label: '全日制学校'},
    {value: '2', label: '课程包'},
    {value: '3', label: '常规兴趣班'},
    {value: '4', label: '非常规兴趣班'},
    {value: '5', label: '亲子课程'},
  ]
const optionscampType1 =
  [
    {value: '1', label: '独立营'},
    {value: '2', label: '亲子营'},
    {value: '3', label: '成人营'}
  ]
const optionscampTerm1 =
  [
    {value: '1', label: '周末营'},
    {value: '2', label: '夏令营'},
    {value: '3', label: '冬令营'},
    {value: '4', label: '课程'}
  ]


const gradeType = {
  1: '五分制',
  2: '测量制',
  3: '通过制',
  4: '量表',
}
const measureType = {
  1: '___分___秒',
  2: '___秒',
  3: '___米',
  4: '___厘米',
}
const measureTypeUnit = {
  2: '秒',
  3: '米',
  4: '厘米',
}

const lessonRepeatType = {
  0: '不重复',
  1: '按周重复',
  2: '按天重复',
}
const week = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '日',
}


export default {
  communityType,
  type,
  campType,
  campTerm,
  campIsCustom,
  campStatus,
  optionscampStatus,
  optionscampType,
  optionscampTerm,
  optionscampIsCustom,
  optionscommunityType,
  optionstype,
  optionscampType1,
  optionscampTerm1,
  optionscommunityType1,
  sex,
  gradeType,
  measureType,
  measureTypeUnit,
  campusName,
  lessonRepeatType,
  week
}


