import { instance } from './index';

// 견적서 생성 API
function createQuotation(data) {
  return instance.post('quotations', data, { withCredentials: true });
}

export { createQuotation };
