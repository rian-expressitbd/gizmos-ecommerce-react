import Calendar from "@/components/ui/form/calendar";
import React, { useState } from "react";

const CalendarKit: React.FC = () => {
  // State for different usage examples
  const [singleDate, setSingleDate] = useState<Date[]>([]);
  const [multiDates, setMultiDates] = useState<Date[]>([]);
  const [rangeDates, setRangeDates] = useState<Date[]>([]);
  const [dateWithError, setDateWithError] = useState<Date[]>([]);
  const [topPositionDate, setTopPositionDate] = useState<Date[]>([]);
  const [customStyleDate, setCustomStyleDate] = useState<Date[]>([]);
  const [noMonthYearDate, setNoMonthYearDate] = useState<Date[]>([]);

  return (
    <div className='space-y-8 p-4 max-w-4xl mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-6'>Calendar Component Examples</h1>

      {/* Basic Single Date Selection */}
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold'>Single Date Selection</h2>
        <Calendar
          id='single-date'
          label='Select a date'
          mode='single'
          selectedDates={singleDate}
          onDateChange={setSingleDate}
          placeholder='Choose a date'
        />
        <p className='text-sm text-gray-600'>Selected: {singleDate[0]?.toLocaleDateString() || "None"}</p>
      </div>

      {/* Multiple Dates Selection */}
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold'>Multiple Dates Selection</h2>
        <Calendar
          id='multi-date'
          label='Select multiple dates'
          mode='multi'
          selectedDates={multiDates}
          onDateChange={setMultiDates}
          placeholder='Select multiple dates'
        />
        <p className='text-sm text-gray-600'>
          Selected: {multiDates.length > 0 ? multiDates.map((d) => d.toLocaleDateString()).join(", ") : "None"}
        </p>
      </div>

      {/* Date Range Selection */}
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold'>Date Range Selection</h2>
        <Calendar
          id='range-date'
          label='Select a date range'
          mode='range'
          selectedDates={rangeDates}
          onDateChange={setRangeDates}
          placeholder='Select start and end date'
        />
        <p className='text-sm text-gray-600'>
          Selected:{" "}
          {rangeDates.length > 1
            ? `${rangeDates[0].toLocaleDateString()} - ${rangeDates[rangeDates.length - 1].toLocaleDateString()}`
            : "None"}
        </p>
      </div>

      {/* Calendar with Error State */}
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold'>Calendar with Error State</h2>
        <Calendar
          id='error-date'
          label='Date with error'
          mode='single'
          selectedDates={dateWithError}
          onDateChange={setDateWithError}
          error='This field is required'
          preserveErrorSpace={true}
          required
        />
      </div>

      {/* Calendar with Top Position */}
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold'>Calendar with Top Position</h2>
        <Calendar
          id='top-date'
          label='Top positioned calendar'
          mode='single'
          selectedDates={topPositionDate}
          onDateChange={setTopPositionDate}
          position='top'
        />
      </div>

      {/* Custom Styled Calendar */}
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold'>Custom Styled Calendar</h2>
        <Calendar
          id='styled-date'
          label='Custom styled'
          mode='single'
          selectedDates={customStyleDate}
          onDateChange={setCustomStyleDate}
          inputClassName='border-2 border-purple-500 focus:ring-purple-500'
          calendarClassName='border-purple-500 shadow-lg'
        />
      </div>

      {/* Calendar Without Month/Year Selection */}
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold'>Without Month/Year Selection</h2>
        <Calendar
          id='simple-date'
          label='Basic calendar'
          mode='single'
          selectedDates={noMonthYearDate}
          onDateChange={setNoMonthYearDate}
          showMonthYearSelection={false}
        />
      </div>
    </div>
  );
};

export default CalendarKit;
