"use strict";

// 定义并导出请求相关的API函数
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 导入环境配置和状态管理模块
var e,
  t = require("./env"),
  o = (e = require("../store/index")) && e.__esModule ? e : { default: e };

/**
 * 通用请求函数（POST方法）
 * @param {string} n - 接口路径
 * @param {Object} r - 请求参数
 * @returns {Promise} 返回Promise对象
 */
exports.request = function (n, r) {
  return new Promise(function (a, u) {
    // 拼接完整的API URL
    var r = "".concat(t.API_URL).concat(n);
    
    // 从本地存储获取token
    var s = wx.getStorageSync("token");

    // 发起网络请求
    wx.request({
      url: r,                // 请求URL
      data: r,               // 请求参数
      method: "POST",        // 请求方法
      header: {
        "Content-Type": "application/x-www-form-urlencoded",  // 表单格式
        Authorization: s,    // 认证token
        "Tenant-Id": "1"     // 租户ID
      },
      
      // 请求成功回调
      success: function (e) {
        if (200 === e.statusCode) {
          // 请求成功，解析数据
          a(e.data);
        } else if (401 === e.statusCode) {
          // token失效，清除登录状态
          wx.setStorageSync("token", null);
          wx.setStorageSync("isLogin", !1);
          wx.setStorageSync("user", null);
          
          // 更新全局状态
          o.default.setState({
            isLogin: !1,
            token: null,
            userInfo: null
          });
          
          // 跳转到登录页
          wx.navigateTo({
            url: "/pages/auth/login/index"
          });
        } else {
          // 其他错误，打印日志
          console.log(e);
        }
      },
      
      // 请求失败回调
      fail: function (e) {
        console.log("接口问题");
        u(e);
      }
    });
  });
};

/**
 * 文件上传函数
 * @param {string} e - 上传接口路径
 * @param {string} o - 文件路径
 * @returns {Promise} 返回Promise对象
 */
exports.upload = function (e, o) {
  return new Promise(function (n, a) {
    // 从本地存储获取token
    var u = wx.getStorageSync("token");

    // 发起文件上传
    wx.uploadFile({
      url: "".concat(t.API_URL).concat(e),  // 完整上传URL
      filePath: o,                           // 文件路径
      name: "file",                           // 文件字段名
      header: {
        Authorization: u,                     // 认证token
        "TEN-ID": 1                            // 租户ID
      },
      formData: {},                            // 额外表单数据
      
      // 上传成功回调
      success: function (e) {
        if (200 === e.statusCode) {
          // 上传成功，解析返回的JSON数据
          n(JSON.parse(e.data));
        } else if (401 === e.statusCode) {
          // token失效，跳转到登录页
          wx.navigateTo({
            url: "/pages/auth/login/index"
          });
        } else {
          // 其他错误，打印日志
          console.log(e);
        }
      },
      
      // 上传失败回调
      fail: function (e) {
        console.log("接口问题");
        a(e);
      }
    });
  });
};