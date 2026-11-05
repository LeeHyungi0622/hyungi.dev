/**
 * AA (Application Architect) persona project ordering
 *
 * When siteConfig.persona === 'aa', project listings show only 실무 (professional)
 * case studies, ordered by relevance to public-sector SI / application architecture
 * roles — CI/CD, infra architecture, eGovFrame, system standards — rather than by
 * the default featured/order/year sort.
 */
export const AA_PROJECT_ORDER = [
  'ai-smart-plant',
  'v2x-patrol-car',
  'infra-cicd-airflow',
  'hadoop-enterprise-platform',
  'pley-child-behavior',
];

/**
 * Nav items and homepage sections hidden on the AA persona build — AA position
 * applications are being prepared now and don't need 글(Writing)/여정(Journey)/
 * 의사결정(Decisions) surfaced yet.
 */
export const AA_HIDDEN_HREFS = ['/writing', '/journey', '/decisions'];

export type AaTag = { label: string; kind: 'required' | 'duty' };

/** JD 항목별 태그. 케이스 스터디에 근거가 있는 항목만 추가한다. */
export const AA_PROJECT_TAGS: Record<string, AaTag[]> = {
  'ai-smart-plant': [
    { label: '공공프로젝트(한국가스공사)', kind: 'required' },
    { label: '전자정부표준프레임워크', kind: 'required' },
    { label: '상용S/W연동(PI·MSSQL)', kind: 'required' },
    { label: '시스템연계', kind: 'duty' },
    { label: '배포표준화', kind: 'duty' },
  ],
  'v2x-patrol-car': [
    { label: '공공프로젝트(경찰청)', kind: 'required' },
    { label: '시스템연계', kind: 'duty' },
    { label: '기술검토', kind: 'duty' },
  ],
  'infra-cicd-airflow': [
    { label: 'CI/CD구성', kind: 'duty' },
    { label: '개발환경구성', kind: 'duty' },
    { label: '시스템연계', kind: 'duty' },
    { label: '배포자동화', kind: 'duty' },
  ],
  'hadoop-enterprise-platform': [
    { label: '상용S/W도입(Datadog)', kind: 'required' },
    { label: '기술검토', kind: 'duty' },
  ],
  'pley-child-behavior': [
    { label: '시스템연계', kind: 'duty' },
  ],
};
