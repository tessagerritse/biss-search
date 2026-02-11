/**
 * Labels and structure for the Domains checkbox list.
 * Kept separate so copy can be updated without touching component logic.
 * Nested groups are collapsed by default.
 */

export const DOMAIN_GROUPS = [
  {
    id: 'bestuursrecht',
    label: 'Bestuursrecht',
    children: [
      { id: 'ambtenarenrecht', label: 'Ambtenarenrecht' },
      { id: 'belastingrecht', label: 'Belastingrecht' },
      { id: 'bestuursprocesrecht', label: 'Bestuursprocesrecht' },
      { id: 'bestuursstrafrecht', label: 'Bestuursstrafrecht' },
      { id: 'europees-bestuursrecht', label: 'Europees bestuursrecht' },
      { id: 'mededingingsrecht', label: 'Mededingingsrecht' },
      { id: 'omgevingsrecht', label: 'Omgevingsrecht' },
      { id: 'socialezekerheidsrecht', label: 'Socialezekerheidsrecht' },
      { id: 'vreemdelingenrecht', label: 'Vreemdelingenrecht' },
    ],
  },
  {
    id: 'civiel-recht',
    label: 'Civiel recht',
    children: [
      { id: 'aanbestedingsrecht', label: 'Aanbestedingsrecht' },
      { id: 'arbeidsrecht', label: 'Arbeidsrecht' },
      { id: 'burgerlijk-procesrecht', label: 'Burgerlijk procesrecht' },
      { id: 'europees-civiel-recht', label: 'Europees civiel recht' },
      { id: 'goederenrecht', label: 'Goederenrecht' },
      { id: 'insolventierecht', label: 'Insolventierecht' },
      { id: 'intellectueel-eigendomsrecht', label: 'Intellectueel-eigendomsrecht' },
      { id: 'internationaal-privaatrecht', label: 'Internationaal privaatrecht' },
      { id: 'mededingingsrecht-civiel', label: 'Mededingingsrecht' },
      { id: 'ondernemingsrecht', label: 'Ondernemingsrecht' },
      { id: 'personen-familierecht', label: 'Personen- en familierecht' },
      { id: 'verbintenissenrecht', label: 'Verbintenissenrecht' },
    ],
  },
  {
    id: 'internationaal-publiekrecht',
    label: 'Internationaal publiekrecht',
    children: [
      { id: 'mensenrechten', label: 'Mensenrechten' },
      { id: 'volkenrecht', label: 'Volkenrecht' },
    ],
  },
  {
    id: 'strafrecht',
    label: 'Strafrecht',
    children: [
      { id: 'europees-strafrecht', label: 'Europees strafrecht' },
      { id: 'internationaal-strafrecht', label: 'Internationaal strafrecht' },
      { id: 'materieel-strafrecht', label: 'Materieel strafrecht' },
      { id: 'penitentiair-strafrecht', label: 'Penitentiair strafrecht' },
      { id: 'strafprocesrecht', label: 'Strafprocesrecht' },
    ],
  },
] as const
