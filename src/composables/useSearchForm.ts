import { computed, onMounted, ref } from 'vue'
import { DUMMY_SEARCH_QUERY_TITLE, DUMMY_SEARCH_RESULTS } from '@/copy/dummySearchResults'
import { createSearchFormSnapshot, isFormPristine } from '@/utils/searchFormState'
import { todayISO } from '@/utils/date'

type DatasetId = 'rechtspraak' | 'echr' | 'cjeu'
type LawRefsOperator = 'and' | 'or'

export type SearchResultItem = { ecli: string; similarity: number; snippet: string }

const PRISTINE_TOOLTIP = 'Change at least one search field to enable Submit'
const INVALID_TOOLTIP =
  'Fill in semantic search and either law references or keywords'

export function useSearchForm() {
  const isSearchPanelOpen = ref(true)
  const dataset = ref<DatasetId>('rechtspraak')
  const semanticQuery = ref('')
  const lawRefsOperator = ref<LawRefsOperator>('and')
  const lawRefsQuery = ref('')
  const keywords = ref<string[]>([])

  const startDate = ref('1990-01-01')
  const endDate = ref(todayISO())
  const maxResults = ref(5)
  const degreesSources = ref(0)
  const degreesTargets = ref(0)
  const documentTypes = ref<Record<string, boolean>>({
    decision: true,
    opinion: false,
  })

  const initialFormSnapshot = ref<string | null>(null)
  const isSearching = ref(false)
  const searchResults = ref<ReadonlyArray<SearchResultItem>>([])

  function getFormState() {
    return {
      dataset: dataset.value,
      semanticQuery: semanticQuery.value,
      lawRefsOperator: lawRefsOperator.value,
      lawRefsQuery: lawRefsQuery.value,
      keywords: keywords.value,
      startDate: startDate.value,
      endDate: endDate.value,
      maxResults: maxResults.value,
      degreesSources: degreesSources.value,
      degreesTargets: degreesTargets.value,
      documentTypes: documentTypes.value,
    }
  }

  const currentFormSnapshot = computed(() =>
    createSearchFormSnapshot(getFormState()),
  )

  const formPristine = computed(() =>
    isFormPristine(currentFormSnapshot.value, initialFormSnapshot.value),
  )

  const formValid = computed(
    () =>
      semanticQuery.value.trim() !== '' &&
      (lawRefsQuery.value.trim() !== '' || keywords.value.length > 0),
  )

  const submitDisabled = computed(
    () => formPristine.value || !formValid.value,
  )

  const submitDisabledTooltip = computed(() => {
    if (!submitDisabled.value) return undefined
    if (formPristine.value) return PRISTINE_TOOLTIP
    return INVALID_TOOLTIP
  })

  onMounted(() => {
    initialFormSnapshot.value = currentFormSnapshot.value
  })

  function submitSearch() {
    if (submitDisabled.value || isSearching.value) return
    isSearching.value = true
    searchResults.value = []
    setTimeout(() => {
      isSearching.value = false
      searchResults.value = DUMMY_SEARCH_RESULTS
      initialFormSnapshot.value = currentFormSnapshot.value
    }, 1500)
  }

  return {
    isSearchPanelOpen,
    dataset,
    semanticQuery,
    lawRefsOperator,
    lawRefsQuery,
    keywords,
    startDate,
    endDate,
    maxResults,
    degreesSources,
    degreesTargets,
    documentTypes,
    isSearching,
    searchResults,
    submitDisabled,
    submitDisabledTooltip,
    submitSearch,
    dummySearchQueryTitle: DUMMY_SEARCH_QUERY_TITLE,
  }
}
