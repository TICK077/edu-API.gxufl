"use strict";

// 定义并导出学生课表相关的API接口
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 导出三个API函数：list（列表）、view（查看）、checkin（签到）
exports.view = exports.list = exports.checkin = void 0;

// 导入请求模块
var e = require("../request");

// 定义API路径常量
var t = function(e) {
  e.list = "/user/stuSchedule/list",        // 获取课表列表接口
  e.view = "/user/stuSchedule/view",        // 查看课表详情接口
  e.checkin = "/user/stuSchedule/checkin";  // 签到接口
  return e;
}(t || {});

// 导出获取课表列表的函数
exports.list = function(r) {
  return (0, e.request)(t.list, r);
};

// 导出查看课表详情的函数
exports.view = function(r) {
  return (0, e.request)(t.view, r);
};

// 导出签到功能的函数
exports.checkin = function(r) {
  return (0, e.request)(t.checkin, r);
};