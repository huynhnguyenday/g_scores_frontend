const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL?.trim();

if (!apiBaseUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_API_URL. Copy .env.example to .env and restart the dev server.",
  );
}

const baseUrl = apiBaseUrl.replace(/\/$/, "");

export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
};

export type StudentScore = {
  sbd: string;
  toan?: number;
  nguVan?: number;
  ngoaiNgu?: number;
  vatLi?: number;
  hoaHoc?: number;
  sinhHoc?: number;
  lichSu?: number;
  diaLi?: number;
  gdcd?: number;
  maNgoaiNgu?: string;
};

export type ScoreBands = {
  gte8: number;
  from6to8: number;
  from4to6: number;
  lt4: number;
};

export type SubjectDistribution = {
  subject: string;
  bands: ScoreBands;
  totalWithScore: number;
};

export type TopGroupAStudent = {
  sbd: string;
  toan: number;
  vatLi: number;
  hoaHoc: number;
  totalGroupA: number;
};

async function httpGet<T>(path: string): Promise<T> {
  const res = await fetch(`${baseUrl}/api${path}`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  const body = (await res.json()) as ApiResponse<T>;

  if (!res.ok || !body.success) {
    throw new Error(body.message ?? `API error (${res.status})`);
  }

  return body.data as T;
}

export function fetchScoreBySbd(sbd: string) {
  return httpGet<StudentScore>(`/scores/${encodeURIComponent(sbd)}`);
}

export function fetchSubjectDistribution(subject: string) {
  return httpGet<SubjectDistribution>(
    `/reports/distribution?subject=${encodeURIComponent(subject)}`,
  );
}

export function fetchAllSubjectsDistribution() {
  return httpGet<SubjectDistribution[]>("/reports/distribution/all");
}

export function fetchTopGroupA() {
  return httpGet<TopGroupAStudent[]>("/reports/top-group-a");
}
