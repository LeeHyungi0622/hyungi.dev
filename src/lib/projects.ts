import { getCollection, type CollectionEntry } from 'astro:content';
import { siteConfig } from '../config';

export type ProjectEntry = CollectionEntry<'projects'> | CollectionEntry<'projectsMes'>;

/**
 * Projects for the current build. On the MES site, a case study in
 * src/content/projects-mes replaces the shared one with the same id, so MES
 * edits never reach the general or AA sites.
 */
export async function getProjects(): Promise<ProjectEntry[]> {
  const shared = await getCollection('projects');
  if (siteConfig.persona !== 'mes') return shared;
  const overrides = new Map((await getCollection('projectsMes')).map((entry) => [entry.id, entry]));
  return shared.map((entry) => overrides.get(entry.id) ?? entry);
}
