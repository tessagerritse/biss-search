/**
 * Info text shown in the (i) popover next to form field labels.
 * Kept in one place for easier copy updates and consistency.
 */
export const fieldInfo = {
  dataset:
    'We offer three different Case Law datasets: Rechtspraak, ECHR and CJEU.',
  semanticSearch:
    'Describe your legal question or the situation in natural language. The search will find cases that are semantically similar to your description.',
  keywords:
    'Add one or more keywords to narrow your search. Type a term and press Enter or comma to add it. You can add multiple keywords.',
  dateRange:
    'Limit search results to documents within this date range. Start and end dates use DD/MM/YYYY format; both are limited to today or earlier.',
  instances:
    'Filter cases by the court or judicial body that issued the decision. This allows you to focus on specific levels or institutions within the legal system.',
  domains:
    'Filter cases by legal domain (e.g. civil, criminal, administrative law). Use this to narrow your search to a specific area of law.',
} as const
