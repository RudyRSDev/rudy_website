'use client';

import { useState } from 'react';
import Taskbar from './Taskbar';
import Window from './Window';

export default function Desktop() {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  const handleBtnClick = (btnName: string) => {
    setActiveBtn(btnName);
  };

  const handleCloseWindow = () => {
    setActiveBtn(null);
  };

  return (
    <div className="-z-40 h-full w-auto">
      {activeBtn && (
        <Window
          title={'Window ${activeBtn}'}
          width={1280}
          height={720}
          onClose={handleCloseWindow}
        />
      )}
      <Taskbar onButtonClick={handleBtnClick} />
    </div>
  );
}
