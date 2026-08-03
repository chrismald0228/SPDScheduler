import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import {
  createViewDay,
  createViewWeekAgenda,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import 'temporal-polyfill/global'
import { Temporal } from 'temporal-polyfill'
import { useState, useEffect } from 'react'
import { useTheme } from '../theme-provider'


 
export function MyCalendar() {
  const eventModal = createEventModalPlugin()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeekAgenda(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    theme: "shadcn",
    isDark,
    calendars: {
      personal: {
        colorName: 'personal',
        lightColors: {
          main: '#f9d71c',
          container: '#fff5aa',
          onContainer: '#594800',
        },
        darkColors: {
          main: '#fff5c0',
          onContainer: '#fff5de',
          container: '#a29742',
        },
      },
    },
    plugins: [eventModal],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: Temporal.ZonedDateTime.from('2026-07-16T10:05:00-05:00[America/Chicago]'),
        end: Temporal.ZonedDateTime.from('2026-07-16T10:35:00-05:00[America/Chicago]'),
        calendarId: 'personal'
      },
    ],
  })
  
  useEffect(() => {
    calendar?.setTheme(isDark ? 'dark' : 'light')
  }, [isDark, calendar])

  return (
    <div className='py-3' style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
