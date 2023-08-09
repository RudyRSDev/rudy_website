'use client';

import { useState } from 'react';
import Taskbar from './Taskbar';
import Window from './Window';
import { Home, About } from './windows';

export default function Desktop() {
  const [activeBtns, setActiveBtns] = useState<string[]>([]);

  const handleBtnClick = (btnName: string) => {
    setActiveBtns([...activeBtns, btnName]);
  };

  const handleCloseWindow = (btnName: string) => {
    setActiveBtns(activeBtns.filter((name) => name !== btnName));
  };

  return (
    <div className="flex h-screen w-screen flex-col-reverse">
      <Taskbar onButtonClick={handleBtnClick} />
      <div className="h-full w-full">
        {activeBtns.map((btnName) => {
          if (btnName === 'home') {
            return (
              <Home
                key={btnName}
                rndWidth={window.innerWidth / 2}
                rndHeight={window.innerHeight / 2}
                xCord={window.innerWidth / 2 / 2}
                yCord={window.innerHeight / 2 / 2}
                onClose={() => handleCloseWindow(btnName)}
              />
            );
          } else if (btnName === 'about') {
            return (
              <About
                key={btnName}
                rndWidth={window.innerWidth / 2}
                rndHeight={window.innerHeight / 2}
                xCord={window.innerWidth / 2 / 2}
                yCord={window.innerHeight / 2 / 2}
                onClose={() => handleCloseWindow(btnName)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
