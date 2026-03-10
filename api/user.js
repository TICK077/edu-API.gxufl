"use strict";

// 定义并导出用户相关的所有API接口

// 标识该模块为ES模块
Object.defineProperty(exports, "__esModule", {
  value: true
});

// 声明所有要导出的API函数
exports.uploadAvatar = exports.updateName = exports.updateGender = exports.updateBirthday = exports.update = exports.tenInfo = exports.ssoUsernameAndPasswordLogin = exports.resetPwd = exports.modifyPwd = exports.login = exports.info = void 0;

// 导入请求模块
var e = require("../request");

// 定义所有API路径常量
var r = function(e) {
  // 单点登录（用户名密码方式）
  e.ssoUsernameAndPasswordLogin = "/user/ssoUsernameAndPasswordLogin";
  
  // 个人资料相关
  e.modifyPwd = "/user/profile/modifyPwd";           // 修改密码
  e.uploadAvatar = "/user/profile/uploadAvatar";      // 上传头像
  e.updateGender = "/user/profile/updateGender";      // 更新性别
  e.updateBirthday = "/user/profile/updateBirthday";  // 更新生日
  e.updateName = "/user/profile/updateName";          // 更新姓名
  
  // 登录相关
  e.login = "/login";                                  // 登录
  e.tenInfo = "/login/tenInfo";                        // 租户信息
  e.resetPwd = "/login/resetPwd";                       // 重置密码
  
  // 个人资料查询
  e.info = "/user/profile/profile";                     // 获取个人信息
  e.update = "/user/profile/updateProfile";             // 更新个人信息
  
  return e;
}(r || {});

// 导出单点登录API（用户名密码）
exports.ssoUsernameAndPasswordLogin = function(t) {
  return (0, e.request)(r.ssoUsernameAndPasswordLogin, t);
};

// 导出修改密码API
exports.modifyPwd = function(t) {
  return (0, e.request)(r.modifyPwd, t);
};

// 导出上传头像API（使用upload方法）
exports.uploadAvatar = function(t) {
  return (0, e.upload)(r.uploadAvatar, t);
};

// 导出更新性别API
exports.updateGender = function(t) {
  return (0, e.request)(r.updateGender, t);
};

// 导出更新生日API
exports.updateBirthday = function(t) {
  return (0, e.request)(r.updateBirthday, t);
};

// 导出更新姓名API
exports.updateName = function(t) {
  return (0, e.request)(r.updateName, t);
};

// 导出登录API
exports.login = function(t) {
  return (0, e.request)(r.login, t);
};

// 导出租户信息API
exports.tenInfo = function(t) {
  return (0, e.request)(r.tenInfo, t);
};

// 导出重置密码API
exports.resetPwd = function(t) {
  return (0, e.request)(r.resetPwd, t);
};

// 导出获取个人信息API
exports.info = function(t) {
  return (0, e.request)(r.info, t);
};

// 导出更新个人信息API
exports.update = function(t) {
  return (0, e.request)(r.update, t);
};