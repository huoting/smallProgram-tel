export function request(res) {
  return new Promise((resolve) => {
    resolve(res)
  })
  // wx.request({
  //   url: res.url, // 仅为示例，并非真实的接口地址
  //   data: res.params,
  //   header: {
  //     'content-type': 'application/json' // 默认值
  //   },
  //   success(res) {
  //     return new Promise((resolve) => {
  //       resolve(res)
  //     })
  //   },
  //   fail(res) {
  //     return new Promise((resolve, reject) => {
  //       reject(res)
  //     })
  //   }
  // })
}
