import { getCollection, type CollectionEntry } from 'astro:content';

export const getProjects = async () =>
  (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);

export const getResearch = async () =>
  (await getCollection('research')).sort((a, b) => a.data.order - b.data.order);

export const getExperience = async () =>
  (await getCollection('experience')).sort((a, b) => a.data.order - b.data.order);

// Drafts are visible in `npm run dev` only.
export const getPosts = async () =>
  (await getCollection('writing', (p) => import.meta.env.DEV || !p.data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

export function neighbors<T>(list: T[], index: number) {
  return { prev: index > 0 ? list[index - 1] : undefined, next: index < list.length - 1 ? list[index + 1] : undefined };
}

export function pick<C extends 'projects' | 'research'>(all: CollectionEntry<C>[], ids: string[]) {
  return ids.map((id) => all.find((e) => e.id === id)).filter((e): e is CollectionEntry<C> => Boolean(e));
}
