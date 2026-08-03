# Lab 16 — P3 구현과 검증 루프 제작

## 0. 이 랩이 끝나면

- Lab 12~15 변경을 하나의 리뷰 가능한 PR 후보로 묶습니다.
- 일곱 항목의 `docs/checklists/pr-preflight.md`를 만들고 실행합니다.
- `.github/pull_request_template.md`, `notes/pr-draft-l16.md`를 완성합니다.
- 예상 소요 시간은 55분입니다.

## 1. 시작 전 상태 확인

- Lab 15 코드와 테스트가 모두 커밋돼 있어야 합니다.
- 작업 트리는 깨끗하고 test, lint, typecheck가 통과해야 합니다.
- 이 lab에서는 앱 코드를 추가로 수정하지 않습니다.

## 2. 실습 목표와 산출물

| 단계 | 핵심 작업 | 결과 |
| --- | --- | --- |
| E1 | 구현·테스트·문서 변경을 하나의 PR 후보 범위로 묶습니다. | 계획 대비 변경 파일 목록 |
| E2 | 리뷰 요청 전에 통과할 preflight를 작성하고 실행합니다. | `docs/checklists/pr-preflight.md` |
| E3 | 재사용 가능한 PR template과 현재 작업의 draft를 만듭니다. | `.github/pull_request_template.md`, `notes/pr-draft-l16.md` |
| E4 | 검증 근거를 기준으로 review-ready 여부를 판정합니다. | 완성된 PR draft와 완료 커밋 |

## 3. 실습

### E1. PR 후보 범위 묶기

#### 설계 질문

- Lab 12~15 변경 중 하나의 목적과 연결되지 않는 파일은 무엇인가요?
- 리뷰어가 정책에서 코드와 테스트까지 어떤 순서로 읽어야 하나요?

#### 실행

`git log --oneline`에서 Lab 12 시작 직전 커밋을 찾고, 그 커밋부터 현재까지의 diff를 확인합니다. 변경 파일을 정책, plan, 코드, 테스트, 검증 기록으로 분류하며 새 코드는 작성하지 않습니다.

#### 검증

- [ ] 변경 파일이 다섯 범주 중 하나에 배치됐습니다.
- [ ] 범위 밖 파일이 별도로 표시됐습니다.
- [ ] `src/`와 `tests/`의 새 변경이 없습니다.

### E2. PR preflight 작성하고 실행하기

#### 설계 질문

- 리뷰 요청 전에 자동으로 확인할 것과 사람이 볼 것은 무엇인가요?
- 실패 결과를 숨기지 않고 중단하게 할 항목은 무엇인가요?

#### 실행

`docs/checklists/pr-preflight.md`에 scope, policy, tests, lint, typecheck, diff, failure handling의 일곱 항목을 작성하고 실제로 실행합니다.

#### 검증

- [ ] 체크리스트가 일곱 항목입니다.
- [ ] 각 항목에 실행 방법 또는 관찰 대상이 있습니다.
- [ ] 실패한 항목은 통과로 표시되지 않았습니다.

### E3. PR template과 draft 작성하기

#### 설계 질문

- 리뷰어가 작업 배경을 다시 탐색하지 않게 어떤 링크가 필요한가요?
- 위험과 rollback을 어느 수준까지 적어야 하나요?

#### 실행

`.github/pull_request_template.md`에 Summary, Changed Files, Verification, Risk, Rollback Note, Reviewer Notes의 빈 구조를 만들고 현재 작업의 초안을 `notes/pr-draft-l16.md`에 작성합니다.

#### 검증

- [ ] template은 특정 작업 내용 없이 재사용 가능합니다.
- [ ] draft는 issue, plan, 정책 문서를 참조합니다.
- [ ] 실행한 검증과 실행하지 않은 검증이 구분됩니다.

### E4. Review-ready 판정하기

#### 설계 질문

- reviewer가 추가 탐색 없이 변경 이유를 추적할 수 있나요?
- 아직 사람 결정이나 실패 검증이 남아 있나요?

#### 실행

PR draft에 `## Review-ready 판정`을 추가하고 남은 차단 조건, 리뷰 순서, 사람 확인 지점을 기록한 뒤 커밋합니다.

#### 검증

- [ ] review-ready 여부가 근거와 함께 적혀 있습니다.
- [ ] 남은 위험과 사람 확인이 숨겨지지 않았습니다.
- [ ] 전체 검증 명령이 통과합니다.
- [ ] 이 lab의 커밋에 앱 코드 변경이 없습니다.

## 4. Self-check

```bash
node labs/tools/check.mjs 16
```

## 5. 흔한 함정

- preflight를 새 npm script로 미리 등록해 학습 지점을 없앱니다.
- PR template과 현재 PR draft를 같은 파일로 만듭니다.
- review-ready를 검증 근거 없이 선언합니다.

## 6. 다음 lab으로 넘기는 것

Lab 17에서는 같은 작업을 planner, implementer, reviewer 역할로 나눕니다.
