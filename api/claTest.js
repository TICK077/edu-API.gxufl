"use strict";

// 定义并导出班级测试相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的班级测试API函数
exports.view = exports.saveOrUpdate = exports.list = void 0;

// 导入请求模块
var e = require("../request");

// 定义班级测试相关API路径常量
var t = function(e) {
  e.list = "/user/claTest/list";                // 获取班级测试列表
  e.view = "/user/claTest/view";                 // 查看班级测试详情
  e.saveOrUpdate = "/user/claTest/saveOrUpdate"; // 新增或更新班级测试
  return e;
}(t || {});

// 导出获取班级测试列表的API函数
exports.list = function(r) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(t.list, r);
};

// 导出查看班级测试详情的API函数
exports.view = function(r) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(t.view, r);
};

// 导出新增或更新班级测试的API函数
exports.saveOrUpdate = function(r) {
  // 调用通用请求方法，传入接口路径和参数
  return (0, e.request)(t.saveOrUpdate, r);
};