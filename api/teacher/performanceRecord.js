"use strict";

// 定义并导出教学端成绩记录相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的成绩记录API函数
exports.view = exports.scoreRecords = exports.makeScore = void 0;

// 导入请求模块（注意路径是"../../request"，表示在上一级目录）
var e = require("../../request");

// 定义成绩记录相关API路径常量
var r = function(e) {
  e.view = "/teaching/performanceRecord/view";          // 查看成绩详情
  e.makeScore = "/teaching/performanceRecord/makeScore"; // 录入/修改成绩
  e.scoreRecords = "/teaching/performanceRecord/scoreRecords"; // 获取成绩记录列表
  return e;
}(r || {});

// 导出查看成绩详情的API函数
exports.view = function(o) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.view, o);
};

// 导出入库/修改成绩的API函数
exports.makeScore = function(o) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.makeScore, o);
};

// 导出获取成绩记录列表的API函数
exports.scoreRecords = function(o) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.scoreRecords, o);
};