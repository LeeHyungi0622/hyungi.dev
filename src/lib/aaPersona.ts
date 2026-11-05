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
