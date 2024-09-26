import React from "react";

export default function ProductCard({
  category,
  description,
  image,
  price,
  id,
  title,
}) {
  return (
    <div className="w-1/3 h-72 rounded-lg overflow-hidden border-[1px] border-slate-300 shadow-sm hover:shadow-xl">
      <img src={image} alt={title} className="w-full object-cover h-1/2" />
      <div className="flex items-start justify-center flex-col gap-2 px-5 mt-5">
        <p className="text-xs">{title}</p>
        <p className="text-xs font-light">{category}</p>
        <p className="font-semibold">{price}$</p>
      </div>
    </div>
  );
}
