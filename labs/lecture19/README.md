# Lab 19 — 백그라운드 실행과 Automation

## 0. 이 랩이 끝나면

- 지금까지 반복한 작업에서 Automation 후보를 고릅니다.
- Desktop App, CLI, Browser, Computer Use의 검증 역할을 분리합니다.
- `docs/automation/candidates.md`, `docs/automation/stop-conditions.md`를 만듭니다.
- 예상 소요 시간은 45분입니다.

## 1. 시작 전 상태 확인

- Lab 18 GitHub Issue와 `issue-kickoff.md`가 있어야 합니다.
- 지금까지 반복한 test, lint, typecheck, Issue 확인, PR 점검 과정을 다시 봅니다.
- 이 lab에서는 앱 코드를 수정하지 않습니다.

## 2. 실습 목표와 산출물

| 단계 | 핵심 작업 | 결과 |
| --- | --- | --- |
| E1 | 반복 작업에서 자동화 후보 네 종류를 찾습니다. | Automation 후보 목록 |
| E2 | 각 작업에 적합한 Codex surface와 확인 지점을 연결합니다. | 작업 surface map |
| E3 | 입력·출력·실행·승인·실패 알림을 정의합니다. | `docs/automation/candidates.md` |
| E4 | 자동 실행이 중단되고 상태를 보존할 조건을 만듭니다. | `docs/automation/stop-conditions.md`와 완료 커밋 |

## 3. 실습

### E1. Automation 후보 네 종류 찾기

#### 설계 질문

- 지금까지 두 번 이상 같은 입력과 검증으로 반복한 일은 무엇인가요?
- 사람 판단이 매번 필요한 일은 후보에서 제외해야 하나요?

#### 실행

Lab 01~18의 반복 작업을 돌아보고 빈도, 입력 안정성, 실패 영향, 사람 판단 필요도를 기준으로 후보 네 종류를 고릅니다.

#### 검증

- [ ] 후보가 네 종류 이상 있습니다.
- [ ] 각 후보에 반복 근거가 있습니다.
- [ ] 고위험 사람 판단 작업은 자동 실행 후보와 구분됩니다.

### E2. Surface 연결하기

#### 설계 질문

- 파일과 명령으로 판정할 작업, 웹 화면이 필요한 작업, GUI만 가능한 작업은 무엇인가요?
- 예약 실행 뒤 결과를 사람이 어디에서 검토할까요?

#### 실행

Desktop App은 계획과 리뷰, CLI는 결정적 명령 검증, Browser는 GitHub와 로컬 웹, Computer Use는 전용 연동이 없는 GUI, Automation은 검증된 반복 작업으로 매핑합니다.

#### 검증

- [ ] 각 작업이 가장 작은 적합 surface에 배치됐습니다.
- [ ] Browser와 Computer Use의 사용 조건이 구분됩니다.
- [ ] CLI에서 Scheduled 관리 화면을 찾도록 안내하지 않았습니다.

### E3. Automation 후보 정의서 작성하기

#### 설계 질문

- 매 실행의 입력과 출력이 고정돼 있나요?
- 언제 실행하고 언제 사람 승인을 받아야 하나요?

#### 실행

`docs/automation/candidates.md`에 각 후보의 Input, Output, Run Condition, Stop Condition, Human Approval, Failure Alert를 작성합니다. 실제 예약 작업을 만들기 전에 일반 세션에서 프롬프트를 시험합니다.

#### 검증

- [ ] 여섯 필드가 모든 후보에 있습니다.
- [ ] 실행 조건과 중단 조건이 판정 가능합니다.
- [ ] 실패 알림의 수신자와 포함 정보가 있습니다.
- [ ] 사람 승인 없이 외부 변경을 만들지 않습니다.

### E4. 중단 조건 표 만들기

#### 설계 질문

- 반복 실패, 범위 확장, 권한 부족, 데이터 부족, 외부 상태 변경을 어떻게 감지할까요?
- 중단 뒤 작업 트리와 보고서는 어떤 상태여야 하나요?

#### 실행

`docs/automation/stop-conditions.md`에 다섯 중단 조건, 감지 신호, 보존할 상태, 알림, 재개 주체를 표로 작성하고 커밋합니다.

#### 검증

- [ ] 중단 조건이 다섯 종류입니다.
- [ ] 각 조건에 감지 신호와 알림이 있습니다.
- [ ] 무한 재시도를 막는 상한이 있습니다.
- [ ] 이 lab의 커밋에 앱 코드 변경이 없습니다.

## 4. Self-check

```bash
node labs/tools/check.mjs 19
```

## 5. 흔한 함정

- 새 기능을 소개하려고 Automation 후보를 억지로 만듭니다.
- 첫 수동 실행을 검증하지 않고 바로 예약합니다.
- 중단 조건 없이 실패할 때마다 다시 시도합니다.

## 6. 다음 lab으로 넘기는 것

Automation 후보와 중단 조건은 Lab 20 backlog에 합쳐집니다. Lab 18 Issue와 Lab 19 상태를 유지한 채 최종 incident workflow를 시작합니다.
