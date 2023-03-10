import { instance } from './index';

// 회원가입 API
function registerUser(userObj) {
  return instance.post('users/signup', userObj);
}

// 로그인 API
function loginUser(userObj) {
  return instance.post('users/login', userObj, { withCredentials: true });
}

// 로그아웃 API
function logoutUser() {
  return instance.get('users/logout', { withCredentials: true });
}

// 유저정보 조회 API
function getUserInfo() {
  return instance.get('users/information', { withCredentials: true });
}

// 유저정보 수정 API
function updateUser(userId, userObj) {
  return instance.put('users/' + userId, userObj, { withCredentials: true });
}

// 유저 비밀번호 변경 API
function updatePassword(userId, userObj) {
  return instance.put('users/password/' + userId, userObj, {
    withCredentials: true,
  });
}

// 유저 탈퇴 API
function deleteUser(userId, password) {
  return instance.post('users/' + userId, password, {
    withCredentials: true,
  });
}
export {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
  updateUser,
  deleteUser,
  updatePassword,
};
