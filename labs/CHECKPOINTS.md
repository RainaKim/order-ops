# 체크포인트로 출발선 재설정하기

체크포인트는 완성 내용을 미리 읽는 장치가 아니라 중간 합류와 복구를 위한 출발선입니다. 이동하기 전에는 현재 작업을 별도 브랜치에 보존합니다.

## 최초 1회: 원본 저장소 연결

Fork한 저장소의 `origin`은 내 저장소입니다. 교재 원본은 `course`라는 이름으로 추가합니다.

```bash
git remote add course https://github.com/RainaKim/order-ops.git
git fetch course
```

## 케이스 A: 7강부터 합류하기

```bash
git branch my/ch1-attempt
git switch -c ch2 course/checkpoint/ch1
```

내 시도는 `my/ch1-attempt`에 남고, 새 브랜치는 Chapter 1 종료 상태에서 시작합니다.

## 케이스 B: 이번 강의 문서만 되돌리기

먼저 `git status`로 되돌릴 파일을 확인합니다. 필요한 파일만 체크포인트에서 가져옵니다.

```bash
git restore notes/order-status-plan.md
git restore --source course/checkpoint/ch1 -- docs/templates/workflow-skeleton.md
```

## 케이스 C: 12강 이후 앱 코드만 복구하기

```bash
git restore --source course/checkpoint/ch2 -- src tests
node labs/tools/check.mjs 12
```

문서 작업은 유지하고 `src/`, `tests/`만 Chapter 2 종료 상태로 되돌립니다.

## 케이스 D: 처음부터 다시 시작하기

```bash
git switch -c restart course/main
```

현재 브랜치를 삭제하지 않고 새 시작 브랜치를 만듭니다.

## 결과 비교 시점

결과 비교 명령은 챕터 종료 강인 6, 11, 16, 20강에서만 안내합니다.

```bash
git diff --stat HEAD course/checkpoint/ch1 -- docs notes AGENTS.md
```

먼저 파일 목록과 변경 크기를 보고, 필요한 파일만 좁혀 비교합니다.

## 안전 원칙

- 현재 작업을 보존할 브랜치를 먼저 만듭니다.
- 강제 초기화보다 파일 단위 `git restore`를 우선합니다.
- `labs/`는 체크포인트 사이에서 달라지지 않아야 합니다.
- 체크포인트 이동 후 해당 강의 self-check를 다시 실행합니다.
