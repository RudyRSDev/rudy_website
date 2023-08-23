import { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';

interface WindowProps {
  name: string;
  icon: JSX.Element;
  onClose: () => void;
  onClick?: () => void;
  content: React.ReactNode;
}

export default function Window(props: WindowProps) {
  const { name, icon, onClose, onClick, content } = props;

  const [isMaximized, setIsMaximized] = useState(false);
  const [state, setState] = useState({
    x: 500,
    y: 500,
    width: 1000,
    height: 500,
  });

  const handleMaximize = () => {
    setState({
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight - 96,
    });
    setIsMaximized(true);
  };

  const handleMinimize = () => {
    setState({
      x: Math.round(window.innerWidth * 0.26),
      y: Math.round(window.innerHeight * 0.15),
      width: Math.round(window.innerWidth * 0.50),
      height: Math.round(window.innerHeight * 0.60),
    });
    setIsMaximized(false);
  };

  const handleWindowResize = () => {
    setState({
      x: Math.round(window.innerWidth * 0.26),
      y: Math.round(window.innerHeight * 0.15),
      width: Math.round(window.innerWidth * 0.50),
      height: Math.round(window.innerHeight * 0.60),
    });
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const initWidth = state.width;
  const initHeight = state.height;

  return (
    <Rnd
      className="flex flex-col items-center justify-center rounded bg-black/40 backdrop-blur-lg"
      onClick={onClick}
      size={{ width: state.width, height: state.height }}
      position={{ x: state.x, y: state.y }}
      minWidth={640}
      minHeight={440}
      bounds="parent"
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
      <div className="flex flex-col h-full overflow-hidden">
        <div className="handle flex justify-between items-center my-2 mx-4">
          <div className="flex text-lg font-medium text-white items-center gap-2">
            {icon}
            {name}
            <h1 className="font-thin"> Debug w:{state.width} h:{state.height} x:{state.x} y:{state.y}</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="h-5 w-5 rounded-full bg-green-500" onClick={onClose}></button>
            {isMaximized ? (
              <button className="h-5 w-5 rounded-full bg-yellow-500" onClick={handleMinimize}></button>
            ) : (
              <button className="h-5 w-5 rounded-full bg-yellow-500" onClick={handleMaximize}></button>
            )}
            <button className="h-5 w-5 rounded-full bg-red-500" onClick={onClose}></button>
          </div>
        </div>
        <div className="win_content cursor-default flex-grow px-4 pb-4 overflow-auto rounded">
          {content}
        </div>
      </div>
    </Rnd>
  );
}