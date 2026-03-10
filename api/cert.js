"use strict";

// 定义并导出证书相关API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明要导出的API函数
exports.view = exports.page = void 0;

// 导入请求模块
var e = require("../request");

// 定义证书相关API路径常量
var r = function(e) {
  e.page = "/user/cert/page";   // 获取证书列表（分页）
  e.view = "/user/cert/view";    // 查看证书详情
  return e;
}(r || {});

// 导出获取证书列表的API函数（分页）
exports.page = function(t) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.page, t);
};

// 导出查看证书详情的API函数
exports.view = function(t) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.view, t);
};