/**
 * Created by olive on 2017/8/10.
 */

/**
 *传入单位警告，所有传入单位以【毫秒】为单位
 * @param{Date}date
 */
function unitWarn(date) {
    if (parseInt(date.getTime()).toString().length < 13) {
        console.warn('date.js warning：this library use millisecond as basic unit,please checkout your param before you use it')
    }
}

/**
 * 转化成时间类型
 * @param {String|Date|Number}date
 * @return {Date}
 */
function convertToDate(date) {
    if (date instanceof Date) {
        return date;
    }
    if (typeof date == 'string' && date.length == 8 && !isNaN(date)) {
        date = date.slice(0, 4) + '/' + date.slice(4, 6) + '/' + date.slice(6, 8)
    }


    if (!isNaN(date)) {
        date = new Date(date)
    } else if (typeof (date) === 'string') {
        if (date.toUpperCase().indexOf('Z') == -1) {
            date = date.replace(/-/g, '/')
        }
        date = new Date(date)
    }
    if (date instanceof Date == false) {
        console.warn('date.js warning：not a date')
        date = new Date()

    }
    return date
}

/**
 * 日期日期加${num}天
 * @param {String|Date|Number}curDate
 * @param {int}num
 * @returns {Date}
 */
export function addDate(curDate, num) {
    curDate = convertToDate(curDate)
    unitWarn(curDate)
    curDate = new Date(curDate.getTime())
    return new Date(curDate.setTime(curDate.getTime() + (num * 86400000)))
}

/**
 * 日期转 yyyy-MM-dd 格式
 * @param{String|Date|Number}date
 * @returns {string}
 */

export function toYYMMdd(date) {
    // console.log(date)
    date = convertToDate(date)
    unitWarn(date)
    let yyyy = date.getFullYear()
    let MM = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    return `${yyyy}-${MM}-${dd}`
}

/**
 * 日期转 6月5日 格式
 * @param{String|Date|Number}date
 * @returns {string}
 */

export function toMMddChinese(date) {
    date = convertToDate(date)
    unitWarn(date)
    let MM = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `${date.getMonth() + 1}`
    let dd = date.getDate() > 9 ? date.getDate() : `${date.getDate()}`
    return `${MM}月${dd}日`
}

/**
 *日期转 yyyy-MM-dd HH:mm:ss 格式
 * @param {String|Date|Number}date
 * @returns {string}
 */
export function toYYMMddHHMMss(date) {
    date = convertToDate(date)
    unitWarn(date)
    let yyyy = date.getFullYear()
    let MM = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    let hh = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
    let mm = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    let ss = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`

    return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`
}

/**
 *日期转 yyyy-MM-dd HH:mm 格式
 * @param {String|Date|Number}date
 * @returns {string}
 */
export function toYYMMddHHmm(date) {
    date = convertToDate(date)
    unitWarn(date)
    let yyyy = date.getFullYear()
    let MM = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    let hh = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
    let mm = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    let ss = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
    return `${yyyy}-${MM}-${dd} ${hh}:${mm}`
}

/**
 *日期转 HH:mm 格式
 * @param {String|Date|Number}date
 * @returns {string}
 */
export function toHHmm(date) {
    date = convertToDate(date)
    unitWarn(date)
    // let yyyy = date.getFullYear()
    // let MM = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    // let dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    let hh = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
    let mm = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    let ss = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`

    return `${hh}:${mm}`
}

/**
 *日期转 yyyyMMdd 格式 eg:20170315
 * @param {String|Date|Number}date
 * @returns {string}
 */
export function toYYMMddOnlyNumber(date) {
    return toYYMMdd(date).replace(/-/g, '')
}

/**
 *获取时间戳，单位毫秒
 * @param {String|Date|Number}date
 * @returns {string}
 */
export function getUnixTimestampMillisecond(date) {
    date = convertToDate(date)
    unitWarn(date)
    return date.getTime()
}

/**
 *获取时间戳，单位【秒】
 * @param {String|Date|Number}date
 * @returns {string}
 */
export function getUnixTimestampSecond(date) {
    return getUnixTimestampMillisecond(date) / 1000
}

//
/**
 * 判断是否是成年人
 * @param birthday 出生日期
 * @param {Number|Undefined} adultAge 法定成人年龄（默认18）
 * @returns {boolean}
 */
export function isAdult(birthday, adultAge) {
    adultAge = adultAge || 18
    let now = Date.now()
    let y1 = parseInt(toYYMMdd(birthday).split('-')[0])
    let m1 = parseInt(toYYMMdd(birthday).split('-')[1])
    let d1 = parseInt(toYYMMdd(birthday).split('-')[2])

    let y2 = parseInt(toYYMMdd(now).split('-')[0])
    let m2 = parseInt(toYYMMdd(now).split('-')[1])
    let d2 = parseInt(toYYMMdd(now).split('-')[2])

    if (y2 - y1 > adultAge) {
        return true
    } else if (y2 - y1 < adultAge) {
        return false
    } else {
        // 临界值根据月份判断
        if (m2 > m1) {
            return true
        } else if (m2 < m1) {
            return false
        } else {
            // 临界值根基日期判断
            if (d2 >= d1) {
                return true
            } else {
                return false
            }
        }
    }
    return true
}

/**
 * 获取中文时间差
 *
 * @param {String|Date|Number} begin
 * @param {String|Date|Number} end
 */
export function getChineseTimeSpan(begin, end) {
    let str = ''
    let b = getUnixTimestampSecond(begin)
    let e = getUnixTimestampSecond(end)
    let span = e - b
    if (span > 86400) {
        let d = parseInt(span / 86400)
        str += d + '天'
        span = span - d * 86400
    }
    if (span >= 3600) {
        let h = parseInt(span / 3600)
        str += h + '小时'
        span = span - h * 3600
    }
    if (span > 60) {
        let m = parseInt(span / 60)
        str += m + '分'
        span = span - m * 60
    }
    if (span > 0) {
        str += parseInt(span) + '秒'
    }
    return str
}

export default {
    addDate,
    toYYMMdd,
    toYYMMddHHMMss,
    toYYMMddHHmm,
    toHHmm,
    toYYMMddOnlyNumber,
    getUnixTimestampMillisecond,
    getUnixTimestampSecond,
    isAdult,
    getChineseTimeSpan,
    toMMddChinese
}
