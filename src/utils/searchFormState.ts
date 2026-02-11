/**
 * Pure functions for search form state: snapshot and pristine check.
 * State is held by the view/composable; this file only operates on it.
 */

export interface SearchFormState {
  dataset: 'rechtspraak' | 'echr' | 'cjeu'
  semanticQuery: string
  lawRefsOperator: 'and' | 'or'
  lawRefsQuery: string
  keywords: string[]
  startDate: string
  endDate: string
  maxResults: number
  degreesSources: number
  degreesTargets: number
  documentTypes: Record<string, boolean>
}

export function createSearchFormSnapshot(state: SearchFormState): string {
  return JSON.stringify({
    dataset: state.dataset,
    semanticQuery: state.semanticQuery,
    lawRefsOperator: state.lawRefsOperator,
    lawRefsQuery: state.lawRefsQuery,
    keywords: [...state.keywords].sort(),
    startDate: state.startDate,
    endDate: state.endDate,
    maxResults: state.maxResults,
    degreesSources: state.degreesSources,
    degreesTargets: state.degreesTargets,
    documentTypes: { ...state.documentTypes },
  })
}

export function isFormPristine(
  currentSnapshot: string,
  initialSnapshot: string | null,
): boolean {
  if (initialSnapshot === null) return true
  return currentSnapshot === initialSnapshot
}
