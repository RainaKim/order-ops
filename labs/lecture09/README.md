# Lab 09 — Plan-first template 만들기

## 0. 이 랩이 끝나면

- Issue를 읽은 뒤 바로 구현하지 않고, Plan mode에서 계획을 먼저 검토합니다.
- 구현 계획이 답해야 할 파일, 순서, 검증, 위험, 제외 범위와 멈춤 조건을 구조화합니다.
- 재사용 가능한 `docs/templates/implementation-plan.md`를 완성합니다.
- Codex의 diff와 Review mode를 사용해 계획 구조를 검토하고 승인한 문제만 고칩니다.
- 사람이 계획을 승인하기 전에는 `src/`와 `tests/` 수정으로 넘어가지 않는 흐름을 연습합니다.
- 예상 소요 시간은 45분입니다.

## 1. 시작 전 상태 확인

- Lab 08의 Issue template과 `notes/issue-draft-l08.md`가 있어야 합니다.
- `docs/order-policy.md`, `docs/payment-policy.md`, `docs/inventory-policy.md`가 있어야 합니다.
- 앱 코드는 v0이며 이번 lab에서는 `src/`와 `tests/`를 수정하지 않습니다.
- `docs/templates/`에는 `workflow-skeleton.md`만 있어야 합니다.
- 실제 Issue의 implementation plan은 Lab 12에서 처음 작성합니다. 이번 lab에서는 특정 Issue의 답이 들어가지 않은 재사용 template만 만듭니다.

## 2. 사용할 Codex 기능과 산출물

| 단계 | Codex 기능 | 핵심 작업 | 결과 |
| --- | --- | --- | --- |
| E1 | Plan mode | Issue를 구현하지 않고 template 설계를 먼저 검토합니다. | 사람이 승인한 설계 계획 |
| E2 | 파일 `@` mention, Default mode | 승인한 계획으로 여덟 영역의 빈 template을 만듭니다. | `docs/templates/implementation-plan.md` |
| E3 | 변경사항 diff | 의도한 문서만 바뀌었고 특정 Issue의 답이 섞이지 않았는지 확인합니다. | 범위와 내용에 대한 사람 확인 |
| E4 | Review mode, Default mode, terminal | 문제만 검토하고 승인한 지적을 최소 수정한 뒤 같은 기준으로 검증합니다. | 완성된 plan template과 검증 결과 |

이번 lab의 흐름은 다음과 같습니다.

```text
Plan mode로 설계
→ 사람이 설계 계획 승인
→ Default mode로 template 생성
→ 변경사항 diff 확인
→ Review mode로 문제만 보고
→ 사람이 지적 승인
→ Default mode로 최소 수정
→ terminal에서 같은 기준으로 검증
→ Lab 09 종료
```

계획 template을 완성했다고 앱 구현 승인을 받은 것은 아닙니다. 실제 Issue 계획과 앱 구현은 Lab 12에서 별도의 사람 승인을 거칩니다.

## 3. 실습

### E1. Plan mode에서 template 설계하기

이번 단계의 목적은 좋은 답을 한 번에 생성하는 것이 아니라, Codex가 파일을 수정하기 전에 무엇을 만들 것인지 사람이 먼저 볼 수 있게 하는 것입니다.

#### 설계 질문

- Goal은 구현 방법이 아니라 무엇이 충족되면 작업이 성공으로 끝나는지를 요구하나요?
- Issue의 Acceptance Criteria를 Steps와 Tests에 연결할 수 있나요?
- 먼저 읽을 파일과 실제로 변경할 파일을 구분하나요?
- 계획이 틀렸거나 정보가 부족할 때 멈출 기준이 있나요?
- 특정 Issue의 정책 답을 재사용 template에 채우려 하지는 않나요?

#### Codex에서 실행

composer에서 **Plan mode**를 선택하고 `notes/issue-draft-l08.md`와 `docs/templates/workflow-skeleton.md`를 `@` mention으로 연결합니다.

```text
@notes/issue-draft-l08.md와 @docs/templates/workflow-skeleton.md를 기준으로
재사용 가능한 implementation plan template의 구조를 계획해줘.
특정 Issue의 답은 채우지 말고, 구현이나 파일 수정은 하지 마라.
```

Plan mode에서는 파일이 아니라 검토 가능한 계획이 결과로 나와야 합니다.

#### Human Gate — 설계 계획 승인

계획의 문장을 하나씩 고치는 대신 다음 경계를 확인합니다.

- [ ] `Goal`이 Issue의 완료 기준과 연결되는 성공 조건을 요구합니다.
- [ ] `Files to Read First`와 `Files to Change`의 책임이 다릅니다.
- [ ] `Steps`가 작은 진행 단위와 관찰 가능한 종료 상태를 요구합니다.
- [ ] `Tests to Add or Update`가 각 단계의 종료 상태를 확인할 수 있습니다.
- [ ] `Risks`, `Out of Scope`, `Stop Conditions`의 역할이 겹치지 않습니다.
- [ ] 성공·반복 한도·정체·사람 판단의 종료 조건이 포함됩니다.
- [ ] 사람 승인 전에는 `src/`와 `tests/`를 수정하지 않는 경계가 있습니다.
- [ ] 특정 Issue의 파일 목록이나 정책 답을 template에 미리 채우지 않습니다.

부족한 부분은 Plan mode에서 계획만 보완합니다. 이 Gate를 통과하기 전에는 Default mode로 전환하지 않습니다.

### E2. 승인한 계획으로 빈 template 만들기

Plan mode에서 승인한 설계를 실제 문서로 옮깁니다. 이때 여러 섹션을 만들기 위해 프롬프트를 반복하지 않고, 승인한 계획을 한 번에 실행합니다.

#### Codex에서 실행

**Default mode**로 전환하고 다음과 같이 요청합니다.

```text
승인한 계획대로 @docs/templates/implementation-plan.md를 만들어줘.
Goal, Files to Change, Files to Read First, Steps, Tests to Add or Update,
Risks, Out of Scope, Stop Conditions의 빈 구조와 작성 안내만 둬라.
각 단계는 입력 근거, 허용된 변경, 종료 상태와 확인 방법을 요구하고,
검증은 실행 방법과 기대 증거를 요구하게 해라.
Stop Conditions는 성공, 반복 한도, 정체, 사람 판단을 구분하고,
사람이 계획을 승인하기 전에는 src와 tests를 수정하지 않도록 해라.
특정 Issue의 답과 앱 코드는 수정하지 마라.
```

#### 빠른 확인

- [ ] 여덟 영역이 모두 있습니다.
- [ ] 각 영역에는 답이 아니라 작성 안내가 있습니다.
- [ ] Goal은 관찰 가능한 결과와 완료 기준의 연결을 요구합니다.
- [ ] Steps는 입력, 허용된 변경, 종료 상태와 확인 방법을 요구합니다.
- [ ] Tests는 아직 실행하지 않은 검증을 통과했다고 가정하지 않습니다.
- [ ] Risks는 영향과 감지 방법을 요구합니다.
- [ ] Out of Scope는 제외할 파일 또는 동작을 요구합니다.
- [ ] Stop Conditions는 성공·한도·정체·사람 판단을 구분합니다.

### E3. 변경사항 diff로 범위 확인하기

이번 단계에서는 Codex에게 다시 요약을 요청하지 않습니다. Codex의 변경사항 diff에서 실제 결과를 사람이 직접 확인합니다.

#### Codex에서 확인

변경사항 보기를 열고 `docs/templates/implementation-plan.md` diff를 확인합니다. 변경 목록에 다른 파일이 있다면 어떤 단계에서 왜 바뀌었는지 확인합니다.

| 확인 대상 | 통과 기준 |
| --- | --- |
| 변경 파일 | 새 template 외에 `src/`와 `tests/` 변경이 없음 |
| template 내용 | 특정 주문 상태, HTTP 응답, 구현 파일이나 정책 답이 채워지지 않음 |
| 파일 후보 | 읽을 파일과 변경할 파일을 별도로 작성하게 함 |
| Steps | 입력, 허용된 변경, 종료 상태와 확인 방법을 요구함 |
| Tests | 검증 대상, 실행 방법과 기대 증거를 요구함 |
| 경계 | Risks, Out of Scope, Stop Conditions가 서로 다른 판단을 요구함 |
| 승인 | 계획 승인 전 앱 코드를 수정하지 않는 조건이 있음 |

필요하면 terminal에서 같은 범위를 확인합니다.

```bash
git diff -- docs/templates/implementation-plan.md
git diff -- src tests
```

특정 Issue의 답이 template에 들어갔거나 앱 코드가 변경됐다면 Review로 넘어가지 말고 E2의 승인 범위부터 다시 확인합니다.

### E4. Review mode로 검토하고 승인한 지적만 고치기

검증이 있어야 계획의 성공 여부를 판단할 수 있고, 종료 조건이 있어야 반복이 헛돌지 않습니다. 이번 단계에서는 자동 반복을 만들지 않습니다. 사람이 다음 행동을 결정하는 한 번의 `review → repair → validate` 흐름만 수행합니다.

#### 실행 1 — Review mode

**Review mode**를 선택하고 검토 범위를 template 하나로 제한합니다.

```text
@docs/templates/implementation-plan.md만 검토해줘.
판정 불가능한 안내, 단계와 검증의 단절, 승인·중단 조건 누락을 우선 보고해라.
파일은 수정하지 마라.
```

Review 단계에서는 파일을 고치지 않고, 문제의 위치·영향·근거만 보고해야 합니다.

#### Human Gate — 지적 분류와 template 승인

각 지적을 `승인`, `보류`, `기각`으로 분류합니다.

1. 실제 계획을 작성할 때 잘못된 구현을 막는 문제인가?
2. 기존 여덟 영역의 책임 안에서 고칠 수 있는가?
3. 특정 Issue의 답을 넣지 않고도 고칠 수 있는가?

사람이 승인하지 않은 지적은 반영하지 않습니다. 사람에게 넘기는 것은 실패가 아니라 정책 결정, 범위 승인 또는 새로운 근거가 필요하다는 계획된 종료입니다.

#### 실행 2 — Default mode에서 최소 수정

**Default mode**로 돌아와 짧게 요청합니다.

```text
승인한 지적만 @docs/templates/implementation-plan.md에 최소한으로 반영해줘.
```

#### 실행 3 — terminal에서 검증

처음과 같은 완료 기준으로 다시 확인합니다.

```bash
node labs/tools/check.mjs 09
git diff -- docs/templates/implementation-plan.md
git diff -- src tests
```

최종 보고에서는 다음을 구분합니다.

- 구조 검사 통과 또는 실패
- 승인한 지적의 반영 여부
- `src/`와 `tests/`의 변경 여부
- 남은 문제 또는 사람 판단이 필요한 항목

## 4. Self-check

```bash
node labs/tools/check.mjs 09
git diff -- docs/templates/implementation-plan.md
git diff -- src tests
```

- [ ] Plan mode 결과를 사람이 승인한 뒤에만 template을 만들었습니다.
- [ ] 여덟 필수 영역이 있습니다.
- [ ] Goal이 성공 조건과 완료 기준의 연결을 요구합니다.
- [ ] Steps가 입력, 허용된 변경, 종료 상태와 확인 방법을 요구합니다.
- [ ] Tests가 검증 대상, 실행 방법과 기대 증거를 요구합니다.
- [ ] Risks와 Out of Scope가 영향과 범위를 구분합니다.
- [ ] Stop Conditions가 성공·한도·정체·사람 판단을 요구합니다.
- [ ] 계획 승인 전 앱 코드 수정 금지가 명시돼 있습니다.
- [ ] Review mode에서는 파일을 수정하지 않았습니다.
- [ ] 승인한 review 지적만 최소한으로 반영했습니다.
- [ ] 특정 Issue의 구현 답이 template에 들어가지 않았습니다.
- [ ] `src/`와 `tests/`가 변경되지 않았습니다.

## 5. 자주 하는 실수

- Plan mode를 선택했지만 파일 생성까지 요청합니다.
- 계획을 사람이 확인하기 전에 Default mode로 전환합니다.
- `Files to Read First`와 `Files to Change`에 같은 목록을 복사합니다.
- Steps를 `코드 수정`, `테스트`처럼 증거를 붙일 수 없는 큰 작업으로 둡니다.
- Tests에 파일 이름만 적고 무엇을 어떻게 확인할지 적지 않습니다.
- 실행하지 않은 테스트를 통과했다고 가정합니다.
- Stop Conditions에 실패 조건만 적고 성공·한도·정체 조건을 빠뜨립니다.
- diff를 확인하지 않고 Codex의 완료 보고만 믿습니다.
- Review mode에서 문제 보고와 파일 수정을 동시에 요청합니다.
- 사람이 승인하지 않은 review 지적까지 모두 반영합니다.
- 재사용 template에 `notes/issue-draft-l08.md`의 구체적인 정책 답이나 파일 목록을 채웁니다.
- template을 완성한 것을 실제 Issue의 구현 승인으로 오해하고 앱 코드를 수정합니다.

## 6. 다음 lab으로 넘기는 것

`docs/templates/implementation-plan.md`는 Lab 12에서 실제 Issue를 위한 계획을 작성할 때 처음 사용합니다. 그때 작성한 계획도 사람이 승인하기 전에는 구현으로 넘어가지 않습니다.

Lab 10에서는 구현 이후 반복 작업의 입력과 출력 형식을 재사용 가능한 prompt로 고정하고, Lab 11에서는 새 세션이 정책과 계획 template을 찾는 읽기 순서를 연결합니다.

## 7. 참고

- [Build iterative repair loops with Codex](https://developers.openai.com/cookbook/examples/codex/build_iterative_repair_loops_with_codex)
