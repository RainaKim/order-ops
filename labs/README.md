# order-ops — Lab Index

이 문서는 `order-ops`의 20개 Lab을 순서대로 찾기 위한 인덱스입니다. 저장소의 목적, 앱 구조, 엔드포인트와 현재 결함은 먼저 root [`README.md`](../README.md)에서 확인합니다.

## 1. 시작 전에

root [`README.md`](../README.md)의 빠른 시작 안내에 따라 **Use this template**으로 독립 저장소를 만들고 환경 점검을 완료합니다. **Include all branches**는 선택하지 않습니다.

```bash
node labs/tools/check.mjs env
```

Lab 01은 관찰 중심이며 코드나 실습 산출물을 변경하지 않습니다. 실제 파일을 만드는 실습은 [Lab 02](./lecture02/README.md)부터 시작합니다.

## 2. 누적 진행 원칙

- 하나의 코드베이스에서 Lab 01부터 순서대로 진행합니다.
- 각 Lab README의 시작 상태, 목표와 산출물을 먼저 확인합니다.
- 실습은 `설계 질문 → 실행 → 검증` 순서로 진행합니다.
- 안내된 커밋 지점과 self-check 결과를 다음 Lab의 시작 상태로 사용합니다.
- 실습 산출물은 안내에 따라 `docs/`, `notes/`, `.github/`, `src/`, `tests/`에 작성합니다. `labs/`는 수정하지 않습니다.

산출물의 세부 위치 규칙은 [`CONVENTIONS.md`](./CONVENTIONS.md)를 따릅니다.

## 3. 20개 Lab 지도

| Chapter | Labs | 누적 목표 |
| --- | --- | --- |
| 1 | 01~06 | 요청을 작업 자산과 workflow skeleton으로 전환 |
| 2 | 07~11 | repo 기준 문서와 template 세트 완성 |
| 3 | 12~16 | 계획·구현·검증·PR 준비 루프 완성 |
| 4 | 17~20 | 역할 분리·Issue·Automation·장애 대응 연결 |

| Lab | 주제 | 앱 코드 상태 |
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
| [13](./lecture13/README.md) | 환각 차단 | Lab 12 상태 유지 |
| [14](./lecture14/README.md) | 의미 있는 assertion 만들기 | 테스트 확장 |
| [15](./lecture15/README.md) | No Silent Fallback | 오류 처리 변경 |
| [16](./lecture16/README.md) | P3 구현과 검증 루프 제작 | Lab 15 상태 유지 |
| [17](./lecture17/README.md) | planner, implementer, reviewer 역할 분리 | 관리자 응답 변경 |
| [18](./lecture18/README.md) | GitHub Issue 기반으로 작업 시작하기 | Lab 17 상태 유지 |
| [19](./lecture19/README.md) | 백그라운드 실행과 Automation | Lab 18 상태 유지 |
| [20](./lecture20/README.md) | P4 장애 상황을 workflow로 통과 | 최종 변경 |

## 4. 진행 규칙

- lab별 README의 `실습 목표와 산출물`에서 현재 진입 상태와 결과를 확인합니다.
- 실습은 `설계 질문 → 실행 → 검증` 순서로 진행합니다.
- README가 표시한 커밋 지점에서만 커밋합니다.
- `node labs/tools/check.mjs NN`은 형식만 검사하며 내용 판단은 사람이 합니다.
- Lab 18을 시작하기 전에 생성한 독립 저장소의 Issues 기능이 켜져 있는지 확인합니다.

## 5. 막혔을 때

작업을 버리거나 강제로 초기화하지 마세요. 현재 변경을 별도 브랜치에 보존한 뒤 해당 Lab README의 시작 상태와 self-check 결과를 다시 확인합니다.
