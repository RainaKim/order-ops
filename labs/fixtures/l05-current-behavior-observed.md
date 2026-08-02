# v0 현재 동작 관찰 기록

관찰일: 2026-08-02

## 주문 생성

요청:

```bash
curl -X POST http://localhost:3000/orders -H 'content-type: application/json' -d '{"items":[{"productId":"keyboard","quantity":1}]}'
```

응답은 HTTP 201이며 주문 상태는 `pending`이다. 같은 프로세스에서 확인한 keyboard 재고는 5에서 4로 줄었다.

## 재고보다 많은 주문

요청:

```bash
curl -X POST http://localhost:3000/orders -H 'content-type: application/json' -d '{"items":[{"productId":"monitor","quantity":5}]}'
```

응답은 HTTP 201이다. 초기 재고가 2인 monitor의 재고는 -3이 됐다.

## 결제 실패

요청:

```bash
curl -X POST http://localhost:3000/orders/<order-id>/pay -H 'content-type: application/json' -d '{"cardToken":"FAIL-123"}'
```

응답은 HTTP 200 `{"ok":false}`다. 이후 같은 주문을 조회하면 HTTP 404 `{"message":"Order not found"}`가 반환된다.

## 관리자 조회

결제에 실패한 주문은 `/admin/orders` 목록에 나타나지 않는다. 목록 항목에는 `id`, `totalKrw`, `status`, `createdAt`만 있다.
