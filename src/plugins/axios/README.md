# Axios调用不同后端接口说明

- ### 调用网上订购模块相关接口

  对应后端为social-hill-pay，首先在 `@/src/config/url` 的 `dev.url.js` 中将 `devIpProduct`、`devInterfacePortProduct`、`devPortSuffixProduct` 修改，然后调用方法如下：

  ```javascript
  
  // api 调用 axios处 将 需要在原有数据的基础上多传入 interfaceType: 'order'
  export const test = data => {
     // 在这儿我调用了一个工具类 也可以自行合并对象
    const mergedData = utils.orderMergeObject(data)
    return service({
      url: 'orderOnlineHotel/selectOrderOnlineHotel',
      method: 'post',
      data: mergedData
    })
  }
  ```

  ps: 注意无论是是什么类型的方法，这个 `interfaceType: 'order'`  对象都要通过data属性传入，不能使用params传入。所以在调用get请求时，如下：
  
  ```javascript
  // api 调用 axios处 将 需要在原有数据的基础上多传入 interfaceType: 'order'
  export const test = data => {
    return service({
      url: 'orderOnlineHotel/selectOrderOnlineHotel',
      method: 'get',
      params: data,
      data: {
          interfaceUrl: 'order'
      }
    })
  }
  ```
  
  



- ### 调用其他模块接口

  正常调用即可。



------



> 理论上应该不会有什么问题，如果出现问题，请及时沟通。👍
