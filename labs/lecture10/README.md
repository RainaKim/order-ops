# Lab 10 — 반복 작업 prompt/checklist 만들기

## 0. 이 랩이 끝나면

- 테스트 보강, PR 설명, self-review 작업을 재사용 가능한 프롬프트로 만듭니다.
- `docs/prompts/test-generation.md`, `pr-description.md`, `self-review.md`를 만듭니다.
- root `AGENTS.md`에서 프롬프트를 불러 쓰는 시점을 연결합니다.
- 예상 소요 시간은 40분입니다.

## 1. 시작 전 상태 확인

- Lab 09 implementation plan template이 완성돼야 합니다.
- `docs/prompts/`는 아직 없어야 합니다.
- 앱 코드는 v0이며 이번 lab에서도 변경하지 않습니다.

## 2. 실습 목표와 산출물

| 단계 | 핵심 작업 | 결과 |
| --- | --- | --- |
| E1 | 테스트 보강 작업의 입력과 경계를 prompt로 고정합니다. | `docs/prompts/test-generation.md` |
| E2 | 검증 결과와 위험을 포함하는 PR 설명 prompt를 만듭니다. | `docs/prompts/pr-description.md` |
| E3 | issue, plan, diff, test를 대조하는 review prompt를 만듭니다. | `docs/prompts/self-review.md` |
| E4 | 세 prompt의 사용 시점을 작업 기준에 연결합니다. | root `AGENTS.md` 갱신과 완료 커밋 |

## 3. 실습

### E1. 테스트 보강 프롬프트 만들기

#### 설계 질문

- 기존 테스트가 검증하지 않는 상태 변화는 무엇인가요?
- 테스트를 추가하기 전에 어떤 코드와 정책을 읽게 해야 하나요?

#### 실행

`docs/prompts/test-generation.md`에 입력, 금지 조건, 기대 출력, 검증을 채우는 짧은 빈칸 골격을 만듭니다.

#### 검증

- [ ] 프롬프트가 읽을 파일을 입력받습니다.
- [ ] 테스트만 변경할지 구현도 변경할지 경계를 묻습니다.
- [ ] 실행할 검증 명령을 입력받습니다.

### E2. PR 설명 프롬프트 만들기

#### 설계 질문

- PR 설명을 쓰려면 diff 외에 어떤 계획과 검증 결과가 필요한가요?
- 불확실한 내용을 사실처럼 요약하지 않게 어떻게 막을까요?

#### 실행

`docs/prompts/pr-description.md`에 Summary, 변경 파일, 검증, 위험, rollback 정보를 입력받는 골격을 만듭니다.

#### 검증

- [ ] diff와 검증 결과를 입력으로 요구합니다.
- [ ] 실행하지 않은 검증을 구분하게 합니다.
- [ ] 위험과 rollback 정보를 출력에 포함합니다.

### E3. Self-review 프롬프트 만들기

#### 설계 질문

- reviewer가 계획 이탈과 빠진 테스트를 어떻게 찾을까요?
- 발견 사항과 단순 요약을 어떻게 분리할까요?

#### 실행

`docs/prompts/self-review.md`에 issue, plan, diff, test 결과를 대조하고 발견 사항을 우선순위로 반환하는 골격을 만듭니다.

#### 검증

- [ ] 네 입력 자료를 모두 요구합니다.
- [ ] 범위 이탈과 누락 테스트를 별도 점검합니다.
- [ ] 발견 사항이 없을 때 그 사실을 명시하게 합니다.

### E4. AGENTS.md에 재사용 위치 연결하기

#### 설계 질문

- 세 프롬프트는 작업 흐름의 어느 시점에 사용하나요?
- 자동 호출보다 사람이 선택해야 할 상황은 무엇인가요?

#### 실행

root `AGENTS.md`의 `Commands`와 `Before Final Response`에 세 프롬프트 경로와 사용 조건을 연결한 뒤 커밋합니다.

#### 검증

- [ ] 세 파일 경로가 모두 연결됐습니다.
- [ ] 테스트, PR 설명, self-review의 사용 시점이 구분됩니다.
- [ ] 프롬프트 전문을 AGENTS.md에 중복하지 않았습니다.
- [ ] 앱 코드 diff가 없습니다.

## 4. Self-check

```bash
node labs/tools/check.mjs 10
```

## 5. 흔한 함정

- 특정 작업의 완성 요청문을 저장해 재사용 범위를 좁힙니다.
- 실행하지 않은 테스트를 통과했다고 쓰게 하는 프롬프트를 만듭니다.
- AGENTS.md에 프롬프트 전문을 복제합니다.

## 6. 다음 lab으로 넘기는 것

세 프롬프트와 두 template은 Lab 11에서 repo 기준 문서 풀세트로 점검합니다. 앱 코드는 계속 v0로 유지합니다.
