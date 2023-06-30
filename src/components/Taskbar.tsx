'use client';

import { useState, useEffect } from 'react';
import { taskbar_items } from '@/content/taskbar_items';
import { IconContext } from 'react-icons';
import { HiSquares2X2 } from 'react-icons/hi2';

interface TaskbarButton {
  name: string;
  icon: JSX.Element;
  alt: string;
}

interface TaskbarProps {
  onButtonClick: (id: string) => void;
}

export default function Taskbar(props: TaskbarProps) {
  const { onButtonClick } = props;
  const [buttons, setButtons] = useState<TaskbarButton[]>(taskbar_items);

  const handleTaskbarButtonClick = (name: string) => {
    onButtonClick(name);
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
        {buttons.map((app, index) => (
          <div
            className="btn-ghost btn tooltip flex aspect-square h-full items-center justify-center text-white transition-all duration-500"
            key={index}
            data-tip={app.name}
            onClick={() => handleTaskbarButtonClick(app.name)}
          >
            <IconContext.Provider value={{ size: '1em' }}>
              <div className="flex flex-col items-center justify-center text-3xl">
                {app.icon}
                {/* <span>{app.name}</span> */}
              </div>
            </IconContext.Provider>
          </div>
        ))}
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
