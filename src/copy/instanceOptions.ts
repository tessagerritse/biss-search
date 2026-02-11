/**
 * Labels and structure for the Instances checkbox list.
 * Kept separate so copy can be updated without touching component logic.
 */

export const INSTANCE_FLAT_OPTIONS = [
  { id: 'hoge-raad', label: 'Hoge Raad' },
  { id: 'raad-van-state', label: 'Raad van State' },
  { id: 'centrale-raad', label: 'Centrale Raad van Beroep' },
  { id: 'college-beroep', label: 'College van Beroep voor het bedrijfsleven' },
] as const

export const INSTANCE_GROUPS = [
  {
    id: 'gerechtshoven',
    label: 'Gerechtshoven',
    children: [
      { id: 'gerechtshof-amsterdam', label: 'Gerechtshof Amsterdam' },
      { id: 'gerechtshof-arnhem-leeuwarden', label: 'Gerechtshof Arnhem-Leeuwarden' },
      { id: 'gerechtshof-den-haag', label: 'Gerechtshof Den Haag' },
      { id: 'gerechtshof-s-hertogenbosch', label: "Gerechtshof 's-Hertogenbosch" },
    ],
  },
  {
    id: 'rechtbanken',
    label: 'Rechtbanken',
    children: [
      { id: 'rechtbank-amsterdam', label: 'Rechtbank Amsterdam' },
      { id: 'rechtbank-den-haag', label: 'Rechtbank Den Haag' },
      { id: 'rechtbank-gelderland', label: 'Rechtbank Gelderland' },
      { id: 'rechtbank-limburg', label: 'Rechtbank Limburg' },
      { id: 'rechtbank-midden-nederland', label: 'Rechtbank Midden-Nederland' },
      { id: 'rechtbank-noord-holland', label: 'Rechtbank Noord-Holland' },
      { id: 'rechtbank-noord-nederland', label: 'Rechtbank Noord-Nederland' },
      { id: 'rechtbank-oost-brabant', label: 'Rechtbank Oost-Brabant' },
      { id: 'rechtbank-overijssel', label: 'Rechtbank Overijssel' },
      { id: 'rechtbank-rotterdam', label: 'Rechtbank Rotterdam' },
      { id: 'rechtbank-zeeland-west-brabant', label: 'Rechtbank Zeeland-West-Brabant' },
    ],
  },
  {
    id: 'andere-instanties',
    label: 'Andere instanties binnen het Koninkrijk',
    children: [
      { id: 'constitutioneel-hof-sint-maarten', label: 'Constitutioneel Hof Sint Maarten' },
      {
        id: 'gemeenschappelijk-hof-caribisch',
        label: 'Gemeenschappelijk Hof van Justitie van Aruba, Curacao, Sint Maarten en van Bonaire, Sint Eustatius en Saba',
      },
      {
        id: 'gerecht-ambtenarenzaken-caribisch',
        label: 'Gerecht in Ambtenarenzaken van Aruba, Curacao, Sint Maarten en van Bonaire, Sint Eustatius en Saba',
      },
      {
        id: 'raad-beroep-ambtenarenzaken-caribisch',
        label: 'Raad van Beroep in Ambtenarenzaken van Aruba, Curaçao, Sint Maarten en van Bonaire, Sint Eustatius en Saba',
      },
      {
        id: 'raad-beroep-belastingzaken-caribisch',
        label: 'Raad van Beroep voor Belastingzaken van Aruba, Curaçao, Sint Maarten en van Bonaire, Sint Eustatius en Saba',
      },
      { id: 'gerecht-eerste-aanleg-aruba', label: 'Gerecht in Eerste Aanleg van Aruba' },
      {
        id: 'gerecht-eerste-aanleg-bonaire',
        label: 'Gerecht in eerste aanleg van Bonaire, Sint Eustatius en Saba',
      },
      { id: 'gerecht-eerste-aanleg-curacao', label: 'Gerecht in eerste aanleg van Curaçao' },
      { id: 'gerecht-eerste-aanleg-sint-maarten', label: 'Gerecht in eerste aanleg van Sint Maarten' },
    ],
  },
] as const
