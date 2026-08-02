# order-ops

주문 생성부터 결제, 운영자 조회까지 하나의 흐름으로 다루는 TypeScript API 프로젝트입니다.

작은 Express 애플리케이션을 출발점으로 삼아 요구사항 탐색, 작업 계획, 코드 변경, 리뷰, 테스트, 문서화, GitHub 협업 자동화까지 실제 개발 흐름을 연습할 수 있습니다.

## Fork해서 시작하기

1. GitHub에서 이 저장소를 **Fork**합니다.
2. Fork한 저장소를 로컬에 clone합니다.
3. 프로젝트 폴더로 이동합니다.

```bash
git clone https://github.com/<your-username>/order-ops.git
cd order-ops
```

이후 작업은 자신의 Fork에서 브랜치를 만들고 커밋하는 방식으로 진행합니다.

## 시작하기

### 요구 환경

- Node.js 20 이상
- npm

### 설치 및 실행

```bash
npm install
npm run dev
```

서버는 기본적으로 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## API 둘러보기

### 주문 생성

```bash
curl -X POST http://localhost:3000/orders \
  -H 'content-type: application/json' \
  -d '{"items":[{"productId":"keyboard","quantity":1}]}'
```

사용 가능한 상품 ID는 `keyboard`, `mouse`, `monitor`입니다.

### 주문 조회

```bash
curl http://localhost:3000/orders/<order-id>
```

### 결제 시도

```bash
curl -X POST http://localhost:3000/orders/<order-id>/pay \
  -H 'content-type: application/json' \
  -d '{"cardToken":"CARD-123"}'
```

재현 가능한 실패 응답이 필요할 때는 `FAIL`로 시작하는 카드 토큰을 사용합니다.

```bash
curl -X POST http://localhost:3000/orders/<order-id>/pay \
  -H 'content-type: application/json' \
  -d '{"cardToken":"FAIL-123"}'
```

### 관리자 주문 목록

```bash
curl http://localhost:3000/admin/orders
```

## 개발 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버를 watch 모드로 실행합니다. |
| `npm start` | 개발 서버를 한 번 실행합니다. |
| `npm test` | Vitest 테스트를 실행합니다. |
| `npm run lint` | 소스와 테스트의 ESLint 검사를 실행합니다. |
| `npm run typecheck` | TypeScript 타입 검사를 실행합니다. |

변경 작업을 마치기 전에는 다음 검사를 모두 통과하는지 확인합니다.

```bash
npm test
npm run lint
npm run typecheck
```

## 프로젝트 구조

```text
order-ops/
├── src/
│   ├── server.ts
│   ├── orders.ts
│   ├── payments.ts
│   ├── admin.ts
│   └── store.ts
├── tests/
│   └── orders.test.ts
├── package.json
└── tsconfig.json
```

데이터는 메모리에 저장되므로 서버를 다시 실행하면 주문과 결제 기록이 초기화됩니다.

## 권장 작업 흐름

1. 해결할 요구사항과 현재 동작을 먼저 확인합니다.
2. 작업 브랜치를 만들고 변경 범위를 작게 나눕니다.
3. 코드와 테스트를 함께 수정합니다.
4. 테스트, 린트, 타입 검사를 모두 실행합니다.
5. diff를 검토한 뒤 의미 있는 단위로 커밋합니다.

```bash
git switch -c feature/<topic>
npm test
npm run lint
npm run typecheck
git diff
```
