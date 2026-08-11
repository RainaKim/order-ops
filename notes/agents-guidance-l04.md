# Lab 04 AGENTS 지침 근거

이 문서는 E2~E4에서 재사용할 조사 근거를 모은 메모다. 아래의 Codex 행동과 섹션명은 검토용 후보이며, `AGENTS.md`에 넣을 최종 문장은 아니다.

## 공용 근거

### 1. 저장소 탐색은 의존 관계를 따라야 한다

- 발견한 문제 또는 기준: 저장소 목적과 구조를 확인한 뒤 진입점, 관련 기능 모듈, 공통 저장소, 테스트 순서로 읽으면 요청의 실제 데이터 흐름과 검증 범위를 함께 추적할 수 있다.
- 근거 파일: `README.md`, `src/server.ts`, `src/orders.ts`, `src/payments.ts`, `src/admin.ts`, `src/store.ts`, `tests/orders.test.ts`
- 앞으로 필요한 Codex 행동: 작업 시작 시 저장소 개요와 라우터 연결을 확인하고, 요청과 관련된 기능 모듈에서 공통 저장소 및 테스트까지 참조 관계를 따라 탐색한다.
- 적용할 AGENTS.md 섹션: `Repository Map`, `Before Editing`

### 2. 실습 자료와 산출물의 위치를 구분해야 한다

- 발견한 문제 또는 기준: `labs/`는 진행 방법과 입력을 제공하는 교재 영역이며, 실습 중 수정하거나 완성 코드와 산출물을 두는 위치가 아니다.
- 근거 파일: `README.md`, `labs/CONVENTIONS.md`
- 앞으로 필요한 Codex 행동: 편집 전에 `labs/CONVENTIONS.md`를 확인하고, 산출물 종류에 맞는 루트 하위 위치를 선택하며 `labs/`는 읽기 전용 자료로 취급한다.
- 적용할 AGENTS.md 섹션: `Before Editing`, `Scope and File Placement`

### 3. 저장소에 정의된 실행·검증 명령을 기준으로 삼아야 한다

- 발견한 문제 또는 기준: 개발 실행, 일반 실행, 테스트, 린트, 타입 검사, 환경 점검을 위한 실제 명령이 이미 문서와 패키지 스크립트에 정의되어 있다.
- 근거 파일: `README.md`, `package.json`
- 앞으로 필요한 Codex 행동: 임의 명령을 만들기 전에 저장소 스크립트를 확인하고, 목적에 맞게 `npm run dev`, `npm start`, `npm test`, `npm run lint`, `npm run typecheck`, `node labs/tools/check.mjs env`를 사용한다.
- 적용할 AGENTS.md 섹션: `Commands`, `Verification`

### 4. 단계별 산출물과 금지 조건을 지켜야 한다

- 발견한 문제 또는 기준: 탐색, 결정, 계획, 구현은 서로 다른 단계이며, 앞 단계에서 정책을 선택하거나 뒤 단계의 산출물을 미리 작성하면 확인되지 않은 가정이 작업 범위에 섞인다.
- 근거 파일: `notes/task-boundary.md`
- 앞으로 필요한 Codex 행동: 현재 단계의 종료 상태까지만 진행하고, 탐색 중 정책 확정·파일별 계획·코드 및 테스트 구현으로 넘어가지 않는다.
- 적용할 AGENTS.md 섹션: `Workflow`, `Rules`

### 5. 사람의 정책 결정 전에는 구현 기대값을 고정하지 않아야 한다

- 발견한 문제 또는 기준: 문서와 코드만으로 확정할 수 없는 정책 선택은 사람의 승인이 필요하며, 승인 전에 특정 선택을 계획이나 테스트 기대값에 반영하면 안 된다.
- 근거 파일: `notes/task-boundary.md`, `notes/pending-decisions.md`
- 앞으로 필요한 Codex 행동: 여러 정책 선택지가 발견되면 선택지와 영향을 기록하고, 지정된 Human Gate에서 사람의 결정을 받은 뒤 계획 또는 구현을 진행한다.
- 적용할 AGENTS.md 섹션: `Before Editing`, `Human Gates`, `Rules`

### 6. 정보 부족과 범위 초과 시 멈춤 기준이 필요하다

- 발견한 문제 또는 기준: 완료 조건에 대응하는 현재 동작이나 변경 후보를 찾지 못한 경우, 또는 변경 후보가 요청이나 승인된 정책과 연결되지 않는 경우에는 자의적으로 범위를 넓힐 수 없다.
- 근거 파일: `notes/task-boundary.md`
- 앞으로 필요한 Codex 행동: 확인한 범위, 부족하거나 범위를 벗어난 항목, 재개에 필요한 코드 위치·문서·사람의 결정을 기록하고 다음 단계로 넘어가지 않는다.
- 적용할 AGENTS.md 섹션: `Stop Conditions`, `Rules`

### 7. 완료 주장은 실행 가능한 증거에 연결되어야 한다

- 발견한 문제 또는 기준: 자동 검증 또는 문서화된 수동 검증이 없으면 완료 조건을 충족했다고 판단할 수 없다. 기존 테스트가 실행된다는 사실만으로 변경된 동작 전체가 검증되는 것도 아니다.
- 근거 파일: `notes/task-boundary.md`, `package.json`, `tests/orders.test.ts`, `src/store.ts`
- 앞으로 필요한 Codex 행동: 변경된 응답과 저장소 상태에 대한 구체적 검증을 마련하고, 관련 테스트와 전체 테스트·린트·타입 검사의 실행 결과를 완료 증거로 확인한다. 자동 검증을 실행할 수 없으면 수동 절차를 문서화하거나 필요한 검증 환경을 요청한다.
- 적용할 AGENTS.md 섹션: `Verification`, `Before Final Response`, `Definition of Done`

## 특정 주문 상태 요청에만 해당하는 근거

이 절의 항목은 현재 주문 상태·결제 실패 요청에서 나온 것이므로 저장소의 모든 작업에 일반화하지 않는다.

### 1. 주문 처리 정책은 아직 사람 결정이 필요하다

- 발견한 문제 또는 기준: 실패 상태 추가 범위, 결제 실패 응답, 재결제 허용 여부, 관리자 실패 정보 범위, 테스트 범위가 미확정이다. 실패 주문 보존, 재고 처리 시점, 관리자 노출 방식과 연결되므로 코드에서 임의로 결정할 수 없다.
- 근거 파일: `notes/pending-decisions.md`, `notes/order-status-request.md`, `notes/task-boundary.md`
- 앞으로 필요한 Codex 행동: 결제 실패 정책은 Gate 1에서, 관리자 표시와 검증 범위는 Gate 2에서 사람의 결정을 받고, 그전에는 특정 선택을 구현 계획이나 테스트 기대값으로 고정하지 않는다.
- 적용할 AGENTS.md 섹션: `Human Gates`, `Before Editing`, `Rules`

### 2. 주문 흐름은 여러 모듈과 저장소를 함께 확인해야 한다

- 발견한 문제 또는 기준: 주문 생성, 결제 실패, 주문 조회, 관리자 조회가 서로 다른 모듈에 걸쳐 있고 주문 상태와 결제 시도는 공통 저장소에 연결된다.
- 근거 파일: `notes/order-status-request.md`, `notes/next-actions.md`, `src/server.ts`, `src/orders.ts`, `src/payments.ts`, `src/admin.ts`, `src/store.ts`
- 앞으로 필요한 Codex 행동: 이 요청을 수정하기 전에 주문 생성부터 결제 실패, 주문 조회, 관리자 목록까지 현재 흐름을 순서대로 추적하고 각 완료 조건에 대응하는 코드 위치를 확인한다.
- 적용할 AGENTS.md 섹션: `Before Editing`, `Repository Map`

### 3. 현재 테스트는 요청의 핵심 실패 흐름을 증명하지 못한다

- 발견한 문제 또는 기준: 기존 결제 테스트는 응답의 `ok` 필드 존재만, 관리자 테스트는 배열 여부만 확인하므로 실패 주문 보존, 재고 유지, 관리자 실패 정보의 정확성을 보장하지 않는다.
- 근거 파일: `notes/order-status-request.md`, `notes/next-actions.md`, `tests/orders.test.ts`
- 앞으로 필요한 Codex 행동: 사람에게서 테스트 범위를 확정받은 뒤 실패 주문 조회 결과, 상태와 저장소 보존, 재고 변화, 관리자 응답 등 승인된 완료 조건에 직접 대응하는 assertion을 마련한다.
- 적용할 AGENTS.md 섹션: `Testing Expectations`, `Verification`, `Definition of Done`

### 4. 이 요청의 기존 메모를 변경 전에 다시 확인해야 한다

- 발견한 문제 또는 기준: 요청 원문·완료 조건·현재 확인 사실, 다음 탐색 행동, 미확정 정책이 여러 메모에 분리되어 있어 일부만 읽으면 범위나 결정 상태를 오해할 수 있다.
- 근거 파일: `notes/order-status-request.md`, `notes/next-actions.md`, `notes/pending-decisions.md`, `notes/task-boundary.md`
- 앞으로 필요한 Codex 행동: 이 주문 상태 요청을 재개할 때 네 메모를 함께 읽고, 확인된 사실과 추정, 미결정 정책, 현재 단계의 금지 조건을 구분한 뒤 작업한다.
- 적용할 AGENTS.md 섹션: `Before Editing`
