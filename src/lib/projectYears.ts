export function formatProjectYears(data: { year: number; endYear?: number }): string {
  return data.endYear ? `${data.year}~${data.endYear}` : String(data.year);
}

export function latestProjectYear(data: { year: number; endYear?: number }): number {
  return data.endYear ?? data.year;
}
