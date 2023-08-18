export function Education() {
  const boxes = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap flex-col justify-center items-center">
      <h1 className="text-lg text-red">Education</h1>
      <div className="grid grid-cols-2">
        {boxes.slice(0, 2).map((box) => (
          <div key={box} className="box h-32 w-32 bg-red-900 flex justify-center items-center">
            Box {box}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        {boxes.slice(2, 4).map((box) => (
          <div key={box} className="box h-32 w-32 bg-red-900 flex justify-center items-center">
            Box {box}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        {boxes.slice(4, 6).map((box) => (
          <div key={box} className="box h-32 w-32 bg-red-900 flex justify-center items-center">
            Box {box}
          </div>
        ))}
      </div>
    </div>
  );
}
