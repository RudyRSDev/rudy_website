'use client';

import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { HiSquares2X2 } from 'react-icons/hi2';

interface TaskbarProps {
  apps: any;
}

export default function Taskbar(props: TaskbarProps) {
  const { apps } = props;
  const [activeApps, setActiveApps] = apps|| [apps, () => {}];

  const handleTaskbarButtonClick = (name: string) => {
    setActiveApps((prevApps: any[]) => {
      return prevApps.map((app: { name: string; }) => {
        if (app.name === name) {
          return { ...app, state: 1 };
        } else {
          return app;
        }
      });
    });
  };

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

  const sortedApps = activeApps.slice().sort((a:any, b:any) => a.id - b.id);

  return (
    <div className="flex h-24 w-full justify-between bg-black/40 backdrop-blur-lg">
      {/* Start Menu */}
      <div className="flex flex-row">
        <div className="btn-ghost btn flex aspect-square h-full items-center justify-center text-3xl text-white transition-all duration-500">
          <IconContext.Provider value={{ size: '1em' }}>
            <HiSquares2X2 className="text-white" />
          </IconContext.Provider>
        </div>
      </div>

      {/* Taskbar Apps */}
      <div className="flex flex-row">
      {sortedApps.map((app: { id: any; name: any; icon: any; alt: any; window: any; state: any; }) => {
          const { id, name, icon, alt, window, state } = app;
          if (state === 1)
            return (
              <div className="btn-ghost btn tooltip flex aspect-square h-full items-center justify-center text-white transition-all duration-500"
                key={id}
                data-tip={name}
                onClick={() => handleTaskbarButtonClick(name)}
              >
                <IconContext.Provider value={{ size: '1em' }}>
                  <div className="flex flex-col items-center justify-center text-3xl">
                    {icon}
                    <div className="absolute w-4 h-1 bg-white rounded mt-12 transition-all"></div>
                  </div>
                </IconContext.Provider>
              </div>
            )
          else
            return (
              <div className="btn-ghost btn tooltip flex aspect-square h-full items-center justify-center text-white transition-all duration-500"
                key={id}
                data-tip={name}
                onClick={() => handleTaskbarButtonClick(name)}
              >
                <IconContext.Provider value={{ size: '1em' }}>
                  <div className="flex flex-col items-center justify-center text-3xl">
                    {icon}
                    <div className="absolute w-0 h-0 bg-white rounded mt-12 transition-all"></div>
                  </div>
                </IconContext.Provider>
              </div>
              )
          
        })}
      </div>

      {/* Action Center */}
      <div className="btn-ghost btn flex h-full flex-col items-center justify-center px-3 transition-all duration-500">
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
