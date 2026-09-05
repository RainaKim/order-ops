# Lab 04 — Codex가 먼저 읽어야 할 기준 만들기

## 0. 이 랩이 끝나면

- repo 작업 기준을 root `AGENTS.md`에 고정합니다.
- `Project Overview`, `Before Editing`, `Commands`, `Rules`, `Before Final Response` 다섯 섹션을 만듭니다.
- 새 Codex 세션이 기준을 읽는지 확인합니다.
- 예상 소요 시간은 45분입니다.

## 1. 시작 전 상태 확인

- root `AGENTS.md`는 아직 없어야 합니다.
- Lab 02 notes와 Lab 03 작업 경계 기록을 읽을 수 있어야 합니다.
- 위치 규칙은 `labs/CONVENTIONS.md`를 기준으로 사용합니다.

## 2. 실습 목표와 산출물

| 단계 | 핵심 작업 | 결과 |
| --- | --- | --- |
| E1 | 프로젝트의 확인된 목적과 기술 구성을 기록합니다. | root `AGENTS.md`의 `Project Overview` |
| E2 | 이전 실패 기록과 repo 근거를 병렬 조사하고, 지속 기준과 실행 명령을 연결합니다. | 공용 근거표, `Before Editing`, `Commands` |
| E3 | 공용 근거를 금지 규칙으로 바꾸고 가상 상황에 적용합니다. | 반례 검증을 통과한 `Rules` |
| E4 | 완료 전 검증과 응답 기준을 추가하고 새 Task에서 실제 적용 여부를 확인합니다. | `Before Final Response`와 완료 커밋 |

## 3. 실습

### E1. Project Overview 작성하기

#### 설계 질문

- 이 repo의 목적과 기술 스택을 몇 문장으로 설명할 수 있나요?
- 아직 결정되지 않은 정책을 overview에 섞고 있지 않나요?

#### 실행

root `AGENTS.md`를 만들고 현재 파일로 확인 가능한 프로젝트 목적, 런타임, 저장 방식을 `## Project Overview`에 적습니다.

```
목표: root AGENTS.md를 생성하고 ## Project Overview만 채운다
      2~4문장으로 저장소 목적 · 넓은 기술 구성 · 데이터 저장 방식을 적는다
문맥: README.md · package.json · src/server.ts · src/store.ts
      — 현재 파일로 확인되는 사실만 쓴다
제약: ## Project Overview 외 다른 헤딩은 만들지 않는다
      명령 · API 경로 · 포트 · 초기 상품 · 상태 값 · 결제 실패 세부 동작을 쓰지 않는다
      아직 결정되지 않은 정책을 쓰지 않는다
완료 조건: ## Project Overview만 있고 본문이 2~4문장이다
          사용한 근거 파일과 의도적으로 제외한 정보 종류를 보고한다
```

#### 검증

- [ ] `AGENTS.md`가 repo root에 있습니다.
- [ ] overview가 현재 코드로 확인되는 내용만 담습니다.
- [ ] 아직 없는 정책과 상태를 확정하지 않았습니다.

### E2. Before Editing과 Commands 작성하기

#### 설계 질문

- 이전 lab에서 확인한 실패 중 어떤 행동을 작업 시작 기준으로 바꿔야 하나요?
- 변경 전에 어떤 자료와 코드를 우선 탐색해야 하나요?
- 실제 package scripts와 모델이 제안한 명령을 어떻게 구분할까요?
- 조사 결과 중 매번 적용할 기준과 Skill·Hook 후보를 어떻게 나눌까요?

#### 실행

1. 같은 Codex Task에서 두 subagent에게 읽기 전용 조사를 병렬로 맡깁니다. 한쪽은 Lab 02·03 notes에서 반복하지 말아야 할 실패, 사람 결정, 작업 전 확인 행동을 찾고, 다른 쪽은 root `README.md`, `labs/CONVENTIONS.md`, `package.json`, 관련 코드와 테스트에서 탐색 경로·실제 명령·완료 증거를 찾습니다.
2. 메인 Codex가 두 결과를 `발견한 기준 · 근거 · 필요한 행동 · 적용할 AGENTS.md 섹션`으로 연결한 공용 근거표를 대화에 남기게 합니다. E3의 `Rules`와 E4의 `Before Final Response` 후보도 이때 분류하되 최종 문장은 미리 쓰지 않습니다.
3. `$openai-docs`를 한 번 사용해 후보가 작은 repo 지침, 재사용 Skill, 기계적 Hook 중 어디에 해당하는지 검토합니다. 이번 repo에서 매번 적용할 항목만 `AGENTS.md` 후보로 남깁니다.
4. 메인 Codex가 공용 근거표 중 E2 항목만 사용해 `## Before Editing`과 `## Commands`를 작성하게 합니다. 기존 `Project Overview`와 다른 파일은 보존하고 E3·E4는 시작하지 않습니다.
5. Codex가 diff와 `package.json` scripts를 비교해 결과를 보고하게 합니다. 문제가 있으면 틀린 항목만 지적해 해당 섹션을 최소 수정합니다.

```
Lab 04 E2를 시작한다. E2부터 E4까지 재사용할 근거를 두 subagent로 병렬 조사해줘.
아직 AGENTS.md는 수정하지 마라.
첫 번째 agent: Lab 1~3 notes에서 반복하지 말아야 할 실패, 사람 결정, 작업 전 확인 행동을 찾아라.
두 번째 agent: root README.md, labs/CONVENTIONS.md, package.json, src/, tests/에서
탐색 경로, 실제 실행·검증 명령, 완료 증거를 찾아라.
각 결론에는 근거 파일과 활용할 AGENTS.md 섹션을 붙여라.
```

```
두 조사 결과를 notes/agents-guidance-l04.md에 공용 근거로 정리해줘.
항목마다 발견한 문제 또는 기준 · 근거 파일 · 필요한 Codex 행동 · 적용할 AGENTS.md 섹션을 남겨라.
AGENTS.md 최종 문장을 미리 작성하지 말고, 특정 주문 요청에만 해당하는 내용은 따로 구분해라.
```

```
$openai-docs
notes/agents-guidance-l04.md 항목을 repo AGENTS.md 지속 기준 / 긴 반복 절차의 Skill 후보 /
기계적 차단이 필요한 Hook 후보로 판정해줘. AGENTS.md를 작게 유지하는 기준을 적용하고 파일은 수정하지 마라.
```

```
notes/agents-guidance-l04.md와 방금 받은 openai-docs 검토 결과를 사용해 root AGENTS.md의 E2 범위를 작성해줘.
기존 Project Overview는 보존하고 E3·E4 내용과 다른 파일은 수정하지 마라.
```

```
E2 결과를 검증해줘. AGENTS.md diff와 Commands를 package.json scripts에 대조하고,
존재하지 않는 파일·명령 참조와 E3·E4 내용의 선행 작성을 확인해라. 파일은 수정하지 말고 결과만 보고해줘.
```

#### 검증

- [ ] 두 섹션이 존재합니다.
- [ ] 두 subagent의 결론이 근거 파일 및 사용할 섹션과 연결된 공용 근거표로 남았습니다.
- [ ] `$openai-docs` 검토는 한 번만 수행했고, Skill·Hook 후보를 `AGENTS.md`에 복제하지 않았습니다.
- [ ] `Before Editing`에 `labs/CONVENTIONS.md` 참조와 관련 코드·테스트를 찾는 기준이 있습니다.
- [ ] package.json에 없는 명령을 만들지 않았습니다.
- [ ] `Project Overview`를 보존했고 E3·E4 내용을 미리 작성하지 않았습니다.

### E3. Rules 작성하기

#### 설계 질문

- 공용 근거표의 어떤 실패를 모든 작업에 적용할 금지 규칙으로 바꿔야 하나요?
- 규칙이 금지 행동과 이유를 함께 설명하나요?
- 규칙을 가상 상황에 적용했을 때 허용·금지·사람 확인 필요를 구분할 수 있나요?

#### 실행

1. 새 조사를 하지 않고 E2의 공용 근거표에서 `Rules`로 분류한 항목만 사용해 `## Rules`를 작성합니다. 정책 임의 확정, silent fallback, 테스트 없는 상태 변경, 실결제 연동을 막되 현재 v0 결함을 고치는 지시로 바꾸지 않습니다.
2. 파일을 수정하지 않는 검증 차례를 따로 둡니다. Codex가 미결 정책 선택, 실패 은폐, 테스트 없는 상태 변경, 실결제 연결의 네 상황을 현재 규칙에 적용해 `허용 · 금지 · 사람 확인 필요` 중 하나로 판정하고 근거 규칙을 연결하게 합니다.
3. 허용되면 안 되는 상황이 통과하거나 근거가 모호하면 해당 실패만 피드백하고 `Rules`만 최소 수정합니다. 네 상황이 모두 명확하게 판정되면 E3를 끝냅니다.

```
목표: E2 조사 결과를 사용해 root AGENTS.md의 ## Rules를 작성한다
문맥: notes/agents-guidance-l04.md의 Rules 후보 · labs/lecture04/README.md의 E3 검증 기준
제약: repo 전체에 지속 적용할 금지 규칙만 쓰고, 규칙마다 금지 행동과 이유를 함께 적는다
      v0 결함을 바로 고치는 구현 지시로 만들지 않는다 · 기존 섹션을 보존하고 E4는 작성하지 않는다
      AGENTS.md 이외 파일은 수정하지 않는다
완료 조건: ## Rules가 E3 검증 기준을 충족하고, 각 규칙에 금지 행동과 이유가 있다
```

```
방금 작성한 Rules를 파일 수정 없이 다음에 적용해줘: 미결 재결제 정책 임의 선택, 실패 은폐,
테스트 없는 주문 상태 변경, 교육용 카드 토큰의 실제 결제 서비스 연결.
각 상황을 허용 / 금지 / 사람 확인 필요로 판정하고 적용 Rules와 이유를 보여줘.
```

```
적용 규칙이 명확하지 않은 상황이 있다. 해당 실패만 막도록 Rules를 보완해줘.
다른 규칙과 섹션은 수정하지 마라.
```

#### 검증

- [ ] 금지 규칙이 네 종류 이상 있습니다.
- [ ] 각 규칙이 금지 행동과 이유를 함께 설명합니다.
- [ ] 현재 교육용 v0 결함을 고치는 지시로 변질되지 않았습니다.
- [ ] 네 가상 상황 각각에 판정과 적용 규칙이 연결됐습니다.
- [ ] 반례 검증에서 발견한 모호함만 수정했고 E2 섹션은 다시 작성하지 않았습니다.

### E4. Before Final Response와 새 세션 검증

#### 설계 질문

- 최종 보고에서 반드시 보여야 할 검증 근거는 무엇인가요?
- 실행하지 못한 검증과 남은 위험을 어떻게 구분해 보고할까요?
- `AGENTS.md` 내용을 새 Task에 알려주지 않고도 실제로 읽었는지 어떻게 확인할까요?

#### 실행

1. 새 조사를 하지 않고 E2의 공용 근거표에서 완료 증거로 분류한 항목과 현재 `Commands`·`Rules`를 사용해 `## Before Final Response`를 작성합니다.
2. 현재 Task에서 다섯 필수 섹션, 중복 지침, 존재하지 않는 파일·명령, `CLAUDE.md` 중복 여부를 확인하고 `node labs/tools/check.mjs 04`를 실행합니다.
3. 새 Codex Task를 열고 `AGENTS.md` 내용을 복사하지 않은 채 프로젝트 목적, 수정 전 확인, 사용 가능한 명령, 금지 행동, 최종 보고 기준을 근거 파일과 함께 요약하게 합니다. Codex는 작업 시작 시 repo root에서 현재 디렉터리까지 `AGENTS.md`를 읽습니다.
4. 새 Task가 놓친 항목이 있으면 원래 Task로 돌아와 관찰한 실패만 전달하고 해당 섹션을 최소 수정합니다. self-check와 새 Task 확인을 다시 통과한 뒤 Lab 04 변경을 커밋합니다.

```
목표: ## Before Final Response를 채운다
문맥: notes/agents-guidance-l04.md의 Before Final Response 후보 · 현재 AGENTS.md의 Commands와 Rules
      labs/lecture04/README.md의 E4 검증 기준
제약: 실행한 검증 명령과 결과, 미실행 검증, 남은 위험이나 미결 사항을 최종 보고에 남기게 한다
      기존 섹션을 보존하고 다른 파일은 수정하지 않는다
완료 조건: ## Before Final Response가 채워져 있고 다섯 섹션이 다 있다
```

```
현재 AGENTS.md 전체를 검증해줘: 필수 다섯 섹션, 중복 지침, 존재하지 않는 파일·명령 참조,
Project Overview 보존, CLAUDE.md 중복, package.json과 Commands 일치 여부. 이후 node labs/tools/check.mjs 04를 실행해 결과를 보고해줘.
```

새 Codex Task에서 다음 프롬프트로 블라인드 검증합니다.

```
이 repo에서 주문 상태 관련 작업을 시작한다고 가정하자. 아직 파일을 수정하지 마라.
현재 적용되는 repo 작업 지침에서 프로젝트 목적과 기술 구성, 수정 전 확인, 사용 가능한 명령,
금지 행동, 최종 보고 전 확인·보고 사항을 각 근거 파일과 함께 요약해줘.
```

```
새 Task 검증에서 발견된 문제만 재발하지 않도록 AGENTS.md 해당 섹션을 최소 보완해줘.
```

```
Lab 04 변경 범위를 확인해줘. AGENTS.md와 이번 Lab의 근거 기록만 포함됐는지 확인하고,
검증 결과를 요약한 뒤 Lab 04 완료 커밋을 만들어줘.
```

#### 검증

- [ ] 다섯 필수 섹션이 순서와 무관하게 모두 있습니다.
- [ ] 최종 보고에 실행 명령과 결과를 요구합니다.
- [ ] `node labs/tools/check.mjs 04`가 통과했습니다.
- [ ] 새 Task가 원문을 전달받지 않고 root `AGENTS.md`의 다섯 역할을 요약했습니다.
- [ ] 새 Task에서 발견한 누락만 최소 수정한 뒤 다시 확인했습니다.
- [ ] `CLAUDE.md`를 중복 생성하지 않았습니다.

## 4. Self-check

```bash
node labs/tools/check.mjs 04
```

## 5. 자주 하는 실수

- 현재 존재하지 않는 정책을 overview에 미리 확정합니다.
- E2·E3·E4마다 같은 notes와 코드를 처음부터 다시 조사합니다.
- 공용 근거표의 작업별 세부 내용을 `AGENTS.md`에 그대로 복제합니다.
- package.json에 없는 preflight 명령을 추가하거나 Skill·Hook 후보를 repo 지침으로 섞습니다.

## 6. 다음 lab으로 넘기는 것

root `AGENTS.md`는 Lab 05 plan-first 작업에서 작업 전 기준으로 사용하고, Lab 07과 Lab 10에서 정책 문서와 재사용 프롬프트 참조를 누적합니다.
