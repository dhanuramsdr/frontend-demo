const Sample4 = () => {
  return (
    <div className="w-1/2 border-4 border-green-700">
      <h1 className="text-white">Today/week</h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 border-4 border-amber-300 gap-10">
        <div className="col-span-2  border-4 border-amber-300">01</div>
        <div className="col-span-2 border-4 border-amber-300">02</div>
        <div className="row-span-1  border-4 border-amber-300 ">03</div>
        <div>04</div>
        <div>05</div>
      </div>
    </div>
  );
};

export default Sample4;
