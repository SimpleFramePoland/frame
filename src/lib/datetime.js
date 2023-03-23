import { format } from 'date-fns';
import plLocale from 'date-fns/locale/pl';
/**
 * formatDate
 */

export function formatDate(date, pattern = 'PPP') {
  return format(new Date(date), pattern, { locale: plLocale });
}

/**
 * sortObjectsByDate
 */

export function sortObjectsByDate(array, { key = 'date' } = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}
