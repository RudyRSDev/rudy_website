'use client';

import { useState } from 'react';
import Taskbar from './Taskbar';
import Window from './Window';
import { apps } from '@/content/apps';

function getWindowDimensions() {
  return {
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,
    x: window.innerWidth / 4,
    y: window.innerHeight / 4,
  };
}

export default function Desktop() {
  const [activeApps, setActiveApps] = useState(apps);
  const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });

  const handleClose = (name: string) => {

  }
  const handleMultiWindow = () => {
    setWindowPos({ x: windowPos.x + 20, y: windowPos.y + 20 })
  }

  return (
    <div className="flex h-screen w-screen flex-col-reverse">
      <Taskbar onButtonClick={() => handleClose} />
      <div className="h-full w-full">
        {activeApps.map((app) => {
          const { id, name, icon, alt, window, state } = app;
          const { width, height, x, y } = getWindowDimensions();
          if (state === 1)
            return (
              <Window
                key={id}
                name={name}
                icon={icon}
                rndWidth={width}
                rndHeight={height}
                xCord={x + (id * 30)}
                yCord={y + (id * 30)}
                onClose={() => handleClose(name)}
                content={window}
              />
            )
        })}

      </div>
    </div>
  );
}
