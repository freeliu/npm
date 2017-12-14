/**
 * Created by Olive on 2017/8/3.
 * 获取公共数据的方法集
 */
//公共api
import api from "./api";

const cApi = api.common
/**
 * 获取学期列表
 * @param cb(Array)
 */
export function getSemesterList(cb) {
  let xhr = common.getJson(cApi.getSemesterList, {}, res => {
    common.hideLoading()
    if (res.code == api.responseCode.success) {
      cb(res.data)
    } else {
      rootVm.$message.error(res.msg)
    }
  })
  setTimeout(() => {
    if (xhr.readyState < 4) {
      common.showLoading()
    }
  }, 400)
}

/**
 * 获取我的团队列表
 * @param cb(Array)
 */
export function getMyTeamList(cb) {
  let xhr = common.getJson(cApi.getMyTeamList, {}, res => {
    common.hideLoading()
    if (res.code == api.responseCode.success) {
      cb(res.data)
    } else {
      rootVm.$message.error(res.msg)
    }
  })
  setTimeout(() => {
    if (xhr.readyState < 4) {
      common.showLoading()
    }
  }, 400)
}
