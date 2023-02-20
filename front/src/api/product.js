import { instance } from './index';

// 제품 생성 API
function createProduct(data) {
  return instance.post('products', data, { withCredentials: true });
}

// 전체 제품 가져오기 API
function getProductsAll() {
  return instance.get('products', { withCredentials: true });
}

// 특정 제품 가져오기 API
function getProduct(id) {
  return instance.get('products/' + id, { withCredentials: true });
}

// 제품 수정하기 API
function updateProduct(id, data) {
  return instance.put('products/' + id, data, { withCredentials: true });
}

// 제품 삭제 API
function deleteProduct(id) {
  return instance.delete('products/' + id, { withCredentials: true });
}

export {
  createProduct,
  getProductsAll,
  getProduct,
  updateProduct,
  deleteProduct,
};
