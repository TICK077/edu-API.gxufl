"use strict";

// 定义并导出教学端用户管理相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明要导出的API函数
exports.resetPwd = exports.page = void 0;

// 导入请求模块（注意路径是"../../request"，表示在上一级目录）
var e = require("../../request");

// 定义用户管理相关API路径常量
var r = function(e) {
  e.page = "/teaching/user/page";          // 获取用户列表（分页）
  e.resetPwd = "/teaching/user/resetPwd";   // 重置用户密码
  return e;
}(r || {});

// 导出获取用户列表的API函数（分页）
exports.page = function(t) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.page, t);
};

// 导出重置用户密码的API函数
exports.resetPwd = function(t) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(r.resetPwd, t);
};