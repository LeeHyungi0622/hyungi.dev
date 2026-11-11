import { siteConfig } from '../config';

export type PersonaId = 'aa' | 'mes';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  title: string;
  problem: string;
  approach: string;
  impact: { value: string; label: string };
  tags: string[];
}

interface PersonaConfig {
  /** Shown after the author title on the homepage */
  positionLabel: string;
  /** Relevance order used to break ties when projects are sorted latest-first */
  projectOrder: string[];
  /** Projects shown first, ahead of the latest-first order */
  pinnedProjects?: string[];
  /** Nav items and homepage sections hidden on this build */
  hiddenHrefs: string[];
  /** JD 항목별 태그. 케이스 스터디에 근거가 있는 항목만 추가한다. */
  projectTags: Record<string, string[]>;
  /** Career highlights without a case study page, summarized from the resume */
  experience?: { heading: string; intro: string; items: ExperienceItem[]; fieldWork?: string };
}

export const PERSONAS: Record<PersonaId, PersonaConfig> = {
  aa: {
    positionLabel: 'Application Architect 포지션 지원',
    projectOrder: [
      'ai-smart-plant',
      'v2x-patrol-car',
      'infra-cicd-airflow',
      'hadoop-enterprise-platform',
      'pley-child-behavior',
    ],
    hiddenHrefs: ['/writing', '/journey', '/decisions'],
    projectTags: {
      'ai-smart-plant': [
        '공공프로젝트(한국가스공사)',
        '전자정부표준프레임워크',
        '상용S/W연동(PI·MSSQL)',
        '시스템연계',
        '배포표준화',
      ],
      'v2x-patrol-car': ['공공프로젝트(경찰청)', '시스템연계', '기술검토'],
      'infra-cicd-airflow': ['CI/CD구성', '개발환경구성', '시스템연계', '배포자동화'],
      'hadoop-enterprise-platform': ['상용S/W도입(Datadog)', '기술검토'],
      'pley-child-behavior': ['시스템연계'],
    },
  },
  mes: {
    positionLabel: 'MES 개발자 포지션 지원',
    pinnedProjects: ['ai-smart-plant'],
    projectOrder: [
      'ai-smart-plant',
      'infra-cicd-airflow',
      'v2x-patrol-car',
      'hadoop-enterprise-platform',
      'pley-child-behavior',
    ],
    hiddenHrefs: ['/writing', '/journey', '/decisions'],
    projectTags: {
      'ai-smart-plant': [
        '스마트플랜트(설비모니터링)',
        'Java웹(JSP/Spring)',
        'UI/UX설계',
        'MSSQL·PostgreSQL',
        '설비데이터수집(PI)',
        '현장설치·실증',
      ],
      'v2x-patrol-car': ['Java/SpringBoot', '외부시스템I/F(ASN.1)', '현장테스트'],
      'infra-cicd-airflow': ['시스템아키텍처설계', '이종시스템연계(SMB)'],
      'hadoop-enterprise-platform': ['DB적재최적화', '저장소성능비교'],
      'pley-child-behavior': ['PostgreSQL', '외부API연동'],
    },
    experience: {
      heading: '제조 현장 경력',
      intro: '케이스 스터디로 정리하지 않은 반도체·제조 공장 프로젝트입니다. 고객사는 익명으로 표기했습니다.',
      items: [
        {
          company: '(주)이안',
          role: '풀스택 엔지니어',
          period: '2025.08 – 2026.03',
          title: '반도체 FAB OHT 반송 설비 실시간 3D 모니터링',
          problem: '실제 설비 데이터 기반 OHT 레일 3.3만여 객체(Line·Arc)를 3D로 렌더링할 때 OOM 발생',
          approach: 'OHT 노드 이동 경로·상태 실시간 매핑, Thin Instancing·Vertex 최적화, 단계별 성능 지표 고객사 공유',
          impact: { value: '2.6 → 1.4GB', label: 'Heap 메모리 45%↓' },
          tags: ['대기업FAB', '반송설비(OHT)', 'WebGL3D', '실시간모니터링'],
        },
        {
          company: '(주)디토닉',
          role: '데이터 엔지니어 겸 프론트엔드',
          period: '2022.11 – 2023.01',
          title: '반도체 공장 Legacy 설비 데이터 연계',
          problem: 'Legacy 설비 시스템 데이터가 현장 관리 시스템과 단절',
          approach: 'Legacy 시스템 설계 구조 파악 및 이슈 원인 분석 후 자사 ESL 솔루션과 연계',
          impact: { value: '50%↓', label: '현장 관리 리소스' },
          tags: ['대기업반도체공장', '레거시시스템I/F', '설비데이터연계'],
        },
        {
          company: '(주)디토닉',
          role: '데이터 엔지니어 겸 프론트엔드',
          period: '재직 기간(2022.09 – 2024.02) 중',
          title: '항공기 제조 공장 IoT 데이터 수집·시각화',
          problem: '생산 공장 IoT 데이터의 수집·검증·활용 체계 부재',
          approach: 'Vue·Spring Boot·PostgreSQL 기반 수집·검증·시각화 웹앱 구축',
          impact: { value: '150%↑', label: '현장 업무 효율' },
          tags: ['제조공장IoT', 'Java/SpringBoot', 'Vue', 'PostgreSQL'],
        },
      ],
      fieldWork: 'SATO Asia Pacific(싱가포르) On-site System Engineer로 제조·물류 고객사 현장에 바코드·RFID 자동인식 시스템을 도입했고(2016.04 – 2017.06), 영어·일본어로 업무 소통이 가능합니다.',
    },
  },
};

/** Settings for the current job-focused build, or undefined on the general site */
export const persona = siteConfig.persona === 'general' ? undefined : PERSONAS[siteConfig.persona];
