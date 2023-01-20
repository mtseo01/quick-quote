import { instance } from './index';

// 회원가입 API
function registerUser(userObj) {
  return instance.post('users/signup', userObj);
}

// 로그인 API
function loginUser(userObj) {
  return instance.post('users/login', userObj, { withCredentials: true });
}

// 유저정보 조회 API
function getUserInfo() {
  return instance.get('users/information', { withCredentials: true });
}

export { registerUser, loginUser, getUserInfo };
