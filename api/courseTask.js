"use strict";

// 定义并导出课程任务相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的课程任务API函数
exports.view = exports.reply = exports.page = void 0;

// 导入请求模块
var e = require("../request");

// 定义课程任务相关API路径常量
var r = function(e) {
  e.page = "/user/courseTask/page";   // 获取课程任务列表（分页）
  e.view = "/user/courseTask/view";    // 查看课程任务详情
  e.reply = "/user/courseTask/reply";  // 回复课程任务
  return e;
}(r || {});

// 导出获取课程任务列表的API函数（分页）
exports.page = function(s) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.page, s);
};

// 导出查看课程任务详情的API函数
exports.view = function(s) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.view, s);
};

// 导出回复课程任务的API函数
exports.reply = function(s) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.reply, s);
};