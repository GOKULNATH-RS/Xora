'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

export function DatePicker({
  label,
  setFunction
}: {
  label?: string
  setFunction: React.Dispatch<React.SetStateAction<Date | undefined>>
}) {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'min-w-[160px] justify-start text-left font-normal pl-2 hover:bg-white-500/90 border-[1px] border-white-500/30 hover:text-black-500',
            !date && 'text-white-500 hover:text-black-500'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? (
            format(date, 'PPP')
          ) : (
            <span>{label ? label : 'Pick a date'}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0 bg-black-600 backdrop:blur-md border-black-700 text-white-500'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={(e) => {
            setDate(e)
            setFunction(e)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
