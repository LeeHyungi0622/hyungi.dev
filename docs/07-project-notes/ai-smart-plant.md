# AI 스마트 플랜트 (AI PECS) — 프로젝트 페이지 작업 노트

> 대상 콘텐츠: [`src/content/projects/ko/ai-smart-plant.mdx`](../../src/content/projects/ko/ai-smart-plant.mdx) · [`src/content/projects/en/ai-smart-plant.mdx`](../../src/content/projects/en/ai-smart-plant.mdx)
> 최종 업데이트: 2026-07-08
> 출처: 실증 발표 PPT(2024.12.23) + Zeppelin 노트 5종 교차 확인

실무 내용 기반 재작성 시 확정되지 않았거나 재확인이 필요한 항목을 모아둡니다. 값이 정해지면 두 언어(ko/en) mdx를 **함께** 수정합니다.

## ✅ 완료

- [x] 가공 내용(Kafka · Flink · PyTorch/ONNX · TimescaleDB · Kubernetes · RUL · 35% 다운타임 감소) 제거
- [x] 실무 서사로 재작성: 외부 AI모델(진단/예측/추천)의 폐쇄망 파이프라인 통합 중심
- [x] keyDecisions 반영: D-2(저장소 역할 분리 MSSQL/PostgreSQL) / D-3(Zeppelin 채택) / D-1(가상↔실제 ID 매핑) / D-4(residuals_max×1.5 임계값)
- [x] techStack 실제 스택으로 교체 (Python·Zeppelin·MSSQL·PostgreSQL·PI System·librosa·SciPy·TensorFlow)
- [x] 회고: 미해결 과제(주기 오차·데이터 확보)와 고객사별 검증 차이를 정직하게 learnings에 반영

## ⬜ 확인·보완 필요

- [ ] **기간(duration)** — 작업판에 비어 있어 mdx에서 필드를 뺀 상태. 실증 발표(2024.12.23) 기준 역산해 확정 후 `duration` 추가.
- [ ] **규모/역할(teamSize)** — 미확정으로 필드 뺀 상태. AI 모델은 외부(대학 연구실 박사과정) 개발, 본인은 통합·데이터 엔지니어링. 팀 규모 확정 시 `teamSize` 추가.
- [ ] **고객사명 공개 여부** — 작업판 공통 규칙(고객사 익명화)에 따라 "석유화학·가스 분야 2개 고객사"로 익명 처리. 포트폴리오에 실명 노출을 원하면 고객사 동의 확인 후 overview/impact 수정.
- [ ] **모델 아키텍처 LSTM 여부** — 코드에서는 "재구성 오차 기반(autoencoder 패턴)"만 확인됨. 내부가 LSTM인지는 모델 생성 스크립트 확인 필요. 현재 페이지는 "재구성 오차 기반 이상탐지"로만 기재(LSTM 미명시).
- [ ] **UCL 최종 실증값 스케일** — PPT 발표 수치와 노트 코드 수치의 스케일이 다름(종합진단 0.0555 / 개별진단 1.623 / PPT 슬라이드 17.998→UCL 26.9975). 최종 실증값 한 줄 정리 후 필요 시 impact에 반영.
- [ ] **42 vs 46 태그 학습** — 실증 당시 진단 모델이 42개 태그만 학습하도록 설계되어, 46개 학습 모델 수령 전까지 일부 결과 제약. 정직한 한계로 learnings에 추가할지 검토.

## 📌 후속 작업 (선택) — `/decisions` 결정로그 승격 후보

작업판에서 별도 카드로 뺄 것을 추천한 항목. 파일: `src/content/decisions/{en,ko}/<slug>.mdx` (스키마: `title/date/context/decision/alternatives/reasoning/tags/relatedProjects`). 생성 시 mdx의 `relatedDecisions`로 상호 링크.

- [ ] **D-3 — 주기 오차 & 데이터 확보 한계 (미해결 회고)**: "본질 원인을 꿰뚫어 봄 + 지금이라면" 서사. 진행한 실패 사례로도 유효.
- [ ] **D-4 — residuals_max × 보정비율(1.5)**: 데이터 불균형 실무 대응 + 판단 근거가 명확한 단독 카드.
- [ ] **D-5 — calibration range 기반 합성 데이터 검증 (가스 공기업) ⭐**: 제약(실데이터 반출 불가) → 판단(도메인 지식으로 합성) → 트레이드오프(동작 검증 OK, 이상 탐지 성능 검증 한계) 3박자. 단독 카드 강력 추천.

## 🔒 공개 시 주의 (작업판 규칙)

- 고객사명 → 공개 문서에서는 익명화 유지. 자사(재직)·산출물 표기 규칙은 `00_공통_네이밍규칙.md` 준수.
- 원본 PPT·`.zpln` 노트 → 첨부 금지. DB 접속정보·내부 IP·경로가 하드코딩돼 있으니 코드 발췌 시 `***` 마스킹 후 **정규화·프레이밍 등 알고리즘 부분만** 게시.
- 비밀번호가 개인 계정 등에서 재사용된 패턴이면 별도 확인.
