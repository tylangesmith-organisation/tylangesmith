import { parse, format } from 'date-fns'

export const formatDate = (date: string): string => {
  const parsedDate = parse(date, 'yyyy-MM-dd', new Date())
  return format(parsedDate, 'MMMM yyyy')
}

export function formatReadingTime (timeToReadMinutes: number) {
  const cups = Math.round(timeToReadMinutes / 5)
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${timeToReadMinutes} min read`
  } else {
    return `${new Array(cups || 1).fill('☕️').join('')} ${timeToReadMinutes} min read`
  }0
}
