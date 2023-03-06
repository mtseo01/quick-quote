# 프론트엔드 구현 페이지 및 기능

### 견적서 
견적서 다운로드 (기본 템플릿 제공) [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/utils/pdf.js)

견적서 작성 / 저장 / 수정 / 삭제 
- API 호출 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/api/quotation.js)
- 견적서 작성 및 저장 페이지 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/views/quotation/QuotationPage.vue)
- 견적서 수정 페이지 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/views/quotation/EditQuotationPage.vue)
- 견적서 삭제 [코드 보기](https://github.com/mtseo01/quick-quote/blob/6111dddef365a633386d7853f7b2cf7a0fd11228/front/src/views/quotation/QuotationListPage.vue#L66)
- 견적서 작성 시 유저 정보 불러오기 기능 [코드 보기](https://github.com/mtseo01/quick-quote/blob/6111dddef365a633386d7853f7b2cf7a0fd11228/front/src/components/quotation/ClientForm.vue#L81-L96), 거래처 정보 불러오기 기능 [코드 보기](https://github.com/mtseo01/quick-quote/blob/6111dddef365a633386d7853f7b2cf7a0fd11228/front/src/components/quotation/ClientForm.vue#L81-L96)

### 유저
회원 가입 / 로그인 / 로그아웃 / 회원 정보 수정 / 비밀번호 변경 / 회원 탈퇴
- API 호출 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/api/user.js)
- 회원가입 [코드 보기](https://github.com/mtseo01/quick-quote/blob/6111dddef365a633386d7853f7b2cf7a0fd11228/front/src/components/user/SignupForm.vue#L82)
- 로그인 [코드 보기](https://github.com/mtseo01/quick-quote/blob/6111dddef365a633386d7853f7b2cf7a0fd11228/front/src/components/user/LoginForm.vue#L41)
- 로그아웃 [코드 보기](https://github.com/mtseo01/quick-quote/blob/6111dddef365a633386d7853f7b2cf7a0fd11228/front/src/components/layout/TheHeader.vue#L75-L84)
- 회원 정보 수정 [코드 보기](https://github.com/mtseo01/quick-quote/blob/6111dddef365a633386d7853f7b2cf7a0fd11228/front/src/components/user/EditForm.vue#L76-L98)
- 비밀번호 변경 [코드 보기](https://github.com/mtseo01/quick-quote/blob/6111dddef365a633386d7853f7b2cf7a0fd11228/front/src/components/user/EditPasswordForm.vue#L61-L85)
- 회원 탈퇴 [코드 보기](https://github.com/mtseo01/quick-quote/blob/6111dddef365a633386d7853f7b2cf7a0fd11228/front/src/components/user/DeleteForm.vue#L49-L70)

### 거래처
거래처 생성 / 수정 / 삭제
- 거래처 생성 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/components/client/CreateForm.vue)
- 거래처 수정 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/components/client/EditForm.vue)
- 거래처 삭제 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/components/client/GetClients.vue#L52-L77)


### 상태관리
Vuex
- 유저 상태 관리 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/store/index.js)
### 라우트
Vue-router
- 라우트 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/front/src/router/index.js)
- 네이게이션 가드를 활용해 유저 상태에 따라 페이지 간 이동을 허용/제한하였습니다. [코드 보기](https://github.com/mtseo01/quick-quote/blob/3094492d73da00d8d5623498ae7ccc25110ed77b/front/src/router/index.js#L98-L111)
