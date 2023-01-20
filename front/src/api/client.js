import { instance } from './index';

// 거래처 생성 API
function registerClient(clientObj) {
  return instance.post('clients', clientObj, { withCredentials: true });
}

// 모든 거래처 조회 API
function getClientAll() {
  return instance.get('clients', { withCredentials: true });
}

// 특정 거래처 조회 API
function getClinet(clientId) {
  return instance.get('clients/' + clientId, { withCredentials: true });
}

// 거래처 정보 수정 API
function updateClient(clientId, clientObj) {
  return instance.put('clients/' + clientId, clientObj, {
    withCredentials: true,
  });
}

export { registerClient, getClientAll, getClinet, updateClient };
