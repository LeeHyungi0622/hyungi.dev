import type { ProjectEntry } from './projects';
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

export function compareLatestProjects(a: ProjectEntry, b: ProjectEntry): number {
  return pinRank(a.id) - pinRank(b.id)
    || latestProjectYear(b.data) - latestProjectYear(a.data)
    || b.data.year - a.data.year
    || tieBreakOrder.indexOf(a.id) - tieBreakOrder.indexOf(b.id);
}
