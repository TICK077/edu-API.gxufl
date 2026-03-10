"use strict";

// 定义并导出前端展示相关的API接口（首页、课程展示等）

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的API函数
exports.swipers = exports.recCourses = exports.indexCourses = exports.coursePage = exports.courseOrgTree = exports.courseDetail = exports.courseCateTree = void 0;

// 导入请求模块
var e = require("../request");

// 定义前端展示相关API路径常量
var r = function(e) {
  e.swipers = "/front/swipers";                // 获取轮播图列表
  e.recCourses = "/front/coursePage";          // 获取推荐课程列表（注意：和coursePage路径相同）
  e.indexCourses = "/front/indexCourses";       // 获取首页课程列表
  e.coursePage = "/front/coursePage";           // 获取课程列表（分页）
  e.courseCateTree = "/front/courseCateTree";   // 获取课程分类树
  e.courseOrgTree = "/front/courseOrgTree";     // 获取课程机构树
  e.courseDetail = "/front/courseDetail";       // 获取课程详情
  return e;
}(r || {});

// 导出获取轮播图的API函数
exports.swipers = function(s) {
  return (0, e.request)(r.swipers, s);
};

// 导出获取推荐课程的API函数
exports.recCourses = function(s) {
  return (0, e.request)(r.recCourses, s);
};

// 导出获取首页课程的API函数
exports.indexCourses = function(s) {
  return (0, e.request)(r.indexCourses, s);
};

// 导出获取课程列表的API函数（分页）
exports.coursePage = function(s) {
  return (0, e.request)(r.coursePage, s);
};

// 导出获取课程分类树的API函数
exports.courseCateTree = function(s) {
  return (0, e.request)(r.courseCateTree, s);
};

// 导出获取课程机构树的API函数
exports.courseOrgTree = function(s) {
  return (0, e.request)(r.courseOrgTree, s);
};

// 导出获取课程详情的API函数
exports.courseDetail = function(s) {
  return (0, e.request)(r.courseDetail, s);
};