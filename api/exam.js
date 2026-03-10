"use strict";

// 定义并导出考试相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的考试API函数
exports.view = exports.submit = exports.start = exports.page = exports.makeFinish = void 0;

// 导入请求模块
var e = require("../request");

// 定义考试相关API路径常量
var t = function(e) {
  e.page = "/user/exam/page";           // 获取考试列表（分页）
  e.view = "/user/exam/view";            // 查看考试详情
  e.start = "/user/exam/start";          // 开始考试
  e.submit = "/user/exam/submit";        // 提交考试
  e.makeFinish = "/user/exam/makeFinish"; // 强制结束考试
  return e;
}(t || {});

// 导出获取考试列表的API函数（分页）
exports.page = function(r) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(t.page, r);
};

// 导出查看考试详情的API函数
exports.view = function(r) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(t.view, r);
};

// 导出开始考试的API函数
exports.start = function(r) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(t.start, r);
};

// 导出提交考试的API函数
exports.submit = function(r) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(t.submit, r);
};

// 导出强制结束考试的API函数
exports.makeFinish = function(r) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(t.makeFinish, r);
};