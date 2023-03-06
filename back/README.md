# 백엔드 구현 기능

MVC 패턴 중 Model과 Controller를 아래와 같이 구현하였습니다.

### Model : MongoDB(Mongoose)를 이용해 스키마를 정의하였습니다.
- User Model [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/models/user.js)
- Client Model [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/models/client.js)
- Quotation Model [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/models/quotation.js)
- Product Model [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/models/product.js)

### Controller : 클라이언트 요청에 맞게 모델 데이터를 취급하거나 클라이언트에게 응답 값을 전달하는 로직을 작성하였습니다. [목록 보기](https://github.com/mtseo01/quick-quote/tree/main/back/api/controllers)
Users API (회원가입 / 회원탈퇴 / 회원정보 불러오기 / 회원정보 수정 / 비밀번호 변경)
- 회원가입 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/usejs#L15-L52)
- 회원탈퇴 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/usejs#L221-L271)
- 회원정보 불러오기 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/usejs#L113-L140)
- 회원정보 수정하기 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/usejs#L142-L159)
- 비밀번호 변경하기 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/usejs#L161-L219)

Clients API (거래처 생성 / 거래처 정보 불러오기 / 수정 / 삭제)
- 거래처 생성 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/clienjs#L8-L43)
- 모든 거래처 정보 불러오기 [코드 보기](https://github.com/mtseo01/quick-quotblob/3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/clienjs#L45-L85)
- 특정 거래처 정보 불러오기 [코드 보기](https://github.com/mtseo01/quick-quotblob/3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/clienjs#L87-L115)
- 거래처 수정 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/clienjs#L117-L130)
- 거래처 삭제 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/clienjs#L132-L150)
  
Quotations API (견적서 생성 / 견적서 정보 불러오기 / 수정 / 삭제)
- 견적서 생성 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/quotatiojs#L7-L54)
- 모든 견적서 정보 불러오기 [코드 보기](https://github.com/mtseo01/quick-quotblob/3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllerquotation.js#L56-L81)
- 특정 견적서 정보 불러오기 [코드 보기](https://github.com/mtseo01/quick-quotblob/3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllerquotation.js#L83-L108)
- 견적서 수정 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/quotatiojs#L110-L127)
- 견적서 삭제 [코드 보기](https://github.com/mtseo01/quick-quote/blo3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/quotatiojs#L129-L147)

Products API (제품 생성 / 제품 정보 불러오기 / 수정 / 삭제)
- 제품 생성 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/controllers/product.js#L5-L30)
- 모든 제품 정보 불러오기 [코드 보기](https://github.com/mtseo01/quick-quote/blob/3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/product.js#L32-L57)
- 특정 제품 정보 불러오기 [코드 보기](https://github.com/mtseo01/quick-quote/blob/3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/product.js#L59-L85)
- 제품 수정 [코드 보기](https://github.com/mtseo01/quick-quote/blob/3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/product.js#L87-L100)
- 제품 삭제 [코드 보기](https://github.com/mtseo01/quick-quote/blob/3094492d73da00d8d5623498ae7ccc25110ed77b/back/api/controllers/product.js#L102-L120)

### 라우팅 [목록 보기](https://github.com/mtseo01/quick-quote/blob/main/back/app.js#L30-L33)
- Users [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/routes/user.js)
- Clients [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/routes/client.js)
- Quotations [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/routes/quotatation.js)
- Products [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/routes/product.js)

### 미들웨어
- 유저 인증 [코드 보기](https://github.com/mtseo01/quick-quote/blob/main/back/api/middleware/check-auth.js)