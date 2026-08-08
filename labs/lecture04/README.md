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
| E2 | 수정 전에 읽을 자료와 실행 명령을 연결합니다. | `Before Editing`, `Commands` |
| E3 | 작업 중 지켜야 할 금지 조건을 고정합니다. | `Rules` |
| E4 | 완료 전 검증과 응답 기준을 추가하고 새 세션에서 확인합니다. | `Before Final Response`와 완료 커밋 |

## 3. 실습

### E1. Project Overview 작성하기

#### 설계 질문

- 이 repo의 목적과 기술 스택을 몇 문장으로 설명할 수 있나요?
- 아직 결정되지 않은 정책을 overview에 섞고 있지 않나요?

#### 실행

root `AGENTS.md`를 만들고 현재 파일로 확인 가능한 프로젝트 목적, 런타임, 저장 방식을 `## Project Overview`에 적습니다.

#### 검증

- [ ] `AGENTS.md`가 repo root에 있습니다.
- [ ] overview가 현재 코드로 확인되는 내용만 담습니다.
- [ ] 아직 없는 정책과 상태를 확정하지 않았습니다.

### E2. Before Editing과 Commands 작성하기

#### 설계 질문

- 변경 전에 어떤 파일과 규약을 먼저 읽어야 하나요?
- 이 repo에서 통과해야 하는 검증 명령은 무엇인가요?

#### 실행

`## Before Editing`에 `labs/CONVENTIONS.md`와 관련 코드 탐색을 넣고, `## Commands`에 기존 package scripts만 기록합니다.

#### 검증

- [ ] 두 섹션이 존재합니다.
- [ ] `labs/CONVENTIONS.md` 참조가 있습니다.
- [ ] package.json에 없는 명령을 만들지 않았습니다.

### E3. Rules 작성하기

#### 설계 질문

- 정책을 임의로 결정하는 행동을 어떻게 막을까요?
- 검증 없이 상태를 바꾸거나 실패를 숨기는 행동을 어떻게 금지할까요?

#### 실행

`## Rules`에 정책 임의 확정, silent fallback, 테스트 없는 상태 변경, 실결제 연동을 막는 규칙을 작성합니다.

#### 검증

- [ ] 금지 규칙이 네 종류 이상 있습니다.
- [ ] 각 규칙이 금지 행동과 이유를 함께 설명합니다.
- [ ] 현재 교육용 v0 결함을 고치는 지시로 변질되지 않았습니다.

### E4. Before Final Response와 새 세션 검증

#### 설계 질문

- 최종 보고에서 반드시 보여야 할 검증 근거는 무엇인가요?
- 새 세션이 문서를 실제로 읽었는지 어떻게 확인할까요?

#### 실행

`## Before Final Response`를 작성하고 새 Codex 세션에서 활성 지침과 검증 명령을 요약하게 합니다. 확인 결과를 검토한 뒤 커밋합니다. Codex는 작업 시작 시 repo root에서 현재 디렉터리까지 `AGENTS.md`를 읽습니다.

#### 검증

- [ ] 다섯 필수 섹션이 순서와 무관하게 모두 있습니다.
- [ ] 최종 보고에 실행 명령과 결과를 요구합니다.
- [ ] 새 세션이 root `AGENTS.md`의 규칙을 요약했습니다.
- [ ] `CLAUDE.md`를 중복 생성하지 않았습니다.

## 4. Self-check

```bash
node labs/tools/check.mjs 04
```

## 5. 자주 하는 실수

- 현재 존재하지 않는 정책을 overview에 미리 확정합니다.
- package.json에 없는 preflight 명령을 추가합니다.
- 같은 내용을 여러 에이전트 지침 파일에 복제해 유지 지점을 늘립니다.

## 6. 다음 lab으로 넘기는 것

root `AGENTS.md`는 Lab 05 plan-first 작업에서 작업 전 기준으로 사용하고, Lab 07과 Lab 10에서 정책 문서와 재사용 프롬프트 참조를 누적합니다.
