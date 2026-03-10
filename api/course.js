"use strict";

// 定义并导出课程相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明要导出的API函数
exports.page = void 0;

// 导入请求模块
var e = require("../request");

// 定义课程相关API路径常量
var r = function(e) {
  e.page = "/user/course/page";  // 获取课程列表（分页）
  return e;
}(r || {});

// 导出获取课程列表的API函数（分页）
exports.page = function(t) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.page, t);
};