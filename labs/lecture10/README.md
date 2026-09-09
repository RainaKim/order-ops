# Lab 10 — 반복 작업 prompt/checklist 만들기

## 0. 이 랩이 끝나면

- 반복해서 수행하는 테스트 보강, PR 설명, self-review를 재사용 가능한 prompt 계약으로 고정합니다.
- 세 prompt에 공통으로 `입력`, `금지`, `출력`, `검증` 영역을 두고 역할을 구분합니다.
- root `AGENTS.md`에는 prompt 전문이 아니라 경로와 사람이 선택할 사용 시점만 연결합니다.
- 자동 실행이 아닌, 사람이 상황에 맞는 prompt를 골라 실행하고 결과를 확인하는 흐름을 익힙니다.
- 40분 안에 세 prompt와 사용 시점 연결을 완성합니다.

Lab 08의 Issue는 작업의 입력 근거, 목표 결과, 변경 경계, 완료 증거라는 네 축을 고정했습니다. Lab 09의 implementation plan은 이를 읽을 파일, 바꿀 파일, 단계, 검증, 위험과 중단 조건을 포함한 여덟 영역으로 펼쳤습니다. 이번 Lab은 반복 작업마다 필요한 자료를 `입력`, 넘지 말아야 할 경계를 `금지`, 돌려줄 결과를 `출력`, 맞음을 확인할 방법을 `검증`으로 고정합니다. 이름과 칸 수는 달라도 `근거 → 경계 → 결과 → 증거`를 분리한다는 같은 계보입니다.

## 1. 시작 전 상태 확인

- Lab 08에서 만든 `.github/ISSUE_TEMPLATE/workflow-task.md`가 있어야 합니다.
- Lab 09에서 만든 `docs/templates/implementation-plan.md`가 있어야 합니다.
- root `AGENTS.md`의 기존 지침을 먼저 읽습니다.
- 앱 코드는 v0 상태이며 이번 Lab에서는 `src/`와 `tests/`를 수정하지 않습니다.
- `docs/prompts/`에는 특정 요청의 답이 아니라 여러 작업에 다시 쓸 빈 골격만 둡니다.
- 이번 Lab에서 prompt는 자동으로 실행되지 않습니다. Plan mode도 사용하지 않습니다.

## 2. 실습 목표와 산출물

| 단계 | 예상 시간 | 핵심 작업 | 결과 |
| --- | ---: | --- | --- |
| E1 | 9분 | 빠진 테스트와 의미 있는 assertion을 찾는 계약 작성 | `docs/prompts/test-generation.md` |
| E2 | 8분 | 검증 사실을 과장하지 않는 PR 설명 계약 작성 | `docs/prompts/pr-description.md` |
| E3 | 10분 | 계획 이탈과 누락 검증을 찾는 self-review 계약 작성 | `docs/prompts/self-review.md` |
| E4 | 9분 | 세 prompt의 수동 사용 시점을 root 지침에 연결하고 커밋 | `AGENTS.md` 연결과 커밋 |
| Self-check | 4분 | 산출물, diff, 앱 코드 무변경 확인 | Lab 10 완료 판정 |

```text
Issue와 plan, 현재 diff와 검증 결과
                    ↓
         사람이 사용할 prompt 선택
                    ↓
        입력 확인 → 결과 작성 → 검증
                    ↓
              다음 판단은 사람에게
```

이 흐름은 반복 작업의 형식을 고정하지만 작업을 자동으로 시작하지 않습니다. 각 prompt를 언제 쓸지, 입력이 충분한지, 다음 수정으로 넘어가도 되는지는 사람이 판단합니다.

## 3. 실습

### E1. 테스트 보강 prompt 만들기

새 기능을 요구하는 prompt가 아니라 현재 동작에서 빠진 케이스를 찾고 의미 있는 assertion을 추가하도록 돕는 prompt를 만듭니다. 테스트 개수는 성과가 아니며, 관찰해야 할 결과가 분명한지가 중요합니다.

#### 설계 질문

- 빠진 케이스를 찾으려면 현재 코드, 정책, 기존 테스트에서 각각 무엇을 읽어야 합니까?
- 상태 변화, 응답, 저장 결과 중 무엇을 확인해야 assertion의 의미를 설명할 수 있습니까?
- 테스트만 바꿀지 구현도 바꿀지는 언제 사람이 결정해야 합니까?
- 결과를 확인할 검증 명령은 누가 어떤 입력으로 제공해야 합니까?

#### Codex에서 실행

```text
목표: docs/prompts/test-generation.md에 새 기능이 아니라 빠진 케이스와 의미 있는 assertion을 찾는 재사용 prompt 골격을 만든다.
문맥: prompt 사용자가 현재 코드·정책·기존 테스트와 실행할 검증 명령을 입력하게 한다.
제약: 테스트 개수를 성과로 삼거나 통과만 위한 assertion을 요구하지 않고, 구현 변경 필요 시 사람이 테스트만 바꿀지 구현도 바꿀지 결정하기 전에는 구현을 고치지 않는다.
완료 조건: 입력·금지·출력·검증 H2와 각 영역의 짧은 작성 안내가 있고, 출력은 assertion이 확인할 상태 변화·응답·저장 결과를 드러내게 한다. 앱 코드는 수정하지 않는다.
```

#### 사람 확인

- [ ] `입력`, `금지`, `출력`, `검증` 네 영역이 순서대로 있는가?
- [ ] 입력이 현재 코드, 정책, 기존 테스트, 실행할 검증 명령을 모두 요구하는가?
- [ ] 테스트만 바꿀지 구현도 바꿀지 사람이 정하기 전에는 구현을 고치지 않는가?
- [ ] assertion이 상태 변화, 응답, 저장 결과 중 무엇을 확인하는지 드러나는가?
- [ ] 새 기능이나 테스트 개수 증가, 통과만 하는 assertion을 목표로 삼지 않는가?

### E2. PR 설명 prompt 만들기

PR 설명은 그럴듯한 요약보다 확인된 변경과 검증 사실을 정확히 전달해야 합니다. 특히 실행하지 않은 검증을 통과했다고 쓰지 못하게 하는 경계를 계약에 둡니다.

#### 설계 질문

- 변경 사실과 검증 사실을 쓰려면 어떤 diff와 실행 결과가 필요합니까?
- 실행한 검증과 실행하지 않은 검증을 독자가 어떻게 구분할 수 있습니까?
- 위험과 rollback 판단에 근거가 부족하면 어떤 식으로 표시해야 합니까?

#### Codex에서 실행

```text
목표: docs/prompts/pr-description.md에 diff와 검증 결과로 PR 설명을 작성하는 재사용 prompt 골격을 만든다.
문맥: prompt 사용자가 diff, 실행한 검증 결과, 실행하지 않은 검증을 입력하게 한다.
제약: 실행하지 않은 검증을 통과했다고 쓰거나 불확실한 내용을 사실처럼 단정하지 않는다.
완료 조건: 입력·금지·출력·검증 H2와 각 영역의 짧은 작성 안내가 있고, 출력은 변경 요약·실행한 검증·실행하지 않은 검증·위험·rollback 정보를 구분한다. 앱 코드는 수정하지 않는다.
```

#### 사람 확인

- [ ] 네 계약 영역이 E1과 같은 순서로 있는가?
- [ ] diff와 실제 검증 결과가 없으면 시작할 수 없다는 점이 분명한가?
- [ ] 실행한 검증과 실행하지 않은 검증이 별도 출력으로 구분되는가?
- [ ] 실행하지 않은 검증을 통과로 표현하지 못하게 하는가?
- [ ] 위험과 rollback, 불확실한 정보의 표시 방법을 요구하는가?

### E3. Self-review prompt 만들기

Self-review는 diff를 다시 읽어 주는 요약이 아닙니다. Issue와 plan을 기준으로 계획에 없던 변경과 빠진 검증을 찾아내고, validation 결과를 다음 판단에 되돌려 주는 review 단계입니다.

#### 설계 질문

- 승인된 범위와 실제 변경을 비교하려면 어떤 네 입력이 필요합니까?
- 계획에 없던 변경과 계획에는 있지만 검증되지 않은 결과를 어떻게 따로 찾습니까?
- 단순 요약과 조치가 필요한 발견 사항을 어떤 기준으로 구분합니까?
- 문제가 없을 때 결과가 비어 있는지, 실제로 없다고 판정한 것인지 어떻게 구분합니까?

#### Codex에서 실행

```text
목표: docs/prompts/self-review.md에 Issue, implementation plan, diff, 테스트 결과를 대조하는 재사용 prompt 골격을 만든다.
문맥: prompt 사용자가 Issue 초안, implementation plan, diff, 테스트 결과를 모두 제공하도록 요구한다.
제약: 파일을 수정하지 않고, diff를 다시 읽어 주는 요약을 계획과 어긋난 발견 사항처럼 보고하지 않는다.
완료 조건: 입력·금지·출력·검증 H2가 있고, 범위 이탈과 누락 테스트를 별도 발견 사항으로 보고하며 발견이 없으면 `없음`을 명시하고 단순 요약은 분리한다.
```

#### 사람 확인

- [ ] 입력이 Lab 08 Issue 초안, Lab 09 implementation plan, diff, 테스트 결과를 모두 요구하는가?
- [ ] 계획에 없던 변경과 누락 테스트를 서로 다른 항목으로 점검하는가?
- [ ] 발견 사항은 계획과 실제 결과의 어긋남이고, 요약은 diff 설명이라는 경계가 있는가?
- [ ] 발견 사항이 없을 때 `없음`을 명시하게 하는가?
- [ ] review가 파일 수정으로 넘어가지 않고 검증 근거와 남은 판단을 돌려주는가?

### E4. root AGENTS.md에 사용 시점 연결하기

세 prompt를 찾을 수 있도록 root `AGENTS.md`에 경로와 사용 시점만 연결합니다. 이것은 자동 호출 규칙이 아니라 사람이 반복 작업의 종류를 보고 적절한 prompt를 고르는 안내입니다.

#### 설계 질문

- 테스트 보강, PR 설명, self-review는 각각 어느 시점에 선택해야 합니까?
- 어느 prompt를 사용할지 사람이 판단해야 하는 경계는 무엇입니까?
- 기존 지침을 보존하면서 prompt 전문의 중복을 어떻게 피합니까?

#### Codex에서 실행

```text
목표: root AGENTS.md에 세 prompt의 경로와 각각 언제 사용하는지만 연결한다.
문맥: @docs/prompts/test-generation.md @docs/prompts/pr-description.md @docs/prompts/self-review.md와 현재 @AGENTS.md를 사용한다.
제약: prompt 전문을 복제하거나 자동 호출 규칙을 만들지 않고, 기존 섹션과 앱 코드를 보존한다.
완료 조건: 각 경로·사용 시점과 어떤 상황에서 사람이 prompt 선택을 판단해야 하는지 설명하는 한 줄이 있으며 src와 tests는 수정되지 않는다.
```

#### 사람 확인

- [ ] 세 prompt의 정확한 경로가 모두 연결되었는가?
- [ ] 테스트 보강, PR 설명, self-review의 사용 시점이 서로 구분되는가?
- [ ] 자동 호출이 아니라 사람이 상황에 맞게 고른다는 점이 명시되었는가?
- [ ] 사람이 판단해야 할 상황이 한 줄로 적혀 있는가?
- [ ] prompt 전문이나 기존 지침을 중복·훼손하지 않았는가?

확인이 끝나면 이번 Lab의 두 경로만 커밋합니다.

```bash
git add AGENTS.md docs/prompts
git commit -m "docs: add reusable workflow prompts"
```

#### 커밋 확인

- [ ] 확인을 마친 Lab 10 문서만 하나의 커밋으로 남겼는가?

## 4. Self-check

```bash
node labs/tools/check.mjs 10
git diff -- docs/prompts AGENTS.md
git diff -- src tests
```

- [ ] 검사기가 세 prompt 파일과 공통 heading의 존재·순서를 확인하는가?
- [ ] 문서 diff에는 빈 재사용 골격과 AGENTS 연결만 보이는가?
- [ ] `src/`와 `tests/` diff가 비어 있는가?
- [ ] 네 실습과 Self-check를 합쳐 40분 안에 수행할 수 있는가?

## 5. 자주 하는 실수

- 특정 요청을 완성한 요청문을 저장해 다른 작업에는 쓰기 어려운 prompt를 만듭니다.
- 실행하지 않은 검증도 통과했다고 쓰게 두어 PR 설명의 신뢰를 잃습니다.
- `AGENTS.md`에 prompt 전문을 복제해 두 문서가 서로 다르게 낡도록 만듭니다.
- 빠진 동작보다 테스트 개수를 늘리는 일을 목표로 삼습니다.
- self-review가 계획과 어긋난 발견 없이 diff 내용만 다시 요약합니다.

## 6. 다음 lab으로 넘기는 것

- `docs/prompts/test-generation.md`
- `docs/prompts/pr-description.md`
- `docs/prompts/self-review.md`
- 세 prompt의 경로와 수동 사용 시점이 연결된 root `AGENTS.md`

Lab 11에서는 지금까지 만든 정책, Issue, plan, prompt와 저장 위치를 기준 문서 풀세트로 함께 점검합니다.

## 7. 참고

- [Iterative repair loops with Codex](https://developers.openai.com/cookbook/examples/codex/build_iterative_repair_loops_with_codex)
