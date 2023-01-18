import { instance } from './index';

// 거래처 생성 API
function registerClient(clientObj) {
	return instance.post('client', clientObj, { withCredentials: true });
}

function getClientAll() {
	return instance.get('client', { withCredentials: true });
}

export { registerClient, getClientAll };
