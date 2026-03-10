"use strict";

// 定义并导出课程相关API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明要导出的API函数
exports.view = exports.makeRecord = void 0;

// 导入请求模块
var e = require("../request");

// 定义课程相关API路径常量
var r = function(e) {
  e.view = "/user/lesson/view";            // 查看课程详情
  e.makeRecord = "/user/lesson/makeRecord"; // 创建课程记录/听课记录
  return e;
}(r || {});

// 导出查看课程详情的API函数
exports.view = function(o) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.view, o);
};

// 导出创建课程记录的API函数
exports.makeRecord = function(o) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.makeRecord, o);
};