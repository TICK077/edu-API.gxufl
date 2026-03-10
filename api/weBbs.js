"use strict";

// 定义并导出校园论坛相关的API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的论坛API函数
exports.view = exports.uploadImg = exports.save = exports.reply = exports.page = exports.del = void 0;

// 导入请求模块
var e = require("../request");

// 定义论坛相关API路径常量
var r = function(e) {
  e.save = "/user/weBbs/save";        // 发布帖子
  e.reply = "/user/weBbs/reply";      // 回复帖子
  e.del = "/user/weBbs/del";          // 删除帖子
  e.page = "/user/weBbs/page";        // 获取帖子列表（分页）
  e.view = "/user/weBbs/view";        // 查看帖子详情
  e.uploadImg = "/user/weBbs/uploadImg"; // 上传帖子图片
  return e;
}(r || {});

// 导出发布帖子API
exports.save = function(s) {
  return (0, e.request)(r.save, s);
};

// 导出回复帖子API
exports.reply = function(s) {
  return (0, e.request)(r.reply, s);
};

// 导出删除帖子API
exports.del = function(s) {
  return (0, e.request)(r.del, s);
};

// 导出获取帖子列表API（分页）
exports.page = function(s) {
  return (0, e.request)(r.page, s);
};

// 导出查看帖子详情API
exports.view = function(s) {
  return (0, e.request)(r.view, s);
};

// 导出上传帖子图片API（使用upload方法）
exports.uploadImg = function(s) {
  return (0, e.upload)(r.uploadImg, s);
};