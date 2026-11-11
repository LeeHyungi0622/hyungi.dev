import { siteConfig } from '../config';

export type PersonaId = 'aa' | 'mes';

interface PersonaConfig {
  /** Shown after the author title on the homepage */
  positionLabel: string;
  /** Relevance order used to break ties when projects are sorted latest-first */
  projectOrder: string[];
  /** Nav items and homepage sections hidden on this build */
  hiddenHrefs: string[];
  /** JD 항목별 태그. 케이스 스터디에 근거가 있는 항목만 추가한다. */
  projectTags: Record<string, string[]>;
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
        'MSSQL·PostgreSQL',
        '설비데이터수집(PI)',
        '현장설치·실증',
      ],
      'v2x-patrol-car': ['Java/SpringBoot', '외부시스템I/F(ASN.1)', '현장테스트'],
      'infra-cicd-airflow': ['시스템아키텍처설계', '이종시스템연계(SMB)'],
      'hadoop-enterprise-platform': ['DB적재최적화', '저장소성능비교'],
      'pley-child-behavior': ['PostgreSQL', '외부API연동'],
    },
  },
};

/** Settings for the current job-focused build, or undefined on the general site */
export const persona = siteConfig.persona === 'general' ? undefined : PERSONAS[siteConfig.persona];
