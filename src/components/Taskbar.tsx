'use client';

import React, { useState, useEffect } from 'react';
import { taskbar_items } from '@/content/taskbar_items';
import { IconContext } from 'react-icons';
import { HiSquares2X2 } from 'react-icons/hi2';

export default function Taskbar() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const dateIntervalId = setInterval(() => {
      setDate(new Date());
    }, 86400000); // update the date once per day

    return () => {
      clearInterval(timeIntervalId);
      clearInterval(dateIntervalId);
    };
  }, []);

  return (
    <div className="absolute bottom-0 flex h-24 w-full justify-between bg-black/40 backdrop-blur-lg">
      <div className="flex flex-row">
        <div className="flex aspect-square h-full items-center justify-center text-white transition-all duration-200 hover:bg-white/10">
          <IconContext.Provider value={{ size: '2em' }}>
            <HiSquares2X2 className="text-white" />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex flex-row">
        {taskbar_items.map((app, index) => (
          <div
            className="flex aspect-square h-full items-center justify-center text-white transition-all duration-200 hover:bg-white/10"
            key={index}
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <div className="flex flex-col items-center justify-center pt-1">
                {app.icon}
                <span>{app.name}</span>
              </div>
            </IconContext.Provider>
          </div>
        ))}
      </div>
      <div className="flex h-full flex-col items-center justify-center px-3 transition-all duration-200 hover:bg-white/10">
        <div className="text-white">
          {time.toLocaleTimeString([], {
            hour12: true,
            hourCycle: 'h23',
            second: undefined,
          })}
        </div>
        <div className="text-white">
          {date.toLocaleDateString([], {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </div>
      </div>
    </div>
  );
}
