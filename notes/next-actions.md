## 다음 작업

- 결제 실패 처리에 관련된 파일 후보와 각 파일의 역할을 목록으로 정리한다. 입력: `notes/order-status-request.md`; 확인 대상: `src/server.ts`, `src/store.ts`, `src/orders.ts`, `src/payments.ts`, `src/admin.ts`.
- 주문 생성부터 결제 실패와 관리자 목록 조회까지의 현재 동작을 순서대로 정리한다. 입력: `notes/order-status-request.md`; 확인 대상: `src/orders.ts`, `src/payments.ts`, `src/admin.ts`.
- 현재 테스트가 결제 실패 처리에서 확인하지 않는 흐름을 정리한다. 입력: `notes/order-status-request.md`; 확인 대상: `tests/orders.test.ts`, `package.json`.

## 사람이 정해야 할 지점

- 선택이 필요한 항목은 `notes/pending-decisions.md`에서 확인한다.
