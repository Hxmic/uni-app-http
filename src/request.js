let base = ''

export default {
  baseOptions(params, method = 'GET') {
    const { url, data } = params
    let contentType = 'application/x-www-form-urlencoded'
    contentType = params.contentType || contentType
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${base}${url}`, //仅为示例，并非真实接口地址。
        data: data,
        header: { 'content-type': contentType },
        success: (res) => {
          resolve(res.data)
        },
        fail(e) {
          reject(e)
        }
      });
    })
  },
  get(url, data = '') {
    const option = { url, data }
    return this.baseOptions(option)
  },
  post(url, data, contentType) {
    const params = {url, data, contentType}
    return this.baseOptions(params, 'POST')
  },
  setHost(host) {
    base = host
  },
  getHost() {
    return base
  }
}