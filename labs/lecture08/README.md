# Lab 08 — 모호한 요청을 작업 가능한 Issue로 바꾸기

## 0. 이 랩이 끝나면

- 짧고 모호한 요청에서 확인된 사실, 빠진 정보와 사람 결정을 구분합니다.
- 아홉 개 본문 필드를 가진 Markdown Issue template을 만듭니다.
- 완료 여부를 참 또는 거짓으로 판정할 수 있는 Acceptance Criteria 작성 기준을 만듭니다.
- 제공 입력을 template 구조의 `notes/issue-draft-l08.md`로 변환합니다.
- GitHub의 새 Issue 화면에서 template이 실제로 노출되는지 확인합니다.
- 예상 소요 시간은 45분입니다.

## 1. 시작 전 상태 확인

- Lab 07의 세 정책 문서와 root `AGENTS.md` 연결이 완료돼야 합니다.
- `notes/order-status-plan.md`와 `docs/templates/workflow-skeleton.md`를 읽을 수 있어야 합니다.
- `.github/`는 아직 없어야 합니다. 이 lab에서 처음 만듭니다.
- 입력은 `labs/lecture08/inputs/bad-issue-sample.md`입니다.
- 이번 lab에서도 `src/`와 `tests/`를 수정하지 않습니다.

### 이번 lab의 진행 원칙

| 역할 | 선택 |
| --- | --- |
| 누락·경계·정책 충돌 판단 | Desktop App에서 Sol을 사용합니다. |
| template과 실제 draft 작성 | 사람이 범위를 승인한 뒤 Terra를 사용합니다. |
| 형식·경로·diff 점검 | CLI와 Luna를 사용합니다. |
| GitHub에서 실제 표시 확인 | default branch 반영 후 Browser를 사용합니다. |

Issue template은 답을 대신 쓰는 문서가 아니라 필요한 입력을 빠뜨리지 않게 하는 플랫폼 설정입니다. Markdown template은 default branch의 `.github/ISSUE_TEMPLATE`에 있어야 새 Issue 선택 화면에 나타나며, `name`과 `about` front matter가 필요합니다. 자세한 동작은 [GitHub 공식 문서](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)를 기준으로 합니다.

## 2. 실습 목표와 산출물

| 단계 | 핵심 작업 | 결과 |
| --- | --- | --- |
| E1 | 나쁜 Issue가 작업 시작에 부족한 이유를 진단합니다. | 대화의 누락·결정 필요 목록 |
| E2 | 메타데이터와 아홉 본문 필드를 설계합니다. | `.github/ISSUE_TEMPLATE/workflow-task.md` |
| E3 | Acceptance Criteria 안내가 판정 가능한지 검토합니다. | 같은 template의 완료 기준 작성 규칙 |
| E4 | 제공 입력을 실제 Issue draft로 변환하고 표시를 확인합니다. | `notes/issue-draft-l08.md`와 완료 커밋 |

## 3. 실습

### E1. 나쁜 Issue를 수정 전에 진단하기

입력의 문장은 문제를 알리지만 현재 동작, 기대 동작, 정책 선택과 완료 증거를 구분하지 않습니다. Codex가 빈칸을 추측해 곧바로 좋은 Issue처럼 다시 쓰면 요청자가 하지 않은 결정을 구현 범위에 넣게 됩니다. 첫 단계에서는 파일을 만들지 않고 무엇이 확인됐고 무엇을 물어야 하는지만 찾습니다.

#### 설계 질문

- 입력에서 그대로 인용할 수 있는 요청과 확인이 필요한 주장은 무엇인가요?
- 현재 동작과 기대 동작 중 어느 쪽이 비어 있나요?
- 범위를 정하지 않으면 함께 고쳐질 수 있는 동작은 무엇인가요?
- 기존 정책 문서로 답할 수 있는 것과 사람이 선택할 것은 무엇인가요?

#### 실행

Desktop App에서 `@labs/lecture08/inputs/bad-issue-sample.md`를 연결합니다. Sol에게 Lab 07 정책과 현재 코드를 읽고 각 문장을 `확인된 요청`, `코드로 확인할 사실`, `사람 결정`, `근거 없는 추정`으로 분류하게 합니다. 아직 `.github/`나 draft를 만들지 않습니다.

```text
목표: 제공된 Issue가 작업 시작에 부족한 이유를 진단한다.
문맥: @labs/lecture08/inputs/bad-issue-sample.md 와 세 정책 문서, 현재 코드를 사용한다.
제약: 빈 정보를 추측해 채우거나 template·코드 파일을 만들지 않는다.
완료 조건: 문장별 분류와 누락 정보, 정책 근거, 사람이 답할 질문이 구분돼 있다.
```

##### 사람 확인 — 실제 누락과 정책 질문

진단 결과를 바로 다음 프롬프트의 답으로 사용하지 않습니다. 다음을 확인해 잘못된 진단만 고칩니다.

- 입력에 없는 내용을 현재 요청이라고 표현하지 않았는가?
- 코드로 확인할 사실을 사람의 취향 질문으로 바꾸지 않았는가?
- Lab 07에서 확정한 정책을 다시 미결 질문으로 만들지 않았는가?
- “재고 문제”처럼 범위가 넓은 표현을 구체적인 선택 하나로 임의 축소하지 않았는가?
- 구현 방법과 완료 조건을 같은 누락으로 취급하지 않았는가?

승인한 진단은 E2의 필드 설계와 E4의 실제 draft 변환에 재사용합니다. 별도 notes 파일로 복제하지 않습니다.

#### 검증

- [ ] 입력 문장이 네 종류로 분류됐습니다.
- [ ] 누락 정보가 현재·기대·범위·완료·사람 결정 관점으로 구분됩니다.
- [ ] 기존 정책으로 답할 내용과 새로 물을 내용이 구분됩니다.
- [ ] `.github/`, `notes/issue-draft-l08.md`, 앱 코드에 변화가 없습니다.

### E2. 작업 가능한 Issue template 설계하기

E1의 누락 목록을 한 요청의 답으로 채우는 대신, 다음 Issue에서도 같은 종류의 정보를 요구하는 빈 구조로 바꿉니다. template에는 특정 주문 요청의 결과가 아니라 작성자가 답해야 할 질문과 경계만 남습니다.

#### 설계 질문

- Context와 Current Behavior는 무엇을 다르게 요구해야 하나요?
- Expected Behavior와 Acceptance Criteria는 어떻게 구분하나요?
- Scope·Out of Scope·Human Decision Needed가 각각 막는 범위 확장은 무엇인가요?
- References는 정책 내용을 복사하지 않고 어떻게 기준 문서로 연결하나요?

#### 실행

Sol에게 E1의 누락 분류와 `docs/templates/workflow-skeleton.md`를 대조해 아홉 필드의 목적과 이웃 필드와의 경계를 표로 먼저 제시하게 합니다. 필드 이름과 순서는 `Summary`, `Context`, `Current Behavior`, `Expected Behavior`, `Scope`, `Out of Scope`, `Acceptance Criteria`, `Human Decision Needed`, `References`로 고정합니다.

```text
목표: 빈 Markdown Issue template을 만든다.
문맥: E1 진단과 workflow skeleton, GitHub template 위치 규칙을 사용한다.
제약: 아홉 필드 순서를 유지하고 ______ 요청의 내용이나 구현 답을 미리 채우지 않는다.
완료 조건: 유효한 front matter와 필드별 작성 질문이 있는 빈 template이다.
```

##### 사람 확인 — 필드 책임

- 원 요청과 배경을 Context에 중복해서 쓰게 하지 않는가?
- Current Behavior는 관찰 사실, Expected Behavior는 승인된 목표를 요구하는가?
- Acceptance Criteria가 기대 동작을 반복하지 않고 완료 증거를 요구하는가?
- Scope와 Out of Scope가 실제 변경 경계를 양쪽에서 제한하는가?
- Human Decision Needed가 Codex의 임의 선택을 막는가?
- References가 정책·코드·관련 기록의 위치를 요구하는가?

승인 후 Terra에게 `.github/ISSUE_TEMPLATE/workflow-task.md`를 만들게 합니다. YAML front matter에는 template 선택 화면에 필요한 `name`과 `about`을 포함하고, 본문은 아홉 H2와 작성 안내만 둡니다. 특정 주문 상태, 응답, 파일 경로나 정책 답은 채우지 않습니다.

Luna로 front matter 경계, 아홉 heading의 존재·순서와 `git diff -- .github/ISSUE_TEMPLATE/workflow-task.md`를 확인합니다. Acceptance Criteria의 상세 안내는 E3에서 검토하므로 다른 필드까지 다시 작성하지 않습니다.

#### 검증

- [ ] 파일이 `.github/ISSUE_TEMPLATE/workflow-task.md`에 있습니다.
- [ ] front matter에 `name`과 `about`이 있습니다.
- [ ] 아홉 H2가 정해진 순서로 있습니다.
- [ ] 각 필드의 작성 질문이 이웃 필드와 다른 책임을 가집니다.
- [ ] 특정 주문 요청의 내용이나 완성된 정책 답이 없습니다.

### E3. Acceptance Criteria를 판정 가능하게 만들기

Acceptance Criteria는 해야 할 일을 길게 설명하는 곳이 아니라 완료 후 참 또는 거짓으로 판정할 계약입니다. 구현 파일과 함수명을 미리 고정하지 않고도 입력, 행동, 응답·상태·저장 결과와 검증 증거를 요구할 수 있어야 합니다.

#### 설계 질문

- 각 기준은 어떤 행동 뒤 어떤 결과를 관찰해야 통과하나요?
- 여러 결정을 한 체크박스에 묶어 일부만 통과하는 상황을 만들지 않았나요?
- 정책 문서와 충돌하거나 구현 방법을 고정하는 안내가 있나요?

#### 실행

Sol에게 template의 `## Acceptance Criteria` 작성 안내만 검토하게 합니다. E1 입력을 실제 기준으로 채우지 않고, 작성자가 각 체크박스에 시작 조건·행동·관찰 결과·검증 근거를 남길 수 있는지 반례로 확인합니다.

```text
목표: template의 Acceptance Criteria 작성 안내를 판정 가능하게 다듬는다.
문맥: 현재 template과 세 정책 문서의 판정 기준을 사용한다.
제약: 실제 Issue의 기준을 대신 쓰거나 다른 여덟 필드를 수정하지 않는다.
완료 조건: 체크박스 하나가 결정 하나와 관찰 가능한 결과 하나를 요구한다.
```

##### 사람 확인 — 완료 계약

`잘 동작한다`, `적절히 처리한다`, `필요하면 테스트한다`처럼 실행 후에도 판정할 수 없는 문장을 걸러냅니다. 한 체크박스가 상태·응답·재고·관리자 표시를 모두 묶게 하지 않고, 정책 선택이 남아 있으면 Acceptance Criteria에 숨기지 않고 `Human Decision Needed`로 돌려보냅니다.

승인 후 Terra에게 `## Acceptance Criteria`의 안내만 최소 수정하게 합니다. Luna로 다른 heading과 front matter가 보존됐는지 diff를 확인합니다.

#### 검증

- [ ] Acceptance Criteria 입력 영역이 체크박스를 요구합니다.
- [ ] 각 기준이 시작 조건·행동·관찰 결과를 요구합니다.
- [ ] 한 체크박스에 서로 다른 결정이 묶이지 않습니다.
- [ ] 정책 미결 사항을 완료 기준으로 임의 확정하지 않습니다.
- [ ] 다른 여덟 필드와 front matter가 보존됐습니다.

### E4. 제공 입력을 실제 Issue draft로 변환하기

마지막 단계에서만 나쁜 Issue를 template에 채웁니다. 입력·코드·정책으로 확인할 수 없는 값은 Codex가 자연스러운 문장으로 메우지 않고, 사람이 답할 질문이나 미정 상태로 남깁니다.

#### 설계 질문

- 각 문장은 입력 원문, 코드 사실, 정책 기준 중 어디에서 왔나요?
- 아직 답이 없어 draft를 확정할 수 없는 질문은 무엇인가요?
- Scope와 Out of Scope가 “재고 문제도 같이”라는 표현을 충분히 제한하나요?
- Acceptance Criteria가 정책과 연결되면서도 구현 방법을 고정하지 않나요?

#### 실행

Terra에게 E1 진단, 완성된 template, 세 정책 문서와 현재 코드를 사용해 먼저 필드별 입력 근거표를 만들게 합니다. 사람이 누락 질문에 답하고 범위를 승인하기 전에는 draft 파일을 쓰지 않습니다.

```text
목표: 제공 입력을 template 구조의 실제 Issue draft로 변환한다.
문맥: E1 진단, 완성된 template, 정책 문서와 현재 코드 사실을 사용한다.
제약: 근거 없는 내용은 ______로 표시하고 정책·범위·완료 기준을 임의로 정하지 않는다.
완료 조건: 아홉 필드가 채워지거나 미정으로 표시되고 각 내용의 근거를 추적할 수 있다.
```

##### 사람 확인 — Issue로 작업을 시작해도 되는가

- Current Behavior와 Expected Behavior가 서로 다른 근거를 사용했는가?
- Scope에 포함된 변화와 Out of Scope로 미룬 변화가 겹치지 않는가?
- Human Decision Needed의 질문이 선택 결과를 미리 포함하지 않는가?
- Acceptance Criteria가 세 개 이상이며 각각 독립적으로 판정 가능한가?
- References가 관련 정책과 조사 근거를 연결하는가?

승인 후 `notes/issue-draft-l08.md`를 작성하고 Luna로 template의 아홉 필드와 대조합니다. `node labs/tools/check.mjs 08`과 문서 diff를 확인한 뒤 Lab 08 변경을 커밋합니다.

##### Browser에서 실제 표시 확인

커밋을 개인 fork의 default branch에 반영한 뒤 Browser에서 **Issues → New issue**를 엽니다. template chooser에 이름과 설명이 나타나는지, template을 선택했을 때 아홉 heading과 작성 안내가 들어오는지 확인합니다. 실제 Issue는 제출하지 않습니다. 다른 branch에만 있는 template은 chooser에 나타나지 않으므로 파일 내용을 고치기 전에 branch와 Issues 활성화 상태를 먼저 확인합니다.

#### 검증

- [ ] 실제 draft의 아홉 필드가 채워졌거나 미정으로 표시됩니다.
- [ ] Acceptance Criteria가 세 개 이상이며 독립적으로 판정 가능합니다.
- [ ] 사람 결정과 References가 별도 필드에 있습니다.
- [ ] `node labs/tools/check.mjs 08`이 통과했습니다.
- [ ] Browser에서 template 이름·설명·본문을 확인했고 Issue는 제출하지 않았습니다.
- [ ] `src/`와 `tests/` diff가 없습니다.

## 4. Self-check

```bash
node labs/tools/check.mjs 08
```

이 명령은 Markdown template의 front matter와 아홉 heading, 실제 draft의 아홉 heading, `src/`·`tests/` 무변경을 확인합니다. 내용의 사실성, 정책과의 정합성, 완료 기준의 판정 가능성은 각 Human Gate에서 별도로 확인합니다.

## 5. 자주 하는 실수

- 진단 단계에서 누락된 정책과 범위를 Codex가 자연스러운 값으로 채웁니다.
- template에 이번 주문 요청의 상태·응답·파일 경로를 미리 넣습니다.
- Acceptance Criteria에 여러 결과를 묶거나 구현 방법을 고정합니다.
- default branch에 반영하기 전에 GitHub chooser에서 template을 찾습니다.

## 6. 다음 lab으로 넘기는 것

Issue template은 이후 요청의 입력 형식을 고정합니다. `notes/issue-draft-l08.md`는 Lab 09에서 재사용 가능한 implementation plan 구조를 설계할 때 작업 가능한 요청의 기준으로 사용합니다.
