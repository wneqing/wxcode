import request from '../utils/http'

class ShoppingModel {
  // 扫码获取商品信息接口
  static getProductInfo(data) {
    return request.request({
      url: '/api/getProduct',
      method: 'GET',
      data
    })
  }
}

export default ShoppingModel