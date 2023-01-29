// 통화 단위 API
const formatter = new Intl.NumberFormat('ko', {
  style: 'currency',
  currency: 'krw',
});

export { formatter };
