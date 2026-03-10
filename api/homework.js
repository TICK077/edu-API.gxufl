"use strict";

// 定义并导出作业相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的作业API函数
exports.view = exports.reply = exports.page = void 0;

// 导入请求模块
var e = require("../request");

// 定义作业相关API路径常量
var r = function(e) {
  e.page = "/user/homework/page";    // 获取作业列表（分页）
  e.view = "/user/homework/view";     // 查看作业详情
  e.reply = "/user/homework/reply";   // 回复作业/提交作业
  return e;
}(r || {});

// 导出获取作业列表的API函数（分页）
exports.page = function(t) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.page, t);
};

// 导出查看作业详情的API函数
exports.view = function(t) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.view, t);
};

// 导出提交/回复作业的API函数
exports.reply = function(t) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.reply, t);
};