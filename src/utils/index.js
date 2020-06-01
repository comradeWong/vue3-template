/*
 * @Descripttion:
 * @version:
 * @Author: jooey wong
 * @Date: 2020-06-01 15:17:07
 * @LastEditors: jooey wong
 * @LastEditTime: 2020-06-01 15:27:44
 */
export default {
  /**
   * @author: jooey wong
   * @description: 判断是否是 undefined 或 null
   * @param {type}
   * @return: Boolean
   */
  isUndef(v) {
    return v === undefined || v === null
  },
  /**
   * @author: jooey wong
   * @description:  判断是否不是 undefined 和 null
   * @param {type}
   * @return: Boolean
   */
  isDef(v) {
    return v !== undefined && v !== null
  },
  /**
   * @author: jooey wong
   * @description:判断是否是原始类型 原始类型（基础类型）：String、Number、Boolean、Null、Undefined、Symbol 对象类型：Object、Array、Function
   * @param {type}
   * @return: Boolean
   */
  isPrimitive(value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  },
  /**
   * @author: jooey wong
   * @description: 判断是否是对象类型
   * @param {type}
   * @return: Boolean
   */
  isObject(obj) {
    return obj !== null && typeof obj === 'object'
  },
  /**
   * @author: jooey wong
   * @description: 删除数组中指定元素
   * @param {type}
   * @return: Array
   */
  arrRemove(arr, item) {
    if (arr.length) {
      const index = arr.indexOf(item)
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }
}
