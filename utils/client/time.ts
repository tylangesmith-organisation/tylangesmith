import { parse, format } from 'date-fns'

export const formatDate = (date: string): string => {
  const parsedDate = parse(date, 'yyyy-MM-dd', new Date())
  return format(parsedDate, 'MMMM yyyy')
}
