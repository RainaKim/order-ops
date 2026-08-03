# Lab 20 — P4 장애 상황을 workflow로 한 번에 통과

## 0. 이 랩이 끝나면

- VOC와 로그를 incident note로 정리하고 원인 후보를 좁힙니다.
- planner, implementer, reviewer 흐름으로 마지막 표시 상태 결함을 해소합니다.
- `notes/incident-l20.md`, `notes/pr-final-l20.md`, `docs/agentic-workflow-starter-kit.md`, `notes/backlog-l20.md`를 완성합니다.
- 예상 소요 시간은 55분입니다.

## 1. 시작 전 상태 확인

- Lab 18 Issue, Lab 19 Automation 문서, `labs/fixtures/logs/l20-*.log`가 있어야 합니다.
- Lab 17 이후 관리자 응답에 실패 정보가 보이지만 표시 상태 위험은 남아 있어야 합니다.
- 작업 트리가 깨끗하고 전체 검증이 통과해야 합니다.

## 2. 실습 목표와 산출물

| 단계 | 핵심 작업 | 결과 |
| --- | --- | --- |
| E1 | VOC와 로그를 incident note의 확인된 사실로 정리합니다. | `notes/incident-l20.md` 초안 |
| E2 | 원인 후보를 세 개 세우고 수정·rollback·추가 조사로 판단합니다. | 완성된 원인 분석과 대응 결정 |
| E3 | 역할 분리로 계획·구현·review·검증을 통과시킵니다. | 표시 상태 코드·테스트와 `notes/pr-final-l20.md` |
| E4 | 재사용 원칙과 후속 작업을 starter kit으로 묶습니다. | starter kit, backlog와 완료 커밋 |

## 3. 실습

### E1. Incident note 시작하기

#### 설계 질문

- VOC와 로그에서 직접 확인된 사실과 추정은 무엇인가요?
- 고객 영향과 운영 영향 중 먼저 확인할 것은 무엇인가요?

#### 실행

Issue와 로그를 읽고 `notes/incident-l20.md`에 시나리오, 시간 범위, 증상, 영향, 확인된 사실, 미확인 항목을 기록합니다. 코드는 수정하지 않습니다.

#### 검증

- [ ] VOC와 로그 경로가 기록됐습니다.
- [ ] 확인된 사실과 가설이 구분됩니다.
- [ ] 고객 영향과 운영 영향이 각각 있습니다.

### E2. 원인 후보 세 개 좁히기

#### 설계 질문

- 결제 결과, 주문 상태, 표시 상태 중 어느 층에서 불일치가 생기나요?
- 수정, rollback, 추가 조사 중 현재 증거가 지지하는 행동은 무엇인가요?

#### 실행

incident note에 원인 후보 세 개, 후보별 확인 방법, 현재 동작과 기대 동작, 선택한 후보, 수정·rollback·추가 조사 판단을 기록하고 사람 승인을 받습니다.

#### 검증

- [ ] 원인 후보가 정확히 세 개 있습니다.
- [ ] 각 후보에 반증 가능한 확인 방법이 있습니다.
- [ ] 코드 수정 전 사람 승인 결과가 있습니다.
- [ ] 아직 앱 코드 diff가 없습니다.

### E3. 역할 분리로 구현하고 검증하기

#### 설계 질문

- 표시 상태는 과거 실패 전체가 아니라 어떤 현재 사실을 기준으로 해야 하나요?
- 재시도 성공과 실패 이력이 함께 있을 때 기대 결과를 어떤 테스트가 보호하나요?

#### 실행

planner가 승인된 plan을 만들고, implementer가 `deriveDisplayStatus()`와 관련 테스트만 수정하며, reviewer가 Issue, 정책, plan, diff, 검증을 대조합니다. 결과를 `notes/pr-final-l20.md`에 기록합니다.

#### 검증

- [ ] 재시도 성공 뒤 관리자 표시 상태가 현재 주문 상태와 일치합니다.
- [ ] 실패 이력과 결제 시도 기록은 보존됩니다.
- [ ] 회귀 테스트가 추가됐습니다.
- [ ] 전체 test, lint, typecheck가 통과합니다.
- [ ] PR 기록에 Risk와 Rollback이 있습니다.

### E4. Starter Kit과 backlog 만들기

#### 설계 질문

- 다른 repo로 옮겨도 유지할 최소 문서와 검증 루프는 무엇인가요?
- 자동화하지 못한 반복 작업과 사람 판단은 무엇으로 남길까요?

#### 실행

`docs/agentic-workflow-starter-kit.md`에 기준 문서, plan, 역할, 검증, Issue, Automation 연결 원칙을 정리하고 `notes/backlog-l20.md`에 후속 작업과 Automation 후보를 남깁니다. 마지막으로 Codex가 한 일과 사람이 판단한 일을 구분해 커밋합니다.

#### 검증

- [ ] starter kit이 특정 주문 코드 없이 재사용 가능한 원칙을 담습니다.
- [ ] backlog에 우선순위와 완료 조건이 있습니다.
- [ ] Codex 작업과 사람 판단이 구분돼 있습니다.
- [ ] v0의 네 결함이 모두 해소됐습니다.
- [ ] 이 lab의 커밋 수가 두 개 이하입니다.

## 4. Self-check

```bash
node labs/tools/check.mjs 20
```

## 5. 흔한 함정

- 로그를 읽기 전에 `deriveDisplayStatus()`를 바로 수정합니다.
- 과거 결제 실패 이력을 삭제해 표시 문제를 숨깁니다.
- Starter Kit에 이번 repo의 구체 파일만 나열합니다.

## 6. 다음 lab으로 넘기는 것

이제 starter kit과 backlog를 다음 repo에 이식하고, 남은 Automation 후보는 사람 승인과 중단 조건을 갖춘 뒤 운영합니다.
