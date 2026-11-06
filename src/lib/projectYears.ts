import type { CollectionEntry } from 'astro:content';
import { AA_PROJECT_ORDER } from './aaPersona';

export function formatProjectYears(data: { year: number; endYear?: number }): string {
  return data.endYear ? `${data.year}~${data.endYear}` : String(data.year);
}

export function latestProjectYear(data: { year: number; endYear?: number }): number {
  return data.endYear ?? data.year;
}

export function compareLatestProjects(a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>): number {
  return latestProjectYear(b.data) - latestProjectYear(a.data)
    || b.data.year - a.data.year
    || AA_PROJECT_ORDER.indexOf(a.id) - AA_PROJECT_ORDER.indexOf(b.id);
}
