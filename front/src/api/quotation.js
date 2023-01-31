import { instance } from './index';

// 견적서 생성 API
function createQuotation(data) {
  return instance.post('quotations', data, { withCredentials: true });
}

// 전체 견적서 가져오기 API
function getQuotationsAll() {
  return instance.get('quotations', { withCredentials: true });
}

// 특정 견적서 가져오기 API
function getQuotation(id) {
  return instance.get('quotations/' + id, { withCredentials: true });
}

// 견적서 수정하기 API
function updateQuotation(id, data) {
  return instance.put('quotations/' + id, data, { withCredentials: true });
}

// 견적서 삭제 API
function deleteQuotation(id) {
  return instance.delete('quotations/' + id, { withCredentials: true });
}

export {
  createQuotation,
  getQuotationsAll,
  getQuotation,
  updateQuotation,
  deleteQuotation,
};
