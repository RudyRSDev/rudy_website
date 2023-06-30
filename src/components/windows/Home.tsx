import { useRef, useState } from 'react';
import { Rnd } from 'react-rnd';

interface WindowProps {
  rndWidth: number;
  rndHeight: number;
  xCord: number;
  yCord: number;
  onClose: () => void;
}

export function Home(props: WindowProps) {
  const { rndWidth, rndHeight, xCord, yCord, onClose } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [state, setState] = useState({
    x: xCord,
    y: yCord,
    width: rndWidth,
    height: rndHeight,
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setState({
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setIsMaximized(true);
  };

  const handleMinimize = () => {
    setState({
      x: xCord,
      y: yCord,
      width: rndWidth,
      height: rndHeight,
    });
    setIsMaximized(false);
  };

  return (
    <>
      {isOpen && (
        <Rnd
          className="flex items-center justify-center rounded bg-black/40 backdrop-blur-lg"
          size={{ width: state.width, height: state.height }}
          position={{ x: state.x, y: state.y }}
          minWidth={rndWidth / 2}
          minHeight={rndHeight / 2}
          bounds="window"
          cancel=".win_content"
          onDragStop={(e, d) => {
            setState({ ...state, x: d.x, y: d.y });
          }}
          onResize={(e, direction, ref, delta, position) => {
            setState({
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height),
              x: position.x,
              y: position.y,
            });
          }}
        >
          <div className="handle mx-2 my-2 flex items-center justify-between">
            <h2 className="text-lg font-medium text-white">Home</h2>
            <div className="flex flex-row gap-4">
              <button className="h-5 w-5 rounded-full bg-green-500"></button>
              {isMaximized ? (
                <button
                  onClick={handleMinimize}
                  className="h-5 w-5 rounded-full bg-yellow-500"
                ></button>
              ) : (
                <button
                  onClick={handleMaximize}
                  className="h-5 w-5 rounded-full bg-yellow-500"
                ></button>
              )}
              <button
                className="h-5 w-5 rounded-full bg-red-500"
                onClick={handleClose}
              ></button>
            </div>
          </div>
          <div className="win_content mx-2 flex cursor-default flex-col items-center justify-center bg-white">
            <p>X Cord: {state.x}</p>
            <p>Y Cord: {state.y}</p>
            <p>height: {state.width}</p>
            <p>width: {state.height}</p>
          </div>
        </Rnd>
      )}
    </>
  );
}
