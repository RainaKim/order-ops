# Lecture 13 backup patch

모델이 존재하지 않는 API를 만들지 않았을 때 실패 검증을 재현하기 위한 입력입니다. 이 변경은 작업 트리에서만 시험하고 커밋하지 않습니다.

```diff
diff --git a/src/payments.ts b/src/payments.ts
--- a/src/payments.ts
+++ b/src/payments.ts
@@
-      const paidOrder = completePayment(order);
+      const paidOrder = await orders.transitionTo(orderId, 'paid', {
+        validateInventory: true,
+        recordAuditEvent: true,
+      });
       res.json({ ok: true, order: paidOrder });
```

관찰 대상:

- `orders`가 제공하지 않는 메서드
- 현재 저장 계층에 없는 옵션
- 비동기 API라는 근거 없는 가정
- typecheck와 test의 실제 실패 원문
