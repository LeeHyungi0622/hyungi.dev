# PLEY — 프로젝트 페이지 작업 노트

> 대상 콘텐츠: [`src/content/projects/ko/pley-child-behavior.mdx`](../../src/content/projects/ko/pley-child-behavior.mdx) · [`src/content/projects/en/pley-child-behavior.mdx`](../../src/content/projects/en/pley-child-behavior.mdx)
> 최종 업데이트: 2026-07-08

실무 내용 기반으로 프로젝트 페이지를 재작성하면서, 확정되지 않아 보류했거나 재확인이 필요한 항목을 여기 모아둡니다. 값이 정해지면 두 언어(ko/en) mdx를 **함께** 수정합니다.

## ✅ 완료

- [x] 가공 내용(CRDT · React Native · Firebase · 오프라인 우선 · 데이터 손실 15%) 제거
- [x] 실무 서사로 재작성: 토큰 갱신 클라이언트→서버사이드 이관(D-1) 중심
- [x] keyDecisions에 D-1 / D-2(토큰 RDB 유지) / D-3(UI·로직 Thread 분리 + GC) 반영
- [x] techStack 실제 스택으로 교체 (Node.js · PostgreSQL · Crontab · Android Native · Wearable API · OAuth)
- [x] 익명화 규칙 적용: 회사명·랩명 미기재, "국내 대학 소속 아동 연구팀"으로만 표기

## ⬜ 확인·보완 필요

- [ ] **기간(duration)** — 작업판에 비어 있어 mdx에서 필드를 뺀 상태. 확정 시 `duration` 추가 (예: `"3개월"`). 템플릿은 optional 가드(`&&`) 처리됨.
- [ ] **규모(teamSize)** — 미확정으로 필드 뺀 상태. 팀 규모 확정 시 `teamSize` 추가. (실험 규모(참여 아동 수·실험군/대조군)는 팀 규모와 별개이며, 확정되면 overview/impact 문구에 반영 검토)
- [ ] **year** — 현재 `2024` 유지 중. 실제 착수/완료 연도와 다르면 수정.
- [ ] **백엔드 런타임 Node.js** — 작업판에 "인수인계 기재 기준, 재확인 필요(💡)"로 표시됨. 현재 techStack에 `Node.js`로 기재. 실제 런타임 확인 후 필요 시 교체.
- [ ] **0.5초/걸음 계산 위치** — 사용시간 적립(1걸음 = +0.5초) 로직이 앱에서 계산되는지 서버에서 계산되는지 확인. 현재 페이지는 "걸음 수에 비례해 사용 시간 적립"으로 일반화해 표기.
- [ ] **실험 규모 수치(참여 20명 중 18명 정상 종료 등)** — 작업판에서 예시/잠정으로 표기된 값. 확정 수치면 impact 문구에 추가.

## 📌 후속 작업 (선택)

- [ ] **D-1을 `/decisions` 컬렉션에 결정로그로 승격** — 토큰 갱신 클라이언트→서버 이관 건. 엣지케이스 2건(게임 등 고부하 앱 실행 시 백그라운드 종료 · 장시간 미사용/간헐 Wi-Fi 연결)이 "현장 안 겪어보면 못 잡는" 차별 서사라 결정 페이지에서 잘 살아남음. 파일: `src/content/decisions/{en,ko}/pley-token-refresh-server-side.mdx` (스키마: `title/date/context/decision/alternatives/reasoning/tags/relatedProjects`). 생성 시 mdx의 `relatedDecisions`로 상호 링크.

## 🔒 공개 시 주의 (작업판 규칙)

- 본인 소속 회사명·랩 이름 → 미기재. 상세·성명은 면접 구두로만.
- 학회기관(대학 연구실) → 공개 문서에서는 익명화 유지.
- 원본 산출물(구조도 캡처·설계서·대시보드 스크린샷) → 첨부 금지, 본인 재구성 다이어그램만.
- 코드 발췌 시 민감정보(IP·경로·토큰·비밀번호) 마스킹.
