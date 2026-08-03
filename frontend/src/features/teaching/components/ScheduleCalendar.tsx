import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import type { EventClickArg, EventInput } from '@fullcalendar/core';
import viLocale from '@fullcalendar/core/locales/vi';
import { App } from 'antd';

interface ScheduleCalendarProps {
  events: EventInput[];
  editable?: boolean;
}

export function currentWeekDate(dayOffset: number, hour: number, minute = 0): Date {
  const date = new Date();
  const currentDay = date.getDay();
  const daysSinceMonday = currentDay === 0 ? 6 : currentDay - 1;

  date.setDate(date.getDate() - daysSinceMonday + dayOffset);
  date.setHours(hour, minute, 0, 0);

  return date;
}

export function ScheduleCalendar({ events, editable = false }: ScheduleCalendarProps) {
  const { message } = App.useApp();

  const handleEventClick = ({ event }: EventClickArg) => {
    void message.info(`${event.title} - ${event.start?.toLocaleString() ?? ''}`);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      buttonText={{
        today: 'Hôm nay',
        month: 'Tháng',
        week: 'Tuần',
        day: 'Ngày',
      }}
      allDaySlot={false}
      editable={editable}
      eventClick={handleEventClick}
      events={events}
      height="auto"
      locale={viLocale}
      nowIndicator
      slotMinTime="07:00:00"
      slotMaxTime="22:00:00"
    />
  );
}
