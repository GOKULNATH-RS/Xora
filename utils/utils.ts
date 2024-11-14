import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB').replace(/\//g, '-')
}

export function formatDatetoStr(dateStr: string): string {
  // Split the input date string into day, month, and year parts
  const [day, month, year] = dateStr.split('-')

  // Create a Date object with the parsed values, ensuring the format is `YYYY-MM-DD`
  const date = new Date(`${year}-${month}-${day}`)

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format')
  }

  // Format options for the output
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  // Use Intl.DateTimeFormat to format the date
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
