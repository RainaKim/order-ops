## 요청 원문

주문 상태는 사업 기준으로 다섯 개가 필요합니다: pending(결제 전) · paid(결제 성공) · payment_failed(결제 실패, 주문 보존 필수) · cancelled(취소) · refunded(환불)

지켜야 할 정책:

1) 재고는 주문 생성이 아니라 결제 성공 시점에 차감한다.
2) 결제가 실패해도 주문을 삭제하지 않고 payment_failed로 보존한다.
3) 관리자 목록에 실패 주문이 실패 정보와 함께 조회되어야 한다.

완료 조건 — 아래가 모두 만족되면 끝난 것으로 봅니다:

- OrderStatus에 payment_failed가 존재한다
- 결제 실패 후에도 GET /orders/:id가 200을 반환하고 status가 payment_failed다
- 실패한 주문의 재고가 차감되지 않은 채 남는다
- npm test와 npm run typecheck가 통과한다

주문 상태 처리 개선해줘

이전에 정한 대로 결제 실패 처리 이어서 해줘

결제 실패 상태 처리해줘

## 확인된 사실

src/server.ts   — 진입점, 라우터 등록 [근거: `src/server.ts`]

src/store.ts    — 타입·OrderStatus 정의, 인메모리 Map [근거: `src/store.ts`]

src/orders.ts   — POST /orders, GET /orders/:id. 주문 생성 시점에 재고를 차감함 [근거: `src/orders.ts`]

src/payments.ts — POST /orders/:id/pay. cardToken이 "FAIL"로 시작하면 실패 [근거: `src/payments.ts`]

src/admin.ts    — GET /admin/orders. 표시 상태를 결제 이력에서 유도함 [근거: `src/admin.ts`]

tests/orders.test.ts · package.json (dev/test/lint/typecheck) [근거: `tests/orders.test.ts`, `package.json`]

그런데 현재 OrderStatus에는 pending, paid, cancelled 세 개뿐입니다. [근거: `src/store.ts`]

지금은 결제가 실패하면 payments.ts가 주문을 Map에서 삭제해버립니다. [근거: `src/payments.ts`]

현재 테스트는 주문 생성·조회, 결제 응답의 `ok` 필드 존재, 관리자 목록의 배열 여부만 확인하며, 실패 주문 보존·재고 시점·관리자 실패 정보는 검증하지 않습니다. [근거: `tests/orders.test.ts`]

## 추정

조사가 필요한 관련 파일 후보는 다섯 곳입니다. 실제 수정 범위는 결정 확정과 현재 동작 추적 뒤에 정합니다.

- `src/store.ts`: `OrderStatus`에 `payment_failed`, `refunded`를 추가합니다.
- `src/orders.ts`: `POST /orders`에서 재고를 차감하는 반복문을 제거합니다.
- `src/payments.ts`: 실패 시 주문을 삭제하는 대신 상태를 `payment_failed`로 바꾸고 실패 이력을 남깁니다. 성공 처리에서만 재고를 차감합니다.
- `src/admin.ts`: 결제 이력의 실패를 `payment_failed`로 표시하고, 실패 금액과 시각을 함께 응답합니다.
- `tests/orders.test.ts`: 실패 주문의 200 조회, 상태 보존, 재고 유지, 관리자 실패 정보와 성공 결제 시 재고 차감을 검증합니다.

`npm test`와 `npm run typecheck`는 구현 단계의 완료 조건이지만, 현재 테스트가 실패 주문 보존·재고 차감 시점·관리자 실패 정보를 잡는지 별도로 확인해야 합니다.

결제 실패 시 주문 보존, 실패 API 응답, 재결제 허용 여부, 관리자 실패 정보 범위와 추가 테스트 흐름은 아직 사람 확인이 필요한 정책입니다. 확정 전에는 구현 계획이나 테스트 기대값으로 고정하지 않습니다. [확인 위치: `notes/pending-decisions.md`]
