import { useState } from 'react';
import { Rnd } from 'react-rnd';

interface WindowProps {
  title: string;
  width: number;
  height: number;
  onClose: () => void;
}

export default function Window(props: WindowProps) {
  const { title, width, height, onClose } = props;
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <Rnd
          className="flex items-center justify-center rounded bg-black/40 backdrop-blur-lg"
          default={{ x: 500, y: 300, width: width, height: height }}
          minWidth={width / 2}
          minHeight={height / 2}
          bounds="window"
          cancel=".win_content"
        >
          <div className="handle mx-2 my-2 flex items-center justify-between">
            <h2 className="text-lg font-medium text-white">Window Title</h2>
            <div className="flex flex-row gap-4">
              <button className="h-5 w-5 rounded-full bg-green-500"></button>
              <button className="h-5 w-5 rounded-full bg-yellow-500"></button>
              <button
                className="h-5 w-5 rounded-full bg-red-500"
                onClick={handleClose}
              ></button>
            </div>
          </div>
          <div className="win_content mx-2 flex cursor-default flex-col items-center justify-center bg-white">
            <p>Window Content Goes Here</p>
          </div>
        </Rnd>
      )}
    </>
  );
}
