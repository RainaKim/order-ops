# order-ops labs

이 폴더는 하나의 `order-ops` 코드베이스를 20강 동안 누적해 발전시키는 실습 지도입니다. 앱 코드, 수강생 산출물, 교재를 분리하고 각 강의 README에서 시작 상태와 종료 상태를 확인합니다.

시작할 때 GitHub에서 이 저장소를 자신의 계정으로 Fork한 뒤, Fork한 저장소를 clone해 사용합니다.

## 1. 5분 안에 확인할 것

1. `node -v`가 20 이상인지 확인합니다.
2. `npm install`로 의존성을 설치합니다.
3. `npm test`가 통과하는지 확인합니다.
4. Codex에 로그인되어 있는지 확인합니다.
5. 아래 환경 점검을 실행합니다.

```bash
node labs/tools/check.mjs env
```

환경 점검은 Node 버전, 의존성 설치 여부, 테스트 통과 여부만 확인합니다.

## 2. 이 저장소의 3층 구조

| 층 | 위치 | 역할 |
| --- | --- | --- |
| 앱 | `src/`, `tests/` | 주문·결제·운영 API와 테스트 |
| 내 산출물 | `docs/`, `notes/`, `.github/` | 기준 문서, 작업 기록, GitHub 설정 |
| 교재 | `labs/` | 강별 진행 지도, 입력 자료, self-check |

세부 위치 규칙은 [CONVENTIONS.md](./CONVENTIONS.md)를 따릅니다.

## 3. 첫 실습은 여기부터

1강은 관찰 회차입니다. [lecture01](./lecture01/README.md)에서 네 가지 실패 패턴을 확인한 뒤, 실제 파일을 만드는 첫 실습은 [lecture02](./lecture02/README.md)부터 시작합니다.

| Chapter | 강 | 누적 목표 | 체크포인트 |
| --- | --- | --- | --- |
| 1 | 1~6강 | 요청을 작업 자산과 workflow skeleton으로 전환 | `checkpoint/ch1` |
| 2 | 7~11강 | repo 기준 문서와 템플릿 세트 완성 | `checkpoint/ch2` |
| 3 | 12~16강 | 계획·구현·검증·PR 준비 루프 완성 | `checkpoint/ch3` |
| 4 | 17~20강 | 역할 분리·Issue·Automation·장애 대응 연결 | `checkpoint/ch4` |

### 전체 lab 지도

| 강 | 주제 | 앱 코드 상태 |
| --- | --- | --- |
| [01](./lecture01/README.md) | Codex를 써도 일이 안 줄어드는 4가지 패턴 | v0 |
| [02](./lecture02/README.md) | 대화창 답변을 작업 자산으로 바꾸기 | v0 |
| [03](./lecture03/README.md) | 작업 경계 잡기 | v0 |
| [04](./lecture04/README.md) | Codex가 먼저 읽어야 할 기준 만들기 | v0 |
| [05](./lecture05/README.md) | 작은 요청 하나를 plan-first로 통과시키기 | v0 |
| [06](./lecture06/README.md) | P1 Workflow 스켈레톤 만들기 | v0 |
| [07](./lecture07/README.md) | 도메인 정책 문서 만들기 | v0 |
| [08](./lecture08/README.md) | Issue template 만들기 | v0 |
| [09](./lecture09/README.md) | Plan-first template 만들기 | v0 |
| [10](./lecture10/README.md) | 반복 작업 prompt/checklist 만들기 | v0 |
| [11](./lecture11/README.md) | P2 Repo 기준 문서 세트 완성 | v0 |
| [12](./lecture12/README.md) | 다중 파일 변경: 계획에서 diff 확인까지 | 최초 변경 |
| [13](./lecture13/README.md) | 환각 차단 | 12강 상태 유지 |
| [14](./lecture14/README.md) | 의미 있는 assertion 만들기 | 테스트 확장 |
| [15](./lecture15/README.md) | No Silent Fallback | 오류 처리 변경 |
| [16](./lecture16/README.md) | P3 구현과 검증 루프 제작 | 15강 상태 유지 |
| [17](./lecture17/README.md) | planner, implementer, reviewer 역할 분리 | 관리자 응답 변경 |
| [18](./lecture18/README.md) | GitHub Issue 기반으로 작업 시작하기 | 17강 상태 유지 |
| [19](./lecture19/README.md) | 백그라운드 실행과 Automation | 18강 상태 유지 |
| [20](./lecture20/README.md) | P4 장애 상황을 workflow로 통과 | 최종 변경 |

## 4. 막혔을 때

[CHECKPOINTS.md](./CHECKPOINTS.md)는 체크포인트를 답안 열람이 아니라 출발선 재설정에 사용하는 방법을 설명합니다. 작업을 버리기 전에 먼저 별도 브랜치로 현재 시도를 보존합니다.

## 5. 진행 규칙

- 강별 README의 클립 표에서 현재 진입 상태와 산출물을 확인합니다.
- 실습은 `설계 질문 → 실행 → 검증` 순서로 진행합니다.
- README가 표시한 커밋 지점에서만 커밋합니다.
- `node labs/tools/check.mjs NN`은 형식만 검사하며 내용 판단은 사람이 합니다.
- 저장소를 Fork했다면 18강 전에 개인 저장소의 Issues 기능이 켜져 있는지 확인합니다.

## 6. 변경 이력

- 2026-08-02: 20강 lab 구조, 환경 점검, self-check 기반을 처음 추가했습니다.
