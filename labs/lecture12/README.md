# Lab 12 — 다중 파일 변경: 계획에서 diff 확인까지

## 0. 이 랩이 끝나면

- 실제 Issue를 implementation plan으로 바꾸고 사람 승인 뒤 구현합니다.
- 재고 차감과 부족 처리, 결제 실패 보존 동작을 정책과 맞춥니다.
- `notes/plans/l12-inventory-after-payment.md`와 `notes/diff-review-l12.md`를 만듭니다.
- 예상 소요 시간은 45분입니다.

## 1. 시작 전 상태 확인

- `labs/lecture12/inputs/l12-issue.md`와 11강 handoff가 있어야 합니다.
- root `AGENTS.md`, 정책 문서 세 개, implementation plan template을 먼저 읽습니다.
- `src/`, `tests/`는 v0이며 C2가 끝날 때까지 변경하지 않습니다.

## 2. 클립별 진행 지도

| 클립 | 클립명 | 분량 | 클립 종료 시 산출물 | 커밋 | 실습 |
| --- | --- | --- | --- | --- | --- |
| L12-C1 | 드디어 코드를 고친다 — 이슈 하나를 골라 시작하기 | 10분 | `notes/plans/l12-inventory-after-payment.md`의 Goal과 Files | 없음 | E1 |
| L12-C2 | 구현 전에 순서와 영향 범위를 먼저 적는 이유 | 12분 | 같은 plan에 순서, 영향, 테스트, 멈춤 조건을 추가하고 사람 승인 | 없음 | E2 |
| L12-C3 | 구현하고, 바뀐 diff를 계획과 대조하기 | 12분 | 재고·실패 주문 관련 코드 변경, `notes/diff-review-l12.md` | 없음 | E3 |
| L12-C4 | 변경이 계획보다 커졌을 때 멈추는 기준 | 11분 | diff review에 Scope guard와 검증 기록 추가 | 강 종료 커밋 | E4 |

## 3. 실습

### E1. Issue를 계획으로 옮기기

#### 설계 질문

- Issue의 완료 기준이 어느 정책 문서와 연결되나요?
- 먼저 읽을 파일과 바꿀 가능성이 있는 파일은 무엇인가요?

#### 실행

implementation plan template을 사용해 `notes/plans/l12-inventory-after-payment.md`를 만들고 Goal, Files to Read First, Files to Change를 채웁니다.

#### 검증

- [ ] Goal이 관찰 가능한 동작으로 적혀 있습니다.
- [ ] 읽을 파일에 정책 문서와 현재 테스트가 포함됩니다.
- [ ] 바꿀 파일마다 변경 이유가 있습니다.

### E2. 구현 전 계획 승인받기

#### 설계 질문

- 재고, 주문, 결제 상태 변화의 순서를 어떻게 나눌까요?
- 예상보다 많은 파일이 필요할 때 어디서 멈출까요?

#### 실행

Steps, Tests, Risks, Out of Scope, Stop Conditions를 채우고 사람에게 계획 승인을 요청합니다. 승인 전에는 코드 수정을 허용하지 않습니다.

#### 검증

- [ ] plan의 여덟 섹션이 모두 채워졌습니다.
- [ ] 상태 변화마다 검증할 테스트가 연결돼 있습니다.
- [ ] 사람 승인 결과가 기록됐습니다.
- [ ] `git diff --stat -- src/ tests/`가 비어 있습니다.

### E3. 구현하고 계획과 diff 대조하기

#### 설계 질문

- diff가 승인된 파일과 단계 안에 머물렀나요?
- 실패 주문 보존 뒤 기존 표시 로직에서 새 위험이 생기지 않나요?

#### 실행

승인된 계획 안에서 재고 차감을 결제 성공 이후로 옮기고, 부족 주문을 생성 전에 차단하며, 실패 상태와 실패 주문 보존을 구현합니다. `deriveDisplayStatus()`는 수정하지 않습니다. 계획과 실제 diff를 `notes/diff-review-l12.md`에 대조합니다.

#### 검증

- [ ] 재고 부족 주문은 저장되기 전에 차단됩니다.
- [ ] 재고는 성공 결제 뒤에만 줄어듭니다.
- [ ] 실패 주문과 결제 시도 기록이 보존됩니다.
- [ ] `deriveDisplayStatus()`는 변경되지 않았습니다.

### E4. Scope guard와 검증 기록

#### 설계 질문

- 계획에 없던 변경은 무엇이며 왜 생겼나요?
- 계획을 고칠지 구현을 되돌릴지 어떤 기준으로 판단할까요?

#### 실행

diff review에 `## Scope guard 판단`을 추가하고 계획 이탈, 수용 여부, 검증 명령과 결과를 기록한 뒤 커밋합니다.

#### 검증

- [ ] 계획과 다른 파일 또는 동작이 모두 기록됐습니다.
- [ ] `npm test`, `npm run lint`, `npm run typecheck`가 통과합니다.
- [ ] 실패한 검증을 숨기지 않았습니다.
- [ ] 변경 파일이 Issue와 plan의 범위 안에 있습니다.

## 4. Self-check

```bash
node labs/tools/check.mjs 12
```

## 5. 흔한 함정

- 계획 승인 전에 작은 코드 변경을 먼저 시작합니다.
- 실패 주문 보존과 함께 `deriveDisplayStatus()`까지 고쳐 18강 VOC의 원인을 없앱니다.
- 테스트 실패를 맞추기 위해 정책을 바꿉니다.

## 6. 다음 강으로 넘기는 것

12강 코드 상태와 검증 기록은 13강 환각 패치를 식별하는 기준선입니다. `deriveDisplayStatus()`의 위험은 고치지 않고 관찰 대상으로 남깁니다.
