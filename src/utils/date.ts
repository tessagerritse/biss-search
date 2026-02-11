/**
 * Date utilities. All dates are in local time unless noted.
 */

/** Today's date as YYYY-MM-DD (local time). */
export function todayISO(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** Format YYYY-MM-DD to DD/MM/YYYY. Returns empty string if input is invalid or too short. */
export function toDDMMYYYY(iso: string): string {
  if (!iso || iso.length < 10) return ''
  const [y, m, d] = iso.slice(0, 10).split('-')
  return [d, m, y].join('/')
}
