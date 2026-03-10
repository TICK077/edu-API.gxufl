"use strict";

// 定义并导出教学端班级测试相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的教学端班级测试API函数
exports.view = exports.tview = exports.stopNow = exports.questionItems = exports.questionCateTree = exports.makeClaTest = exports.list = exports.del = void 0;

// 导入请求模块（注意这里的路径是"../../request"，比之前的"../request"多一层）
var e = require("../../request");

// 定义教学端班级测试相关API路径常量
var t = function(e) {
  e.list = "/teaching/claTest/list";                 // 获取班级测试列表
  e.view = "/teaching/claTest/view";                  // 查看班级测试详情（教师视角）
  e.questionCateTree = "/teaching/claTest/questionCateTree"; // 获取题目分类树
  e.makeClaTest = "/teaching/claTest/makeClaTest";     // 创建班级测试
  e.questionItems = "/teaching/claTest/questionItems"; // 获取题目列表
  e.del = "/teaching/claTest/del";                     // 删除班级测试
  e.tview = "/teaching/claTest/tview";                 // 查看班级测试统计/结果
  e.stopNow = "/teaching/claTest/stopNow";             // 立即结束班级测试
  return e;
}(t || {});

// 导出获取班级测试列表的API函数
exports.list = function(s) {
  return (0, e.request)(t.list, s);
};

// 导出查看班级测试详情的API函数（教师视角）
exports.view = function(s) {
  return (0, e.request)(t.view, s);
};

// 导出获取题目分类树的API函数
exports.questionCateTree = function(s) {
  return (0, e.request)(t.questionCateTree, s);
};

// 导出创建班级测试的API函数
exports.makeClaTest = function(s) {
  return (0, e.request)(t.makeClaTest, s);
};

// 导出获取题目列表的API函数
exports.questionItems = function(s) {
  return (0, e.request)(t.questionItems, s);
};

// 导出删除班级测试的API函数
exports.del = function(s) {
  return (0, e.request)(t.del, s);
};

// 导出查看班级测试统计/结果的API函数
exports.tview = function(s) {
  return (0, e.request)(t.tview, s);
};

// 导出立即结束班级测试的API函数
exports.stopNow = function(s) {
  return (0, e.request)(t.stopNow, s);
};