# 디토닉 데이터 허브 (적재 성능 개선) — 프로젝트 페이지 작업 노트

> 대상 콘텐츠: [`src/content/projects/ko/ditonic-data-hub.mdx`](../../src/content/projects/ko/ditonic-data-hub.mdx) · [`src/content/projects/en/ditonic-data-hub.mdx`](../../src/content/projects/en/ditonic-data-hub.mdx)
> 최종 업데이트: 2026-07-08
> 출처: 브레인덤프 + Jaeger/Prometheus/Grafana·Datadog 관측 스택

실무 내용 기반 재작성 시 확정되지 않았거나 재확인이 필요한 항목을 모아둡니다. 값이 정해지면 두 언어(ko/en) mdx를 **함께** 수정합니다.

## ✅ 완료

- [x] 가공 내용(커넥터 SDK · N+1 · 비동기 태스크 큐 · 이벤트 소싱 · Spring Boot · Redis · GraphQL) 제거
- [x] 실무 서사로 재작성: 건by건 single-statement 적재 병목을 구간별 측정으로 잡고 end-to-end 개선
- [x] keyDecisions 반영: D-1(적재 방식 벌크/배치) / D-2(Kafka 단일→3 broker) / D-3(Datadog 도입)
- [x] techStack 실제 스택으로 교체 (Hadoop · Hive · HBase+Phoenix · Kafka · Spark · JDBC/ANSI SQL · Jaeger/Prometheus/Grafana · Datadog)
- [x] **정확도 보정**: "Kafka 홀수 broker(Databricks 권고)" → "복제·내결함성을 위한 최소 3 broker"로 수정 (아래 검증 항목 참조)

## ⬜ 확인·보완 필요 (면접 전 필수)

- [ ] **⭐ 적재 성능 정량 수치 (핵심 빈칸)** — 개선 전/후 TPS·처리시간, 개선율 %. 현재 metrics는 "방식 전환"으로만 표기하고 수치는 비워둠. 인사평가/벤치마크 문서에서 이 건에 해당하는 수치 확보 후 impact.metrics에 추가. **가장 중요.**
- [ ] **과거 "적재 성능 120%↑" 수치와의 관계** — 기존 정리 노트의 "적재 성능 120%↑(대전 랩 데이터 허브)"가 이 프로젝트와 동일 맥락인지 확인 후, 맞으면 수치 연결 / 다르면 분리.
- [ ] **기간(duration) / 규모(teamSize)** — 작업판에 비어 있어 필드 뺀 상태 (토픽 수 / 일 적재량 / 브로커 수 / 팀 인원). 확정 시 추가.
- [ ] **Dataset 정의부 / Provisioning 서버 구조** — 자료 확인 후 구조·용어 보강 예정. 현재는 constraints에 "상위 정의 우선 반영(상위 의존성)"으로만 요약.
- [ ] **적재 방식 구체화** — 건by건 → "batch INSERT / 파일 기반 대량 적재 / 마이크로배치" 중 실제로 뭘 채택했는지 확정해 approach·D-1 문구를 더 구체화.

## 🔍 검증 항목 (면접관이 바로 물어볼 지점)

- [ ] **Kafka broker "홀수/최소 3" 근거** — 홀수 권고는 보통 Zookeeper 앙상블 / KRaft 컨트롤러 정족수(split-brain 방지) 얘기이고, broker는 "복제·내결함성 위해 최소 3"이 정확. 출처도 Databricks보다 Confluent/Apache Kafka 공식이 맞음. → 페이지는 이미 정확한 표현으로 반영함. 면접 답변도 이 톤으로.
- [ ] **Phoenix "정상적으로 안 됐다" 구체화** — 특정 함수/타입 매핑 미지원? Secondary index? 성능? 기억 애매하면 "일부 ANSI 구문에서 제약" 정도로 안전하게. 현재 페이지는 "완전히 매끄럽지 않았음"으로만 표기.
- [ ] **ANSI vs HiveQL 표현** — HiveQL도 대부분 ANSI 호환이라 "HiveQL이 아닌 ANSI"라는 대비는 부정확할 수 있음. 페이지는 "표준 ANSI SQL을 single statement로 처리"로만 서술(과장 대비 제거).
- [ ] **Datadog 도입 효과** — 수치나 구체 사례(병목 탐지까지 걸리는 시간, 커버 못 하던 Spark 지표 종류 등) 하나 확보하면 강해짐.

## 📌 후속 작업 (선택) — `/decisions` 결정로그 승격 후보

작업판에서 별도 카드 추천. 파일: `src/content/decisions/{en,ko}/<slug>.mdx`. 생성 시 mdx의 `relatedDecisions`로 상호 링크. (참고: 이 건은 기존 보드의 P4/P6 딥다이브라, 그 프로젝트들의 결정로그로 넣을지 독립 카드로 뺄지도 함께 결정)

- [ ] **D-1 — 건by건 single-statement → 벌크/배치 적재**: 이 프로젝트의 헤드라인. 정량 수치 붙이면 최우선 승격.
- [ ] **D-2 — Kafka single → 3 broker**: pub/sub 병목 해소. producer→queue→저장소 end-to-end 관점을 근거로.

## 🔒 공개 시 주의 (작업판 규칙)

- 자사(대전 랩 등)는 설명 OK, 고객사는 공개 문서에서 익명화(예: 특정 고객사 → "국내 대형 고객사").
- 원본 산출물 첨부 금지. 코드 공개 시 접속정보·IP·경로 `***` 마스킹.
