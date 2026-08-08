# 데모 ① 세션 A

사용자:

> order-ops는 소규모 이커머스의 주문·결제·운영 API입니다. TypeScript + Express, 인메모리 Map 저장소, Node 20+, Vitest.
>
> 구조:
> src/server.ts   — 진입점, 라우터 등록
> src/store.ts    — 타입·OrderStatus 정의, 인메모리 Map
> src/orders.ts   — POST /orders, GET /orders/:id. 주문 생성 시점에 재고를 차감함
> src/payments.ts — POST /orders/:id/pay. cardToken이 "FAIL"로 시작하면 실패
> src/admin.ts    — GET /admin/orders. 표시 상태를 결제 이력에서 유도함
> tests/orders.test.ts · package.json (dev/test/lint/typecheck)
>
> 주문 상태는 사업 기준으로 다섯 개가 필요합니다: pending(결제 전) · paid(결제 성공) · payment_failed(결제 실패, 주문 보존 필수) · cancelled(취소) · refunded(환불)
>
> 그런데 현재 OrderStatus에는 pending, paid, cancelled 세 개뿐입니다. 지금은 결제가 실패하면 payments.ts가 주문을 Map에서 삭제해버립니다.
>
> 지켜야 할 정책:
> 1) 재고는 주문 생성이 아니라 결제 성공 시점에 차감한다.
> 2) 결제가 실패해도 주문을 삭제하지 않고 payment_failed로 보존한다.
> 3) 관리자 목록에 실패 주문이 실패 정보와 함께 조회되어야 한다.
>
> 완료 조건 — 아래가 모두 만족되면 끝난 것으로 봅니다:
> - OrderStatus에 payment_failed가 존재한다
> - 결제 실패 후에도 GET /orders/:id가 200을 반환하고 status가 payment_failed다
> - 실패한 주문의 재고가 차감되지 않은 채 남는다
> - npm test와 npm run typecheck가 통과한다
>
> 이 전제로 수정이 필요한 파일과 위치를 짚어주세요.
>
> 주문 상태 처리 개선해줘

응답:

수정 대상은 다섯 곳입니다.

- `src/store.ts`: `OrderStatus`에 `payment_failed`, `refunded`를 추가합니다.
- `src/orders.ts`: `POST /orders`에서 재고를 차감하는 반복문을 제거합니다.
- `src/payments.ts`: 실패 시 주문을 삭제하는 대신 상태를 `payment_failed`로 바꾸고 실패 이력을 남깁니다. 성공 처리에서만 재고를 차감합니다.
- `src/admin.ts`: 결제 이력의 실패를 `payment_failed`로 표시하고, 실패 금액과 시각을 함께 응답합니다.
- `tests/orders.test.ts`: 실패 주문의 200 조회, 상태 보존, 재고 유지, 관리자 실패 정보와 성공 결제 시 재고 차감을 검증합니다.

`npm test`와 `npm run typecheck`로 완료 조건을 확인합니다.

# 데모 ① 세션 B (새 세션)

사용자:

> 이전에 정한 대로 결제 실패 처리 이어서 해줘

응답:

이 새 세션에는 이전 대화에서 정한 정책이나 수정 내역이 전달되지 않았습니다. 현재 `OrderStatus`, 실패 결제 처리, 재고 차감 시점, 관리자 응답의 요구사항을 다시 알려주시면 그 기준으로 이어서 작업할 수 있습니다.

# 데모 ②

사용자:

> 결제 실패 상태 처리해줘

응답:

결제 실패 시 주문을 삭제하지 않고 `payment_failed`로 보존하겠습니다. `FAIL`로 시작하는 카드 토큰은 결제 이력에 실패 기록을 남기고 `402 Payment Required`를 반환하도록 처리합니다. `payment_failed` 주문은 새 카드 토큰으로 재결제할 수 있게 하며, 재결제 성공 시에만 재고를 한 번 차감하고 상태를 `paid`로 전환합니다.

테스트는 다음 다섯 흐름을 포함합니다: 실패 주문 조회, 실패 시 재고 유지, 관리자 실패 정보 조회, 재결제 성공, 성공 후 중복 재고 차감 방지.
