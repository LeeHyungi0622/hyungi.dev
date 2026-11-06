/**
 * AA (Application Architect) persona project ordering
 *
 * Homepage order on the AA persona, by relevance to public-sector SI / application
 * architecture roles. Also breaks ties in the latest-first projects page.
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

/** JD 항목별 태그. 케이스 스터디에 근거가 있는 항목만 추가한다. */
export const AA_PROJECT_TAGS: Record<string, string[]> = {
  'ai-smart-plant': [
    '공공프로젝트(한국가스공사)',
    '전자정부표준프레임워크',
    '상용S/W연동(PI·MSSQL)',
    '시스템연계',
    '배포표준화',
  ],
  'v2x-patrol-car': [
    '공공프로젝트(경찰청)',
    '시스템연계',
    '기술검토',
  ],
  'infra-cicd-airflow': [
    'CI/CD구성',
    '개발환경구성',
    '시스템연계',
    '배포자동화',
  ],
  'hadoop-enterprise-platform': [
    '상용S/W도입(Datadog)',
    '기술검토',
  ],
  'pley-child-behavior': [
    '시스템연계',
  ],
};
