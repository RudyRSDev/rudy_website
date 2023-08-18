export function About() {
  const boxes = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap">
      <h1 className="text-lg text-red">About</h1>
      <div className="grid grid-cols-2">
        {boxes.slice(0, 2).map((box) => (
          <div key={box} className="box">
            Box {box}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        {boxes.slice(2, 4).map((box) => (
          <div key={box} className="box">
            Box {box}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        {boxes.slice(4, 6).map((box) => (
          <div key={box} className="box">
            Box {box}
          </div>
        ))}
      </div>
    </div>
  );
}
