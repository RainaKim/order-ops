## 다음 작업

- 관련 파일 후보와 역할을 확인해 기록한다. 입력: `notes/order-status-request.md`; 확인 대상: `src/server.ts`, `src/store.ts`, `src/orders.ts`, `src/payments.ts`, `src/admin.ts`.
- 주문 생성부터 결제 실패, 주문 조회, 관리자 목록까지의 현재 동작을 순서대로 정리한다. 입력: `notes/order-status-request.md`; 확인 대상: `src/orders.ts`, `src/payments.ts`, `src/admin.ts`, `src/store.ts`.
- 현재 테스트가 결제 실패 처리에서 잡지 못하는 흐름을 목록으로 정리한다. 입력: `notes/order-status-request.md`; 확인 대상: `tests/orders.test.ts`, `package.json`.

## 사람이 정해야 할 지점

- 정책 선택이 필요한 항목은 `notes/pending-decisions.md`에서 확인한다. 이 선택과 구현·정책 확정은 다음 작업의 범위가 아니다.
