## 다음 작업

- 결제 실패 상태 범위, API 응답, 재결제, 관리자 표시 범위를 선택한다. 입력: `notes/pending-decisions.md`.
- 선택한 결정을 주문 상태와 결제·관리자 처리에 반영한다. 입력: `notes/order-status-request.md`, `notes/pending-decisions.md`; 확인 대상: `src/store.ts`, `src/orders.ts`, `src/payments.ts`, `src/admin.ts`.
- 완료 조건을 검증한다. 입력: `notes/order-status-request.md`; 확인 대상: `tests/orders.test.ts`, `npm test`, `npm run typecheck`.
