const request = require('../utils/request.js')

/**
 * 标签列表
 * @param {obj}
 * tagType 1 资源模块
 */
export function getTagListFun(query) {
  return request.request({
    url: `/api/hzBasic/getTagList`,
    method: 'get',
    params: query
  })
}