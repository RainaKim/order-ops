# Lab 09 — Plan-first template 만들기

## 0. 이 랩이 끝나면

- Issue를 읽은 뒤 바로 구현하지 않고, 구현 계획이 답해야 할 질문을 구조화합니다.
- 수정 후보 파일과 먼저 읽을 파일, 작업 순서와 검증 근거를 구분합니다.
- 재사용 가능한 `docs/templates/implementation-plan.md`를 완성합니다.
- Codex의 diff와 Review mode를 사용해 계획 구조를 검토하고 승인한 문제만 고칩니다.
- 사람이 계획을 승인하기 전에는 `src/`와 `tests/` 수정으로 넘어가지 않는 흐름을 만듭니다.
- 예상 소요 시간은 45분입니다.

## 1. 시작 전 상태 확인

- Lab 08의 Issue template과 `notes/issue-draft-l08.md`가 있어야 합니다.
- `docs/order-policy.md`, `docs/payment-policy.md`, `docs/inventory-policy.md`가 있어야 합니다.
- 앱 코드는 v0이며 이번 lab에서는 `src/`와 `tests/`를 수정하지 않습니다.
- `docs/templates/`에는 `workflow-skeleton.md`만 있어야 합니다.
- 실제 Issue의 implementation plan은 Lab 12에서 처음 작성합니다. 이번 lab에서는 특정 Issue의 답이 들어가지 않은 재사용 template만 만듭니다.

## 2. 실습 목표와 산출물

| 단계 | 커리큘럼 목표 | 핵심 작업 | 결과 |
| --- | --- | --- | --- |
| E1 | Plan template 구조 | 여덟 영역의 빈 구조와 짧은 목적 안내를 만듭니다. | `docs/templates/implementation-plan.md` 골격 |
| E2 | 파일 후보와 순서 | 읽을 파일·바꿀 파일·작은 Steps의 작성 안내를 추가합니다. | 파일과 단계의 경계 |
| E3 | 리스크와 제외 범위 | Tests, Risks, Out of Scope의 작성 안내를 추가하고 diff를 확인합니다. | 검증·위험·제외 경계 |
| E4 | 승인 전 구현 금지 | Stop Conditions를 추가하고 Review mode 검토·사람 승인·최소 수정을 수행합니다. | 완성된 template과 검증 결과 |

이번 lab의 흐름은 다음과 같습니다.

```text
E1 빈 구조
→ E2 파일·순서 안내
→ E3 검증·위험·제외 범위 안내
→ E4 중단·승인 기준과 review
→ Lab 09 종료
```

각 행은 하나의 실습에만 대응합니다. 이번 lab에서는 Plan mode로 실제 구현 계획을 만들지 않습니다. 실제 Issue를 Plan mode에서 계획하고 사람 승인을 받는 흐름은 Lab 12에서 다룹니다.

## 3. 실습

### E1. Plan template의 빈 구조 만들기

#### 설계 질문

- Goal은 구현 방법이 아니라 무엇이 충족되면 작업이 성공으로 끝나는지를 묻나요?
- 여덟 영역이 앞으로 필요한 판단을 빠짐없이 담을 수 있나요?
- 특정 Issue의 파일·정책 답이 template에 미리 들어가지는 않나요?

#### Codex에서 실행

`docs/templates/workflow-skeleton.md`를 `@` mention으로 연결하고, 빈 구조만 만들게 합니다.

```text
@docs/templates/workflow-skeleton.md를 기준으로
@docs/templates/implementation-plan.md에 재사용 가능한 implementation plan의 빈 구조를 만들어줘.
Goal, Files to Change, Files to Read First, Steps, Tests to Add or Update,
Risks, Out of Scope, Stop Conditions의 heading과 각 영역의 짧은 목적 안내만 둬라.
특정 Issue의 답과 앱 코드는 수정하지 마라.
```

#### 사람 확인

- [ ] 여덟 heading이 모두 있습니다.
- [ ] 각 heading에 답이 아니라 짧은 목적 안내만 있습니다.
- [ ] Goal이 성공 결과와 완료 기준의 연결을 요구합니다.
- [ ] 특정 Issue의 상태, 응답, 파일 목록이나 정책 답이 들어가지 않았습니다.

### E2. 파일 후보와 작업 순서 연결하기

#### 설계 질문

- 먼저 읽을 파일과 바꿀 파일의 책임은 어떻게 다른가요?
- Steps가 큰 작업 목록이 아니라 작고 검토 가능한 변화로 나뉘나요?
- 단계가 끝났다는 것을 무엇으로 확인할 수 있나요?

#### Codex에서 실행

```text
@docs/templates/implementation-plan.md의 Files to Change, Files to Read First,
Steps 영역의 작성 안내를 구체화해줘.
Files to Read First는 먼저 읽을 파일과 이유를, Files to Change는 승인된 변경 후보와
변경 책임을 요구하게 해라. Steps는 입력 근거, 허용된 변경, 관찰 가능한 종료 상태,
확인 방법을 요구하게 해라. 다른 영역과 앱 코드는 수정하지 마라.
```

#### 사람 확인

- [ ] `Files to Read First`는 조사 근거와 읽는 이유를 요구합니다.
- [ ] `Files to Change`는 승인된 변경 후보와 책임을 요구합니다.
- [ ] Steps가 입력 근거, 허용된 변경, 종료 상태와 확인 방법을 요구합니다.
- [ ] 아직 계획에 없는 파일을 바꾸라고 요구하지 않습니다.

### E3. 검증, 리스크와 제외 범위 연결하기

#### 설계 질문

- Tests가 테스트 파일 이름이 아니라 각 Step의 종료 상태를 확인할 증거를 요구하나요?
- Risks는 영향과 감지 방법을 함께 요구하나요?
- Out of Scope는 이번 계획의 변경 경계를 실제로 제한하나요?

#### Codex에서 실행

```text
@docs/templates/implementation-plan.md의 Tests to Add or Update, Risks,
Out of Scope 영역의 작성 안내를 구체화해줘.
Tests는 각 Steps 항목의 종료 상태와 직접 연결된 검증 대상, 실행 방법, 기대 증거를
요구하게 해라. Risks는 위험·영향·감지 방법을, Out of Scope는 제외할 파일·동작·정책을
요구하게 해라. 다른 영역과 앱 코드는 수정하지 마라.
```

#### Codex에서 확인

변경사항 diff에서 template만 바뀌었는지 확인합니다.

| 확인 대상 | 통과 기준 |
| --- | --- |
| Tests | 각 Steps 항목의 종료 상태와 직접 연결된 검증을 요구함 |
| Risks | 위험, 영향과 감지 방법을 요구함 |
| Out of Scope | 제외할 파일, 동작 또는 정책을 요구함 |
| 변경 범위 | template 외의 `src/`, `tests/` 변경이 없음 |

필요하면 terminal에서 확인합니다.

```bash
git diff -- docs/templates/implementation-plan.md
git diff -- src tests
```

### E4. Stop Conditions와 사람 승인으로 완성하기

Stop Conditions는 마지막 체크리스트가 아니라 구현 중 더 진행하면 안 되는 조건입니다. 이 단계에서만 Review mode를 사용해 template의 품질을 검토합니다.

#### 설계 질문

- 모든 검증이 통과하고 남은 문제가 없을 때 성공으로 끝나는 기준이 있나요?
- 정해진 반복 한도에 도달하면 멈추나요?
- 직전 검증과 비교해 남은 문제가 줄지 않는 정체를 판정할 수 있나요?
- 정책 미결, 범위 확장이나 근거 부족을 사람 판단으로 넘기나요?
- 계획이 승인되기 전 `src/`와 `tests/`를 수정하지 않나요?

#### 실행 1 — Stop Conditions 추가

```text
@docs/templates/implementation-plan.md의 Stop Conditions 영역을 구체화해줘.
성공, 반복 한도, 정체, 사람 판단의 네 조건과 계획 승인 전 src와 tests를
수정하지 않는 승인 Gate를 요구하게 해라. 다른 영역과 앱 코드는 수정하지 마라.
```

#### 실행 2 — Review mode

**Review mode**를 선택하고 검토 범위를 template 하나로 제한합니다.

```text
@docs/templates/implementation-plan.md만 검토해줘.
판정 불가능한 안내, Steps와 Tests의 단절, 승인·중단 조건 누락을 우선 보고해라.
파일은 수정하지 마라.
```

#### Human Gate — 지적 분류와 template 승인

각 지적을 `승인`, `보류`, `기각`으로 분류합니다.

1. 실제 계획을 작성할 때 잘못된 구현을 막는 문제인가?
2. 기존 여덟 영역의 책임 안에서 고칠 수 있는가?
3. 특정 Issue의 답을 넣지 않고도 고칠 수 있는가?

사람이 승인하지 않은 지적은 반영하지 않습니다. 사람에게 넘기는 것은 실패가 아니라 정책 결정, 범위 승인 또는 새로운 근거가 필요하다는 계획된 종료입니다.

#### 실행 3 — Default mode에서 최소 수정과 검증

```text
승인한 지적만 @docs/templates/implementation-plan.md에 최소한으로 반영해줘.
```

```bash
node labs/tools/check.mjs 09
git diff -- docs/templates/implementation-plan.md
git diff -- src tests
```

최종 보고에서는 구조 검사 통과 여부, 승인한 지적의 반영 여부, 앱 코드 변경 여부와 남은 사람 판단 항목을 구분합니다.

## 4. Self-check

```bash
node labs/tools/check.mjs 09
git diff -- docs/templates/implementation-plan.md
git diff -- src tests
```

- [ ] 여덟 필수 영역이 있습니다.
- [ ] Goal이 성공 조건과 완료 기준의 연결을 요구합니다.
- [ ] Files to Read First와 Files to Change가 서로 다른 책임을 요구합니다.
- [ ] Steps가 입력, 허용된 변경, 종료 상태와 확인 방법을 요구합니다.
- [ ] Tests가 각 Steps 항목의 종료 상태와 직접 연결된 증거를 요구합니다.
- [ ] Risks와 Out of Scope가 영향과 범위를 구분합니다.
- [ ] Stop Conditions가 성공·한도·정체·사람 판단을 요구합니다.
- [ ] 계획 승인 전 앱 코드 수정 금지가 명시돼 있습니다.
- [ ] Review mode에서는 파일을 수정하지 않았습니다.
- [ ] 승인한 review 지적만 최소한으로 반영했습니다.
- [ ] 특정 Issue의 구현 답이 template에 들어가지 않았습니다.
- [ ] `src/`와 `tests/`가 변경되지 않았습니다.

## 5. 자주 하는 실수

- E1에서 여덟 heading 대신 특정 Issue의 답을 채웁니다.
- `Files to Read First`와 `Files to Change`에 같은 목록을 복사합니다.
- Steps를 `코드 수정`, `테스트`처럼 증거를 붙일 수 없는 큰 작업으로 둡니다.
- Tests에 파일 이름만 적고 어떤 Step의 무엇을 확인하는지 적지 않습니다.
- Risks와 Out of Scope를 같은 걱정 목록으로 만듭니다.
- Stop Conditions에 실패 조건만 적고 성공·한도·정체 조건을 빠뜨립니다.
- diff를 확인하지 않고 Codex의 완료 보고만 믿습니다.
- Review mode에서 문제 보고와 파일 수정을 동시에 요청합니다.
- 사람이 승인하지 않은 review 지적까지 모두 반영합니다.
- template을 완성한 것을 실제 Issue의 구현 승인으로 오해하고 앱 코드를 수정합니다.

## 6. 다음 lab으로 넘기는 것

`docs/templates/implementation-plan.md`는 Lab 12에서 실제 Issue를 위한 계획을 작성할 때 처음 사용합니다. 그때 작성한 계획도 사람이 승인하기 전에는 구현으로 넘어가지 않습니다.

Lab 10에서는 구현 이후 반복 작업의 입력과 출력 형식을 재사용 가능한 prompt로 고정하고, Lab 11에서는 새 세션이 정책과 계획 template을 찾는 읽기 순서를 연결합니다.

## 7. 참고

- [Build iterative repair loops with Codex](https://developers.openai.com/cookbook/examples/codex/build_iterative_repair_loops_with_codex)
