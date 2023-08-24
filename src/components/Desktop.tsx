'use client';

import { useState } from 'react';
import Taskbar from './Taskbar';
import Window from './Window';
import { apps } from '@/content/apps';

export default function Desktop() {
  const [activeApps, setActiveApps] = useState(apps);

  const handleClose = (name: string) => {
    setActiveApps((prevApps) => {
      return prevApps.map((app) => {
        if (app.name === name) {
          return { ...app, state: 0 };
        } else {
          return app;
        }
      });
    });
  };

  const handleWindowClick = (id: number) => {
    setActiveApps((prevApps) => {
      const appIndex = prevApps.findIndex((app) => app.id === id);
      const app = prevApps[appIndex];
      const newApps = [...prevApps];
      newApps.splice(appIndex, 1);
      newApps.push(app);
      return newApps;
    });
  };

  const windowCount = activeApps.filter((app) => app.state === 1).length;

  return (
    <div className="flex h-screen w-screen flex-col-reverse">
      <Taskbar apps={[activeApps, setActiveApps]} onWindowClick={handleWindowClick} />
      <div className="h-full w-full">
        {activeApps.map((app) => {
          const { id, name, icon, alt, window, state } = app;
          if (state === 1)
            return (
              <Window
                key={id}
                name={name}
                icon={icon}
                count={windowCount}
                onClose={() => handleClose(name)}
                onClick={() => handleWindowClick(id)}             
                content={window}
              />
            )
        })}

      </div>
    </div>
  );
}
