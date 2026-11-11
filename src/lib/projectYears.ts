import type { CollectionEntry } from 'astro:content';
import { PERSONAS, persona } from './personas';

const tieBreakOrder = (persona ?? PERSONAS.aa).projectOrder;
const pinned = persona?.pinnedProjects ?? [];
const pinRank = (id: string) => (pinned.includes(id) ? pinned.indexOf(id) : pinned.length);

export function formatProjectYears(data: { year: number; endYear?: number }): string {
  return data.endYear ? `${data.year}~${data.endYear}` : String(data.year);
}

export function latestProjectYear(data: { year: number; endYear?: number }): number {
  return data.endYear ?? data.year;
}

export function compareLatestProjects(a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>): number {
  return pinRank(a.id) - pinRank(b.id)
    || latestProjectYear(b.data) - latestProjectYear(a.data)
    || b.data.year - a.data.year
    || tieBreakOrder.indexOf(a.id) - tieBreakOrder.indexOf(b.id);
}
