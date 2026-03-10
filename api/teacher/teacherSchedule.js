"use strict";

// 定义并导出教学端教师课表相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的教师课表API函数
exports.viewCheckinCoursesCount = exports.view = exports.stopCheckin = exports.startCheckin = exports.restartCheckin = exports.list = exports.delCheckinCourseRecord = exports.changeStuStatus = void 0;

// 导入请求模块（注意路径是"../../request"，表示在上一级目录）
var e = require("../../request");

// 定义教师课表相关API路径常量
var t = function(e) {
  e.list = "/teaching/teacherSchedule/list";                          // 获取教师课表列表
  e.view = "/teaching/teacherSchedule/view";                           // 查看教师课表详情
  e.startCheckin = "/teaching/teacherSchedule/startCheckin";           // 开始点名
  e.stopCheckin = "/teaching/teacherSchedule/stopCheckin";             // 结束点名
  e.restartCheckin = "/teaching/teacherSchedule/restartCheckin";       // 重新开始点名
  e.changeStuStatus = "/teaching/teacherSchedule/changeStuStatus";     // 修改学生点名状态
  e.viewCheckinCoursesCount = "/teaching/teacherSchedule/viewCheckinCoursesCount"; // 查看点名记录统计
  e.delCheckinCourseRecord = "/teaching/teacherSchedule/delCheckinCourseRecord";   // 删除点名记录
  return e;
}(t || {});

// 导出获取教师课表列表的API函数
exports.list = function(r) {
  return (0, e.request)(t.list, r);
};

// 导出查看教师课表详情的API函数
exports.view = function(r) {
  return (0, e.request)(t.view, r);
};

// 导出开始点名的API函数
exports.startCheckin = function(r) {
  return (0, e.request)(t.startCheckin, r);
};

// 导出结束点名的API函数
exports.stopCheckin = function(r) {
  return (0, e.request)(t.stopCheckin, r);
};

// 导出重新开始点名的API函数
exports.restartCheckin = function(r) {
  return (0, e.request)(t.restartCheckin, r);
};

// 导出修改学生点名状态的API函数
exports.changeStuStatus = function(r) {
  return (0, e.request)(t.changeStuStatus, r);
};

// 导出查看点名记录统计的API函数
exports.viewCheckinCoursesCount = function(r) {
  return (0, e.request)(t.viewCheckinCoursesCount, r);
};

// 导出删除点名记录的API函数
exports.delCheckinCourseRecord = function(r) {
  return (0, e.request)(t.delCheckinCourseRecord, r);
};