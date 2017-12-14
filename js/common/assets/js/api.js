import {apiUrl} from './config'

export default {
  responseCode: {
    success: 0,
    noLogin: -1001,
    noAuthority: -1002
  },
  login: apiUrl + "admin/adminaccount/login",
  checkLogin: apiUrl + "admin/adminaccount/checklogin",

  //评价指标库
  evaluate: {
    //获取一级指标
    getL1: apiUrl + "admin/evaluate/getrootevaluate",
    //指标细则列表
    getEvaluateList: apiUrl + "admin/evaluate/getevaluatelist",
    // 新增三级指标
    addIndex: apiUrl + "admin/evaluate/addindex",
    //新增指标细则
    addIndexDetail: apiUrl + "admin/evaluate/addindexdetail",
    //编辑评价指标
    editIndexDetail: apiUrl + "admin/evaluate/editindexdetail",
    //禁用评价指标
    disableIndex: apiUrl + "admin/evaluate/disableindex",
    //启用评价指标
    enableIndex: apiUrl + "admin/evaluate/enableindex",
    //删除评价指标
    deleteIndex: apiUrl + "admin/evaluate/deleteindex",
    uploadIndexDetail: apiUrl + "admin/evaluate/uploadindexdetail",
    getAgeList: apiUrl + 'admin/evaluate/getagelist'

  },
  //指标课程(基础课程)
  course: {
    beforeAdd: apiUrl + "admin/course/beforeadd",
    add: apiUrl + "admin/course/add",

    edit: apiUrl + "admin/course/edit",
    medallist: apiUrl + "admin/medal/list",

    detail: apiUrl + "admin/course/detail", //courseId
    delete: apiUrl + "admin/course/delete",//courseId
    list: apiUrl + "admin/course/list",//null
    search: apiUrl + "admin/course/search",//searchField:"1001",
    //检查课程指标能否删除
    isIndicateCanDelete: apiUrl + "admin/course/evaluatecandelete"
  },
  //营团关联课程（执行课程）
  implementCourse: {
    //营团详情
    detail: apiUrl + "admin/implementcourse/detail",
    //编辑营团
    edit: apiUrl + "admin/implementcourse/edit",
    //营团列表
    campList: apiUrl + "admin/implementcourse/camplist",
    //营期营员列表
    camperList: apiUrl + "admin/implementcourse/camperlist",


    //营员评价详情
    camperEvaluatereporet: apiUrl + "admin/implementcourse/camperevaluatedetail",
    camperEvaluateDetail: apiUrl + "admin/statistics/studentreport",
    //导出营员数据
    exportCamperDetail: apiUrl + "admin/implementcourse/exportcamperdetail",
    //导出所有营员数据
    exportAllCamper: apiUrl + "admin/implementcourse/exportallcamper",
    //同步营期历史
    syncTermHistory: apiUrl + "admin/implementcourse/synctermhistory",
    // 发送评价信息提醒
    exporttermmedal: apiUrl + "admin/implementcourse/exporttermmedal",
    SEND_REPORT_TO_USER: apiUrl + 'admin/implementcourse/sendreporttouser',
    SEND_MSG_TO_TEACHER: `${apiUrl}admin/implementcourse/sendmsgtoteacher`,
    SEND_MSG_TO_MANAGER: `${apiUrl}admin/implementcourse/sendmsgtomanager`,
  },

  teacher: {
    add: apiUrl + "admin/teachermanage/teacher/add",
    edit: apiUrl + "admin/teachermanage/teacher/edit",

    editGroup: apiUrl + "admin/teachermanage/teacher/editgroup",
    delete: apiUrl + "admin/teachermanage/teacher/delete",
    list: apiUrl + "admin/teachermanage/teacher/list",//nowPage:1,perPageCount,
    search: apiUrl + "admin/teachermanage/teacher/search",//searchField
    //?添加教师前的查询
    searchfromcampuser: apiUrl + "admin/teachermanage/teacher/searchfromcampuser",//"phoneNo": "18576652883"
    uploadExcelFile: apiUrl + "admin/teachermanage/teacher/uploadexcelfile", //"importFile": excel文件
    downloadExcelTemplate: "http://meishakeji-oss1.oss-cn-shenzhen.aliyuncs.com/evaluate/admin/%E6%95%99%E5%8A%A1%E4%BA%BA%E5%91%98%E5%AF%BC%E5%85%A5%E6%A0%B7%E4%BE%8B.xlsx",
    import: apiUrl + "admin/teachermanage/teacher/import",
    //添加教师时检查手机号码是否存在
    checkPhoneNoExist: apiUrl + "admin/teachermanage/teacher/checkphonenoexist",
  },
  teacherGroup: {
    list: apiUrl + "admin/teachermanage/group/list",
    detail: apiUrl + "admin/teachermanage/group/detail",
    nameList: apiUrl + "admin/teachermanage/group/namelist",
    add: apiUrl + "admin/teachermanage/group/add",
    edit: apiUrl + "admin/teachermanage/group/edit",


  },
  // v1.4
  showData: {
    camplist: apiUrl + "admin/statistics/camplist",
    courselist: apiUrl + "admin/statistics/courselist",
    leveltwosurvey: apiUrl + "admin/statistics/leveltwosurvey",
    levelthreesurvey: apiUrl + "admin/statistics/levelthreesurvey",
    levelfoursurvey: apiUrl + "admin/statistics/levelfoursurvey",
    levelthreedetail: apiUrl + "admin/statistics/levelthreedetail",
    levelfourdetail: apiUrl + "admin/statistics/levelfourdetail",
  },
  // v1.5
  addlesson: {
    teachermanagelist: apiUrl + "admin/teachermanage/team/list",
    exportteamreport: apiUrl + "admin/teachermanage/teacher/exportteamreport",
    evaluateinfo: apiUrl + "admin/teachermanage/teacher/evaluateinfo",
    camperlist: apiUrl + "admin/camper/list",
    camperdetail: apiUrl + "admin/camper/detail",
    levelthreeevaluateinfo: apiUrl + "admin/teachermanage/teacher/levelthreeevaluateinfo",
    basecourselist: apiUrl + "admin/course/basecourselist",
    teamalllist: apiUrl + "admin/teachermanage/team/alllist",
  },
  // v1.6
  split: {
    teamadd: apiUrl + "admin/teachermanage/team/add",
    teamedit: apiUrl + "admin/teachermanage/team/edit",
    setteacheradmin: apiUrl + "admin/teachermanage/teacher/setteacheradmin",
    editcamp: apiUrl + "admin/implementcourse/editcamp",
    campdetail: apiUrl + "admin/implementcourse/campdetail",
    addcamp: apiUrl + "admin/implementcourse/addcamp",
    searchname: apiUrl + "admin/camper/search",
    addnewcampertoterm: apiUrl + "admin/camper/addnewcampertoterm",
    addoldcampertoterm: apiUrl + "admin/camper/addoldcampertoterm",
    uploadexcel: apiUrl + "admin/camper/uploadexcel",
    batchaddcampertoterm: apiUrl + "admin/camper/batchaddcampertoterm",
    deletecamperfromterm: apiUrl + "admin/camper/deletecamperfromterm",
    teamdetail: apiUrl + "admin/teachermanage/team/detail",
    sendCode: apiUrl + "admin/adminaccount/sendCode",
    alllteacherist: apiUrl + "admin/teachermanage/teacher/alllist",
    // downloadExcelTemplate:"http://meishakeji-oss1.oss-cn-shenzhen.aliyuncs.com/evaluate/admin/%E5%AD%A6%E7%94%9F%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx",
    // downloadExcelTemplate:"http://meishakeji-oss1.oss-cn-shenzhen.aliyuncs.com/evaluate/admin/%E5%AD%A6%E5%91%98%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx",
    downloadExcelTemplate: "http://meishakeji-oss1.oss-cn-shenzhen.aliyuncs.com/evaluate/admin/%E5%AD%A6%E5%91%98%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx"
  },
  img: {
    imgadd: apiUrl + "admin/common/uploadimage",
  },
  camper: {
    add: apiUrl + 'admin/camper/addcamper',
    uploadExcel: apiUrl + 'admin/camper/uploadexcel',
    batchAddCamper: apiUrl + 'admin/camper/batchaddcamper'
  },
  classroom: {
    list: apiUrl + 'admin/classroom/list',
    detail: apiUrl + 'admin/classroom/detail',
    edit: apiUrl + 'admin/classroom/edit',
    delete: apiUrl + 'admin/classroom/delete',
    changeStatus: apiUrl + 'admin/classroom/changestatus',
    getSearch: apiUrl + 'admin/classroom/getsearch',
  },
  campus: {
    list: apiUrl + 'admin/campus/getcampuslist',
    detail: apiUrl + 'admin/campus/detail',
    editCampus: apiUrl + 'admin/campus/editcampus'
  },
  //公共接口
  common: {
    campusList: apiUrl + 'admin/common/getcampuslist',
    searchUserFromAdmin: apiUrl + 'admin/common/searchuserfromadmin',
    getCityList: apiUrl + 'admin/common/getcitylist',
    getSemesterList: apiUrl + 'admin/common/getsemesterlist',
    getMyTeamList: apiUrl + 'admin/common/getmyteamlist',
    uploadImage: apiUrl + 'admin/common/uploadimage',
    uploadImageFile: apiUrl + 'admin/common/uploadimagefile',
  },
  // 班级 - 获取班级列表
  class: {
    list: apiUrl + 'admin/class/list',
    detail: apiUrl + 'admin/class/detail',
    addToLesson: apiUrl + 'admin/class/addtolesson',
    editRule: apiUrl + 'admin/class/editrule',
    attendanceBook: apiUrl + 'admin/class/attendancebook',
    exportAttendanceBook: apiUrl + 'admin/class/exportattendancebook',
    getSearch: apiUrl + 'admin/class/getsearch',
    // getCampusCamper: apiUrl + 'admin/class/getcampuscamper', 弃用
    getTeamCamper: apiUrl + 'admin/class/getteamcamper',
    addClass: apiUrl + 'admin/class/addclass',
    editClass: apiUrl + 'admin/class/editclass',
    exportStudent: apiUrl + 'admin/class/exportstudent',
    canDeleteStudentList: apiUrl + 'admin/class/candeletestudentlist',
    canDeleteTeacherList: apiUrl + 'admin/class/candeleteteacherlist',
    classroomList: apiUrl + 'admin/class/classroomlist',
    teacherList: apiUrl + 'admin/class/teacherlist',
    getSemesterClass: apiUrl + 'admin/class/getsemesterclass',//获得这学期的班级
    studentList: apiUrl + 'admin/class/studentlist',//获得这学期的班级
  },
  lesson: {
    delete: apiUrl + 'admin/lesson/delete',
    addLesson: apiUrl + 'admin/lesson/addlesson',
    editLesson: apiUrl + 'admin/lesson/editlesson',
    detail: apiUrl + 'admin/lesson/detail',
    batchDelete: apiUrl + 'admin/lesson/batchdelete',
    batchSddStudent: apiUrl + 'admin/lesson/batchaddstudent',
    batchDeleteStudent: apiUrl + 'admin/lesson/batchdeletestudent',
    batchAddTeacher: apiUrl + 'admin/lesson/batchaddteacher',
    batchDeleteTeacher: apiUrl + 'admin/lesson/batchdeleteteacher',
    batchChangeClassroom: apiUrl + 'admin/lesson/batchchangeclassroom',
    batchChangeClassTime: apiUrl + 'admin/lesson/batchchangeclasstime',
    getCalendarList: apiUrl + 'admin/lesson/getcalendarlist',
  },
  syllabus: {
    //课程表详情
    detail: apiUrl + 'admin/syllabus/detail',
  },
  fullTimeRecord: {
    paidRecord: apiUrl + 'admin/fulltimerecord/paidrecord',
    camperDetail: apiUrl + 'admin/fulltimerecord/camperdetail',
    courseArrangementList: apiUrl + 'admin/fulltimerecord/coursearrangementlist',
    addCourseArrangement: apiUrl + 'admin/fulltimerecord/addcoursearrangement',
  },

  hardware: {
    //上传图片
    uploadPhoto: apiUrl + "admin/common/uploadimage",
    //校区列表
    getCampusList: apiUrl + "admin/campus/getcampuslist",
    //教室列表
    getClassroomList: apiUrl + "admin/hardware/devicemanage/roomlist",
    getRoomList: apiUrl + "admin/hardware/devicemanage/deviceroomlist",
    //学期列表
    getSemesterList: apiUrl + "admin/common/getsemesterlist",
    //学期班级
    getSemesterClass: apiUrl + "admin/class/getsemesterclass",

    //学生卡管理
    getUse: apiUrl + "admin/hardware/studentmanage/card/uselist",
    getWait: apiUrl + "admin/hardware/studentmanage/card/waitlist",
    getLogout: apiUrl + "admin/hardware/studentmanage/card/disablecardrecords",
    getSearch: apiUrl + "admin/hardware/studentmanage/card/search",
    getStuBasic: apiUrl + "admin/hardware/studentmanage/card/basicinfo",
    getSwipe: apiUrl + "admin/hardware/studentmanage/clockrecord/statisticslist",
    getStuRecord: apiUrl + "admin/hardware/studentmanage/clockrecord/list",
    getStuDetail: apiUrl + "admin/hardware/studentmanage/card/disablecardrecords",
    addCardNo: apiUrl + "admin/hardware/studentmanage/card/add",
    getStuCard: apiUrl + "admin/hardware/studentmanage/card/detail",
    logoutCard: apiUrl + "admin/hardware/studentmanage/card/disable",
    saveBusLine: apiUrl + "admin/hardware/studentmanage/card/savebusline",

    //员工管理
    getStaffRecord: apiUrl + "admin/hardware/staffmanage/clockrecordlist",
    getStaffDetail: apiUrl + "admin/hardware/staffmanage/detail",
    getStaffList: apiUrl + "admin/hardware/staffmanage/list",
    addStaff: apiUrl + "admin/hardware/staffmanage/add",
    editStaff: apiUrl + "admin/hardware/staffmanage/edit",
    deleteStaff: apiUrl + "admin/hardware/staffmanage/delete",
    logoutStaff: apiUrl + "admin/hardware/staffmanage/changestatus",

    //角色管理
    getRoleList: apiUrl + "admin/hardware/staffmanage/role/list",
    getRoleDetail: apiUrl + "admin/hardware/staffmanage/role/detail",
    changeRoleStatus: apiUrl + "admin/hardware/staffmanage/role/changestatus",
    deleteRole: apiUrl + "admin/hardware/staffmanage/role/delete",
    addRole: apiUrl + "admin/hardware/staffmanage/role/add",
    editRole: apiUrl + "admin/hardware/staffmanage/role/edit",

    //打卡机器
    getCardList: apiUrl + "admin/hardware/devicemanage/cardreader/list",
    getCardDetail: apiUrl + "admin/hardware/devicemanage/cardreader/detail",
    addCard: apiUrl + "admin/hardware/devicemanage/cardreader/add",
    editCard: apiUrl + "admin/hardware/devicemanage/cardreader/edit",
    deleteCard: apiUrl + "admin/hardware/devicemanage/cardreader/delete",
    getCardType: apiUrl + "admin/common/getclockdevicetype",
    zycCard: apiUrl + "admin/hardware/zyunc/cardreaderdevicelist",

    //考勤机内容配置
    changeConfig: apiUrl + "admin/hardware/devicemanage/cardreader/savedisplaycontent",
    getConfig: apiUrl + "admin/hardware/devicemanage/cardreader/displaycontentdetail",

    //功能区管理
    getFuncList: apiUrl + "admin/hardware/functionalarea/list",
    addFunc: apiUrl + "admin/hardware/functionalarea/add",
    editFunc: apiUrl + "admin/hardware/functionalarea/edit",
    getFuncDetail: apiUrl + "admin/hardware/functionalarea/detail",
    deleteFunc: apiUrl + "admin/hardware/functionalarea/delete",

    // 灯
    getLightList: apiUrl + "admin/hardware/devicemanage/light/list",
    getLightDetail: apiUrl + "admin/hardware/devicemanage/light/detail",
    getLightRecord: apiUrl + "admin/hardware/devicemanage/light/operationrecordlist",
    editLight: apiUrl + "admin/hardware/devicemanage/light/edit",
    addLight: apiUrl + "admin/hardware/devicemanage/light/add",
    zycLight: apiUrl + "admin/hardware/zyunc/lightlist",

    //空调
    getAirList: apiUrl + "admin/hardware/devicemanage/airconditioner/list",
    getAirDetail: apiUrl + "admin/hardware/devicemanage/airconditioner/detail",
    getAirRecord: apiUrl + "admin/hardware/devicemanage/airconditioner/operationrecordlist",
    addAir: apiUrl + "admin/hardware/devicemanage/airconditioner/add",
    editAir: apiUrl + "admin/hardware/devicemanage/airconditioner/edit",
    zycAir: apiUrl + "admin/hardware/zyunc/airconditionerlist",
    getAirMode: apiUrl + "admin/common/gethardwarestatuslist",

    //门锁
    getLockList: apiUrl + "admin/hardware/devicemanage/lock/list",
    getLockDetail: apiUrl + "admin/hardware/devicemanage/lock/detail",
    getLockRecord: apiUrl + "admin/hardware/devicemanage/lock/operationrecordlist",
    editLock: apiUrl + "admin/hardware/devicemanage/lock/edit",
    addLock: apiUrl +  "admin/hardware/devicemanage/lock/add",
    zycLock: apiUrl + "admin/hardware/zyunc/locklist",
  }

}
