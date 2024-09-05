import React from "react";
import tomatoPng from "../../public/21-214359_tomatoes-png-single-fruits-and-vegetables-transparent-png.png";

export default function Category() {
  return (
    <div className="flex w-full justify-center flex-col items-center gap-10 py-20">
      <h2 className="text-4xl font-light italic">Tomato Categories</h2>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <div className="flex items-center gap-5 justify-between rounded-xl px-5 py-3 drop-shadow-xl bg-[#ff8b81] w-[250px] ">
          <img src={tomatoPng} className="w-20" />
          <h3 className="text-xl font-semibold">Tomato Fact</h3>
        </div>
        <div className="flex items-center gap-5 justify-between rounded-xl px-5 py-3 drop-shadow-xl bg-[#ff8b81] w-[250px]  cursor-pointer">
          <img src={tomatoPng} className="w-20" />
          <h3 className="text-xl font-semibold">Tomato Delicious</h3>
        </div>
        <div className="flex items-center gap-5 justify-between rounded-xl px-5 py-3 drop-shadow-xl bg-[#ff8b81] w-[250px] ">
          <img src={tomatoPng} className="w-20" />
          <h3 className="text-xl font-semibold">Tomato Funs</h3>
        </div>
      </div>
    </div>
  );
}
