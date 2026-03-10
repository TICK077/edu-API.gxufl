"use strict";

// 定义并导出短信相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明要导出的API函数
exports.sendSms = void 0;

// 导入请求模块
var e = require("../request");

// 定义短信相关API路径常量
var s = function(e) {
  // 发送短信验证码接口
  e.sendSms = "/sms/sendSms";
  return e;
}(s || {});

// 导出发送短信验证码的API函数
exports.sendSms = function(r) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(s.sendSms, r);
};