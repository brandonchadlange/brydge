import dayjs from 'dayjs';

export const formatDate = (date: number | Date, format: string = 'MMM D, YYYY') => {
  return dayjs(date).format(format)
}
