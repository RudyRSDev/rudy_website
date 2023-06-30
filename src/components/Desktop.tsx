'use client';

import { useState } from 'react';
import Taskbar from './Taskbar';
import Window from './Window';
import { Home } from './windows';

export default function Desktop() {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  const handleBtnClick = (btnName: string) => {
    setActiveBtn(btnName);
  };

  const handleCloseWindow = () => {
    setActiveBtn(null);
  };

  return (
    <div className="flex h-screen w-screen flex-col-reverse">
      <Taskbar onButtonClick={handleBtnClick} />
      <div className="h-full w-full">
        {activeBtn && (
          <Home
            rndWidth={window.innerWidth / 2}
            rndHeight={window.innerHeight / 2}
            xCord={window.innerWidth / 2 / 2}
            yCord={window.innerHeight / 2 / 2}
            onClose={handleCloseWindow}
          />
        )}{' '}
      </div>
    </div>
  );
}
